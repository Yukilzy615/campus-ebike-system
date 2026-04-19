from __future__ import annotations

from typing import Any, Dict, List, Tuple


PRIORITY_LABELS = {
    "high": "高",
    "medium": "中",
    "low": "低",
}


PREFERENCE_TEXT = {
    "coverage": "优先覆盖率",
    "cost": "优先降低调度成本",
    "balance": "优先负载均衡",
    "speed": "优先快速缓解缺车",
}


ROLE_TIPS = {
    "admin": "管理员视角：关注全局方案、重点风险和任务优先级。",
    "dispatcher": "调度员视角：关注可执行任务顺序、重点站点和路线落地。",
}


RISK_THRESHOLDS = {
    "coverage_low": 60,
    "coverage_warn": 75,
    "balance_warn": 0.55,
    "walk_warn": 180,
    "shortage_warn": 3,
    "low_battery_warn": 10,
}


def _safe_float(value: Any, default: float = 0.0) -> float:
    try:
        if value is None or value == "":
            return default
        return float(value)
    except Exception:
        return default


def _safe_int(value: Any, default: int = 0) -> int:
    try:
        if value is None or value == "":
            return default
        return int(float(value))
    except Exception:
        return default


def _normalize_role(role: Any) -> str:
    role_str = str(role or "admin").strip().lower()
    return "dispatcher" if role_str == "dispatcher" else "admin"


def _best_scheme_name(compare: Dict[str, Any]) -> str:
    recommended = str(compare.get("recommended_scheme") or "").strip().lower()
    if recommended in {"smart", "智能", "智能选址"}:
        return "智能方案"
    if recommended in {"manual", "人工", "人工选址"}:
        return "人工方案"

    smart = compare.get("smart") or {}
    manual = compare.get("manual") or {}
    smart_score = 0
    manual_score = 0

    if _safe_float(smart.get("coverage")) >= _safe_float(manual.get("coverage")):
        smart_score += 1
    else:
        manual_score += 1

    if _safe_float(smart.get("avg_distance"), 10**9) <= _safe_float(manual.get("avg_distance"), 10**9):
        smart_score += 1
    else:
        manual_score += 1

    if _safe_float(smart.get("balance")) <= _safe_float(manual.get("balance")):
        smart_score += 1
    else:
        manual_score += 1

    return "智能方案" if smart_score >= manual_score else "人工方案"


def _scheme_metric_sentence(name: str, metrics: Dict[str, Any]) -> str:
    return (
        f"{name}覆盖率{_safe_float(metrics.get('coverage')):.1f}%"
        f"，平均步行距离{_safe_float(metrics.get('avg_distance')):.0f}米"
        f"，均衡性{_safe_float(metrics.get('balance')):.2f}"
        f"，总容量{_safe_int(metrics.get('capacity'))}。"
    )


def _top_dispatch_items(dispatch: Dict[str, Any], limit: int = 5) -> List[Dict[str, Any]]:
    routes = dispatch.get("routes") or dispatch.get("route_list") or []
    normalized: List[Dict[str, Any]] = []
    for idx, item in enumerate(routes):
        normalized.append({
            "name": item.get("name") or item.get("route_name") or item.get("target") or f"任务{idx + 1}",
            "from": item.get("from") or item.get("source") or item.get("supply_point") or "-",
            "to": item.get("to") or item.get("destination") or item.get("demand_point") or "-",
            "transfer": _safe_int(item.get("transfer") or item.get("transfer_count") or item.get("amount")),
            "shortage": _safe_int(item.get("shortage") or item.get("demand_gap") or item.get("need")),
            "distance": _safe_float(item.get("distance") or item.get("distance_m") or item.get("total_distance_m")),
        })
    normalized.sort(key=lambda x: (-(x["shortage"] or x["transfer"]), x["distance"] or 10**9))
    return normalized[:limit]


def _build_priority_text(item: Dict[str, Any], rank: int, role: str) -> str:
    if role == "dispatcher":
        return (
            f"{rank}. 优先处理 {item['from']} → {item['to']}，"
            f"建议先转运{max(item['transfer'], item['shortage'])}辆。"
        )
    return (
        f"{rank}. {item['from']} → {item['to']} 优先级高，"
        f"当前建议转运{max(item['transfer'], item['shortage'])}辆，"
        f"预计距离{item['distance']:.0f}米。"
    )


def _risk_items(payload: Dict[str, Any]) -> List[Dict[str, str]]:
    metrics = payload.get("metrics") or payload.get("dashboard") or {}
    compare = payload.get("compare") or {}
    dispatch = payload.get("dispatch") or {}
    battery = payload.get("battery") or {}

    coverage = _safe_float(metrics.get("coverage") or compare.get("coverage") or (compare.get("smart") or {}).get("coverage"))
    walk = _safe_float(metrics.get("avg_distance") or compare.get("avg_distance") or (compare.get("smart") or {}).get("avg_distance"))
    balance = _safe_float(metrics.get("balance") or compare.get("balance") or (compare.get("smart") or {}).get("balance"))
    shortage = _safe_int(dispatch.get("shortage_count") or dispatch.get("demand_count") or metrics.get("shortage_count"))
    low_battery = _safe_int(battery.get("low_battery_count") or metrics.get("low_battery_count"))

    risks: List[Dict[str, str]] = []
    if coverage and coverage < RISK_THRESHOLDS["coverage_low"]:
        risks.append({"level": "high", "text": f"当前方案覆盖率仅{coverage:.1f}%，低于安全阈值，建议优先补充薄弱区域停车点。"})
    elif coverage and coverage < RISK_THRESHOLDS["coverage_warn"]:
        risks.append({"level": "medium", "text": f"当前方案覆盖率为{coverage:.1f}%，已接近预警线，建议重点检查南北边缘区域。"})

    if walk and walk > RISK_THRESHOLDS["walk_warn"]:
        risks.append({"level": "medium", "text": f"平均步行距离约{walk:.0f}米，用户取车成本偏高，建议优化高频区域布点。"})

    if balance and balance > RISK_THRESHOLDS["balance_warn"]:
        risks.append({"level": "medium", "text": f"停车点负载均衡性偏弱（{balance:.2f}），部分站点可能长期拥挤或闲置。"})

    if shortage >= RISK_THRESHOLDS["shortage_warn"]:
        risks.append({"level": "high", "text": f"当前存在{shortage}个明显缺车点，建议先处理宿舍区和教学楼周边。"})

    if low_battery >= RISK_THRESHOLDS["low_battery_warn"]:
        risks.append({"level": "medium", "text": f"当前低电量车辆较多（{low_battery}辆），建议尽快安排换电任务，避免影响可用车供给。"})

    if not risks:
        risks.append({"level": "low", "text": "当前未发现明显高风险项，建议继续跟踪覆盖率、缺车点和低电量车辆数量。"})

    return risks[:5]


def generate_compare_report(payload: Dict[str, Any]) -> Dict[str, Any]:
    role = _normalize_role(payload.get("role"))
    compare = payload.get("compare") or payload
    smart = compare.get("smart") or {}
    manual = compare.get("manual") or {}
    best = _best_scheme_name(compare)

    text = (
        f"{_scheme_metric_sentence('智能方案', smart)}"
        f"{_scheme_metric_sentence('人工方案', manual)}"
        f"综合当前指标，建议优先采用{best}。"
    )

    if best == "智能方案":
        advice = "可将智能方案作为主方案，再结合人工经验微调局部点位。"
    else:
        advice = "人工方案在当前权衡下更贴近管理需求，但建议继续参考智能方案的覆盖优势。"

    if role == "dispatcher":
        advice = "调度员可优先关注当前推荐方案对应的缺车点与主要调度路线。"

    return {
        "module": "compare",
        "title": "方案对比简报",
        "text": text + advice,
        "recommended_scheme": best,
        "role_tip": ROLE_TIPS[role],
    }


def generate_dispatch_priority(payload: Dict[str, Any]) -> Dict[str, Any]:
    role = _normalize_role(payload.get("role"))
    dispatch = payload.get("dispatch") or payload
    items = _top_dispatch_items(dispatch)
    bullets = [_build_priority_text(item, idx + 1, role) for idx, item in enumerate(items)]
    if not bullets:
        bullets = ["当前暂无可执行调度任务，建议先运行调度优化。"]

    summary = "当前调度建议已按紧急程度排序，可直接作为待办清单参考。"
    if role == "dispatcher":
        summary = "以下为推荐的执行顺序，建议按列表从上到下依次处理。"

    return {
        "module": "priority",
        "title": "调度待办清单",
        "summary": summary,
        "bullets": bullets,
        "role_tip": ROLE_TIPS[role],
    }


def generate_risk_alerts(payload: Dict[str, Any]) -> Dict[str, Any]:
    role = _normalize_role(payload.get("role"))
    risks = _risk_items(payload)
    bullets = [f"[{PRIORITY_LABELS.get(item['level'], '中')}] {item['text']}" for item in risks]
    return {
        "module": "risk",
        "title": "风险预警",
        "summary": "系统已基于当前指标自动识别重点风险。",
        "bullets": bullets,
        "role_tip": ROLE_TIPS[role],
    }


def generate_decision_answer(payload: Dict[str, Any]) -> Dict[str, Any]:
    role = _normalize_role(payload.get("role"))
    preference = str(payload.get("preference") or "coverage").strip().lower()
    compare = payload.get("compare") or {}
    dispatch = payload.get("dispatch") or {}
    battery = payload.get("battery") or {}

    best_scheme = _best_scheme_name(compare)
    preference_text = PREFERENCE_TEXT.get(preference, "优先覆盖率")

    if preference == "coverage":
        answer = f"当前更适合选择{best_scheme}，因为它在覆盖率维度更占优，能优先缓解取车不便问题。"
    elif preference == "cost":
        distance = _safe_float((dispatch.get('summary') or {}).get('total_distance_m') or dispatch.get('total_distance_m'))
        answer = f"当前建议优先降低调度成本，先处理高缺口且距离较短的任务。当前总调度距离约{distance:.0f}米。"
    elif preference == "balance":
        answer = "当前建议优先关注负载均衡，避免个别停车点长期堆积或长期缺车。"
    elif preference == "speed":
        answer = "当前建议优先快速缓解缺车，先处理宿舍区、教学楼周边等高频需求点。"
    else:
        answer = f"当前建议以{preference_text}为主，结合方案指标与调度结果综合判断。"

    battery_count = _safe_int(battery.get("low_battery_count"))
    if battery_count > 0:
        answer += f" 另外当前还有{battery_count}辆低电量车辆，需同步关注运维安排。"

    if role == "dispatcher":
        answer += " 调度员执行时应优先关注系统已生成的任务顺序。"

    return {
        "module": "decision",
        "title": "决策问答",
        "text": answer,
        "preference": preference,
        "role_tip": ROLE_TIPS[role],
    }


def _detect_intent(question: str, context: Dict[str, Any]) -> str:
    q = (question or "").strip().lower()
    page = str((context or {}).get("page") or "").strip().lower()

    if any(k in q for k in ["风险", "预警", "异常"]):
        return "risk"
    if any(k in q for k in ["优先", "待办", "先处理", "任务"]):
        return "priority"
    if any(k in q for k in ["方案", "智能", "人工", "选址", "对比"]):
        return "compare"
    if any(k in q for k in ["覆盖率", "成本", "均衡", "负载", "偏好"]):
        return "decision"
    if page in {"location", "compare"}:
        return "compare"
    if page in {"dispatch", "task"}:
        return "priority"
    return "decision"


def generate_chat_response(payload: Dict[str, Any]) -> Dict[str, Any]:
    role = _normalize_role(payload.get("role"))
    question = str(payload.get("question") or "").strip()
    context = payload.get("context") or {}
    merged: Dict[str, Any] = {**context, "role": role}
    intent = _detect_intent(question, context)

    if intent == "compare":
        result = generate_compare_report(merged)
        answer = result["text"]
    elif intent == "priority":
        result = generate_dispatch_priority(merged)
        answer = result["summary"] + " " + " ".join(result["bullets"][:3])
    elif intent == "risk":
        result = generate_risk_alerts(merged)
        answer = "；".join(result["bullets"][:3])
    else:
        pref = str(context.get("preference") or "coverage")
        result = generate_decision_answer({**merged, "preference": pref})
        answer = result["text"]

    return {
        "module": "chat",
        "title": "智能辅助问答",
        "intent": intent,
        "question": question,
        "answer": answer,
        "role_tip": ROLE_TIPS[role],
    }
