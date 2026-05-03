"""
自研规则型智能辅助决策模块
用于：
- 方案解释
- 调度待办
- 风险预警
- 决策问答（表单式）
- 受限业务问答

注意：
1. 不参与 NSGA-II / ACO 核心优化计算
2. 仅基于前端传入的结构化结果做解释与建议
3. 输出尽量具体，避免空话
"""

from __future__ import annotations

import re
from typing import Any, Dict, List, Optional, Tuple


def _to_float(value: Any, default: float = 0.0) -> float:
    try:
        if value is None or value == "":
            return default
        return float(value)
    except Exception:
        return default


def _to_int(value: Any, default: int = 0) -> int:
    try:
        if value is None or value == "":
            return default
        return int(float(value))
    except Exception:
        return default


def _safe_text(value: Any, default: str = "") -> str:
    if value is None:
        return default
    text = str(value).strip()
    return text if text else default


def _display_text(value: Any, default: str) -> str:
    text = _safe_text(value, default)
    lowered = text.lower()
    if "_" in text or re.search(r"[A-Za-z]", text) or lowered.startswith(("dispatcher", "vehicle", "route")):
        return default
    return text


def _pct(value: Any) -> float:
    num = _to_float(value, 0.0)
    return num * 100 if 0 < num <= 1 else num


def _get_role_name(role: str) -> str:
    return "调度员" if role == "dispatcher" else "管理员"


def _extract_compare(payload: Dict[str, Any]) -> Dict[str, Any]:
    compare = payload.get("compare") or {}
    smart = compare.get("smart") or {}
    manual = compare.get("manual") or {}
    return {
        "smart": {
            "coverage": _pct(smart.get("coverage")),
            "avg_distance": _to_float(smart.get("avg_distance")),
            "balance": _to_float(smart.get("balance")),
            "capacity": _to_float(smart.get("capacity")),
        },
        "manual": {
            "coverage": _pct(manual.get("coverage")),
            "avg_distance": _to_float(manual.get("avg_distance")),
            "balance": _to_float(manual.get("balance")),
            "capacity": _to_float(manual.get("capacity")),
        },
        "recommended_scheme": _safe_text(compare.get("recommended_scheme"), "none"),
    }


def _extract_dispatch(payload: Dict[str, Any]) -> Dict[str, Any]:
    dispatch = payload.get("dispatch") or {}
    routes = dispatch.get("routes") or []
    cleaned = []
    for idx, item in enumerate(routes):
        cleaned.append(
            {
                "vehicle_id": _display_text(item.get("vehicle_id") or item.get("vehicle_name"), ""),
                "name": _display_text(item.get("name"), f"路线{idx + 1}"),
                "from": _display_text(item.get("from"), "供应点"),
                "to": _display_text(item.get("to"), "需求点"),
                "transfer": _to_int(item.get("transfer")),
                "shortage": _to_int(item.get("shortage")),
                "distance_m": _to_float(item.get("distance_m")),
            }
        )
    return {
        "routes": cleaned,
        "total_distance_m": _to_float(dispatch.get("total_distance_m")),
        "shortage_count": _to_int(dispatch.get("shortage_count")),
    }


def _extract_metrics(payload: Dict[str, Any]) -> Dict[str, Any]:
    metrics = payload.get("metrics") or {}
    return {
        "coverage": _pct(metrics.get("coverage")),
        "avg_distance": _to_float(metrics.get("avg_distance")),
        "balance": _to_float(metrics.get("balance")),
        "low_battery_count": _to_int(metrics.get("low_battery_count")),
    }


def _extract_battery(payload: Dict[str, Any]) -> Dict[str, Any]:
    battery = payload.get("battery") or {}
    routes = battery.get("routes") or []
    cleaned_routes = []
    for idx, item in enumerate(routes):
        cleaned_routes.append(
            {
                "name": _safe_text(item.get("name"), f"换电路线{idx + 1}"),
                "vehicle_name": _safe_text(item.get("vehicle_name") or item.get("vehicle_id"), f"换电运维车{idx + 1}"),
                "start": _safe_text(item.get("start"), "补给点"),
                "end": _safe_text(item.get("end"), "补给点"),
                "service_count": _to_int(item.get("service_count")),
                "distance_m": _to_float(item.get("distance_m")),
            }
        )

    return {
        "low_battery_count": _to_int(battery.get("low_battery_count")),
        "route_count": max(_to_int(battery.get("route_count")), len(cleaned_routes)),
        "capacity_per_trip": _to_int(battery.get("capacity_per_trip")),
        "total_distance_m": _to_float(battery.get("total_distance_m")),
        "routes": cleaned_routes,
    }


def _scheme_name(key: str) -> str:
    mapping = {
        "smart": "智能方案",
        "manual": "人工方案",
        "auto": "自动推荐方案",
        "none": "当前未形成明确推荐方案",
    }
    return mapping.get(key, "当前方案")


# def _better_scheme_by_preference(compare: Dict[str, Any], preference: str) -> Tuple[str, str]:
#     smart = compare["smart"]
#     manual = compare["manual"]

#     if preference == "coverage":
#         if smart["coverage"] >= manual["coverage"]:
#             return "smart", f"智能方案覆盖率更高（{smart['coverage']:.1f}% vs {manual['coverage']:.1f}%）"
#         return "manual", f"人工方案覆盖率更高（{manual['coverage']:.1f}% vs {smart['coverage']:.1f}%）"

#     if preference == "balance":
#         if smart["balance"] >= manual["balance"]:
#             return "smart", f"智能方案均衡性更好（{smart['balance']:.0f} vs {manual['balance']:.0f}）"
#         return "manual", f"人工方案均衡性更好（{manual['balance']:.0f} vs {smart['balance']:.0f}）"

#     if smart["avg_distance"] <= manual["avg_distance"]:
#         return "smart", f"智能方案平均步行距离更短（{round(smart['avg_distance'])}米 vs {round(manual['avg_distance'])}米）"
#     return "manual", f"人工方案平均步行距离更短（{round(manual['avg_distance'])}米 vs {round(smart['avg_distance'])}米）"

def _better_scheme_by_preference(compare: Dict[str, Any], preference: str) -> Tuple[str, str]:
    smart = compare["smart"]
    manual = compare["manual"]

    coverage_diff = abs(smart["coverage"] - manual["coverage"])
    distance_diff = abs(smart["avg_distance"] - manual["avg_distance"])
    balance_diff = abs(smart["balance"] - manual["balance"])

    if preference == "coverage":
        if coverage_diff < 0.5:
            return "tie", f"两种方案覆盖率接近（智能{smart['coverage']:.1f}% vs 人工{manual['coverage']:.1f}%）"
        if smart["coverage"] > manual["coverage"]:
            return "smart", f"智能方案覆盖率更高（{smart['coverage']:.1f}% vs {manual['coverage']:.1f}%）"
        return "manual", f"人工方案覆盖率更高（{manual['coverage']:.1f}% vs {smart['coverage']:.1f}%）"

    if preference == "balance":
        if balance_diff < 1:
            return "tie", f"两种方案负载均衡性接近（智能{smart['balance']:.0f} vs 人工{manual['balance']:.0f}）"
        if smart["balance"] > manual["balance"]:
            return "smart", f"智能方案均衡性更好（{smart['balance']:.0f} vs {manual['balance']:.0f}）"
        return "manual", f"人工方案均衡性更好（{manual['balance']:.0f} vs {smart['balance']:.0f}）"

    # cost / speed 默认更关注距离
    if distance_diff < 5:
        return "tie", f"两种方案平均步行距离接近（智能{round(smart['avg_distance'])}米 vs 人工{round(manual['avg_distance'])}米）"
    if smart["avg_distance"] < manual["avg_distance"]:
        return "smart", f"智能方案平均步行距离更短（{round(smart['avg_distance'])}米 vs {round(manual['avg_distance'])}米）"
    return "manual", f"人工方案平均步行距离更短（{round(manual['avg_distance'])}米 vs {round(smart['avg_distance'])}米）"


def _rank_routes(dispatch: Dict[str, Any]) -> List[Dict[str, Any]]:
    routes = dispatch.get("routes", [])
    return sorted(
        routes,
        key=lambda x: (x["shortage"], x["transfer"], -x["distance_m"]),
        reverse=True,
    )


def _top_route_sentence(dispatch: Dict[str, Any]) -> str:
    ranked = _rank_routes(dispatch)
    if not ranked:
        return "当前尚未形成调度路线。"
    top = ranked[0]
    return (
        f"当前优先级最高的是{top['name']}，建议优先处理\"{top['from']}->{top['to']}\"，"
        f"转运{top['transfer']}辆，关联缺口{top['shortage']}辆，路线长度约{round(top['distance_m'])}米。"
    )


def _risk_bullets(metrics: Dict[str, Any], dispatch: Dict[str, Any], battery: Dict[str, Any], compare: Optional[Dict[str, Any]]) -> List[str]:
    bullets: List[str] = []

    coverage = metrics.get("coverage", 0.0)
    avg_distance = metrics.get("avg_distance", 0.0)
    balance = metrics.get("balance", 0.0)
    low_battery_count = max(metrics.get("low_battery_count", 0), battery.get("low_battery_count", 0))
    battery_route_count = battery.get("route_count", 0)
    battery_total_distance = battery.get("total_distance_m", 0.0)
    shortage_count = dispatch.get("shortage_count", 0)
    total_distance = dispatch.get("total_distance_m", 0.0)

    if coverage and coverage < 60:
        bullets.append(f"当前覆盖率仅{coverage:.1f}%，偏低，建议优先补充停车点或调整当前方案。")
    elif coverage and coverage < 75:
        bullets.append(f"当前覆盖率为{coverage:.1f}%，总体可用，但仍应关注覆盖薄弱区域。")

    if avg_distance and avg_distance > 260:
        bullets.append(f"平均步行距离约{round(avg_distance)}米，偏长，可能影响取还车便利性。")

    if balance and balance < 60:
        bullets.append(f"当前负载均衡度约{balance:.0f}，部分停车点可能存在过载或闲置。")

    if shortage_count >= 3:
        bullets.append(f"当前存在{shortage_count}个缺口点，建议优先处理连续缺车区域。")
    elif shortage_count > 0:
        bullets.append(f"当前仍有{shortage_count}个缺口点，建议保持短周期调度。")

    if total_distance and total_distance > 2500:
        bullets.append(f"本轮调度总距离约{round(total_distance)}米，调度成本偏高，后续可优化路径组织。")

    if low_battery_count >= 10:
        bullets.append(f"当前低电量车辆较多（{low_battery_count}辆），需同步安排换电运维。")
    elif low_battery_count > 0:
        bullets.append(f"当前有{low_battery_count}辆低电量车辆，建议结合调度任务分批处理。")

    if battery_route_count > 0:
        if battery_total_distance > 0:
            bullets.append(f"已形成{battery_route_count}条换电路线，总距离约{round(battery_total_distance)}米，应关注换电运维与调度任务的时间冲突。")
        else:
            bullets.append(f"已形成{battery_route_count}条换电路线，应确认运维车容量和服务顺序是否满足当前低电量压力。")

    if compare:
        rec = compare.get("recommended_scheme", "none")
        if rec == "smart":
            bullets.append("当前推荐方案为智能方案，建议以其为主，再针对局部点位做人工微调。")
        elif rec == "manual":
            bullets.append("当前推荐方案为人工方案，说明现有人工布局在当前权衡目标下更占优。")

    if not bullets:
        bullets.append("当前未发现明显高风险项，建议继续观察选址、调度与运维指标变化。")

    return bullets[:5]


# def generate_compare_report(payload: Dict[str, Any]) -> Dict[str, Any]:
#     compare = _extract_compare(payload)
#     smart = compare["smart"]
#     manual = compare["manual"]
#     recommended = compare["recommended_scheme"]

#     if not (smart["coverage"] or manual["coverage"] or smart["avg_distance"] or manual["avg_distance"]):
#         return {"text": "当前未获取到可对比的方案指标，请先完成智能选址与人工选址。"}

#     parts: List[str] = []

#     if recommended in ("smart", "manual"):
#         parts.append(f"当前更推荐{_scheme_name(recommended)}。")
#     else:
#         parts.append("当前两种方案尚未形成明确推荐结论。")

#     if smart["coverage"] != manual["coverage"]:
#         better = "智能方案" if smart["coverage"] > manual["coverage"] else "人工方案"
#         parts.append(f"{better}在覆盖率上更优（智能{smart['coverage']:.1f}%，人工{manual['coverage']:.1f}%）。")

#     if smart["avg_distance"] != manual["avg_distance"]:
#         better = "智能方案" if smart["avg_distance"] < manual["avg_distance"] else "人工方案"
#         parts.append(f"{better}在步行距离上更有优势（智能{round(smart['avg_distance'])}米，人工{round(manual['avg_distance'])}米）。")

#     if smart["balance"] != manual["balance"]:
#         better = "智能方案" if smart["balance"] > manual["balance"] else "人工方案"
#         parts.append(f"{better}的负载均衡性更好（智能{smart['balance']:.0f}，人工{manual['balance']:.0f}）。")

#     if recommended == "smart":
#         parts.append("建议以智能方案为主，并重点检查局部高压区域是否需要人工微调。")
#     elif recommended == "manual":
#         parts.append("建议保留人工方案，同时参考智能方案补足覆盖薄弱点。")
#     else:
#         parts.append("建议根据当前管理目标进一步明确偏好后再定稿。")

#     return {"text": " ".join(parts)[:180]}

def generate_compare_report(payload: Dict[str, Any]) -> Dict[str, Any]:
    compare = _extract_compare(payload)
    smart = compare["smart"]
    manual = compare["manual"]
    recommended = compare["recommended_scheme"]

    if not (smart["coverage"] or manual["coverage"] or smart["avg_distance"] or manual["avg_distance"]):
        return {"text": "当前未获取到可对比的方案指标，请先完成智能选址与人工选址。"}

    parts: List[str] = []

    if recommended in ("smart", "manual"):
        parts.append(f"当前更推荐{_scheme_name(recommended)}。")
    else:
        parts.append("当前两种方案尚未形成明确推荐结论。")

    coverage_diff = abs(smart["coverage"] - manual["coverage"])
    if coverage_diff >= 0.5:
        better = "智能方案" if smart["coverage"] > manual["coverage"] else "人工方案"
        parts.append(
            f"{better}在覆盖率上更优（智能{smart['coverage']:.1f}%，人工{manual['coverage']:.1f}%）。"
        )
    elif smart["coverage"] or manual["coverage"]:
        parts.append(
            f"两种方案的覆盖率接近（智能{smart['coverage']:.1f}%，人工{manual['coverage']:.1f}%）。"
        )

    distance_diff = abs(smart["avg_distance"] - manual["avg_distance"])
    if distance_diff >= 5:
        better = "智能方案" if smart["avg_distance"] < manual["avg_distance"] else "人工方案"
        parts.append(
            f"{better}在步行距离上更有优势（智能{round(smart['avg_distance'])}米，人工{round(manual['avg_distance'])}米）。"
        )
    elif smart["avg_distance"] or manual["avg_distance"]:
        parts.append(
            f"两种方案的步行距离接近（智能{round(smart['avg_distance'])}米，人工{round(manual['avg_distance'])}米）。"
        )

    balance_diff = abs(smart["balance"] - manual["balance"])
    if balance_diff >= 1:
        better = "智能方案" if smart["balance"] > manual["balance"] else "人工方案"
        parts.append(
            f"{better}的负载均衡性更好（智能{smart['balance']:.0f}，人工{manual['balance']:.0f}）。"
        )
    elif smart["balance"] or manual["balance"]:
        parts.append(
            f"两种方案的负载均衡性接近（智能{smart['balance']:.0f}，人工{manual['balance']:.0f}）。"
        )

    if recommended == "smart":
        parts.append("建议以智能方案为主，并重点检查局部高压区域是否需要人工微调。")
    elif recommended == "manual":
        parts.append("建议保留人工方案，同时参考智能方案补足覆盖薄弱点。")
    else:
        parts.append("建议根据当前管理目标进一步明确偏好后再定稿。")

    return {"text": " ".join(parts)[:180]}


def generate_dispatch_priority(payload: Dict[str, Any]) -> Dict[str, Any]:
    role = _safe_text(payload.get("role"), "admin")
    dispatch = _extract_dispatch(payload)
    battery = _extract_battery(payload)
    routes = dispatch["routes"]
    battery_routes = battery.get("routes", [])
    
    bullets: List[str] = []
    
    # 分析调度路线
    if routes:
        ranked = _rank_routes(dispatch)
        max_items = 3 if role == "dispatcher" else 4
        for idx, route in enumerate(ranked[:max_items]):
            route_label = _display_text(route.get("name") or route.get("vehicle_id"), f"路线{idx + 1}")
            bullets.append(
                f"优先级{idx + 1}：{route_label}，处理\"{route['from']}->{route['to']}\"，转运{route['transfer']}辆，缺口{route['shortage']}辆，路线约{round(route['distance_m'])}米，注意核对起终点车辆数量。"
            )
    
    # 分析换电路线
    if battery_routes:
        if role == "dispatcher":
            # 调度员只显示分配给自己的换电路线
            for idx, route in enumerate(battery_routes[:2]):
                bullets.append(
                    f"换电任务{idx + 1}：{route['vehicle_name']}（{route['name']}），服务{route['service_count']}辆低电量车辆，路线约{round(route['distance_m'])}米，请按顺序完成换电。"
                )
        else:
            # 管理员显示所有换电路线摘要
            total_service = sum(r.get('service_count', 0) for r in battery_routes)
            total_distance = sum(r.get('distance_m', 0) for r in battery_routes)
            bullets.append(f"换电运维：共{battery.get('route_count', 0)}条路线，服务{total_service}辆低电量车辆，总距离约{round(total_distance)}米。")
            for idx, route in enumerate(battery_routes[:2]):
                bullets.append(
                    f"换电任务{idx + 1}：{route['vehicle_name']}（{route['name']}），服务{route['service_count']}辆，路线约{round(route['distance_m'])}米。"
                )
    elif role == "dispatcher" and not routes:
        # 调度员没有任何任务时
        return {"bullets": ["当前未分配任何任务，请联系管理员分配调度路线或换电路线。"]}

    total_distance = dispatch.get("total_distance_m", 0.0)
    if role != "dispatcher" and total_distance > 0:
        bullets.append(f"本轮调度总距离约{round(total_distance)}米，建议优先完成高缺口、短路径任务。")

    return {"bullets": bullets[:5]}


def generate_risk_alerts(payload: Dict[str, Any]) -> Dict[str, Any]:
    metrics = _extract_metrics(payload)
    dispatch = _extract_dispatch(payload)
    battery = _extract_battery(payload)
    compare = _extract_compare(payload) if payload.get("compare") else None
    return {"bullets": _risk_bullets(metrics, dispatch, battery, compare)}


def generate_decision_answer(payload: Dict[str, Any]) -> Dict[str, Any]:
    role = _safe_text(payload.get("role"), "admin")
    preference = _safe_text(payload.get("preference"), "coverage")
    compare = _extract_compare(payload) if payload.get("compare") else None
    dispatch = _extract_dispatch(payload)
    battery = _extract_battery(payload)

    pref_name = {
        "coverage": "优先覆盖率",
        "cost": "优先降低调度成本",
        "balance": "优先负载均衡",
        "speed": "优先快速缓解缺车",
    }.get(preference, "当前偏好")

    lines: List[str] = [f'在“{pref_name}”这一偏好下，建议如下：']

    if preference in ("coverage", "balance", "cost") and compare:
        smart = compare["smart"]
        manual = compare["manual"]
        recommended = compare.get("recommended_scheme", "none")

        coverage_diff = abs(smart["coverage"] - manual["coverage"])
        distance_diff = abs(smart["avg_distance"] - manual["avg_distance"])
        balance_diff = abs(smart["balance"] - manual["balance"])

        if preference == "coverage":
            if coverage_diff < 0.5:
                if recommended in ("smart", "manual"):
                    lines.append(
                        f"从当前偏好看，两种方案覆盖率接近（智能{smart['coverage']:.1f}% vs 人工{manual['coverage']:.1f}%）。"
                        f"由于差异不明显，建议优先参考当前推荐的{_scheme_name(recommended)}。"
                    )
                else:
                    lines.append(
                        f"从当前偏好看，两种方案覆盖率接近（智能{smart['coverage']:.1f}% vs 人工{manual['coverage']:.1f}%）。"
                        "由于差异不明显，建议结合现场需求进一步判断。"
                    )
            elif smart["coverage"] > manual["coverage"]:
                lines.append(
                    f"方案选择上，建议优先采用智能方案，因为智能方案覆盖率更高（{smart['coverage']:.1f}% vs {manual['coverage']:.1f}%）。"
                )
            else:
                lines.append(
                    f"方案选择上，建议优先采用人工方案，因为人工方案覆盖率更高（{manual['coverage']:.1f}% vs {smart['coverage']:.1f}%）。"
                )

            lines.append("执行上应先稳住覆盖薄弱区域，再决定是否压缩边缘冗余点。")

        elif preference == "balance":
            if balance_diff < 1:
                if recommended in ("smart", "manual"):
                    lines.append(
                        f"从当前偏好看，两种方案负载均衡性接近（智能{smart['balance']:.0f} vs 人工{manual['balance']:.0f}）。"
                        f"由于差异不明显，建议优先参考当前推荐的{_scheme_name(recommended)}。"
                    )
                else:
                    lines.append(
                        f"从当前偏好看，两种方案负载均衡性接近（智能{smart['balance']:.0f} vs 人工{manual['balance']:.0f}）。"
                        "由于差异不明显，建议结合现场需求进一步判断。"
                    )
            elif smart["balance"] > manual["balance"]:
                lines.append(
                    f"方案选择上，建议优先采用智能方案，因为智能方案负载均衡性更好（{smart['balance']:.0f} vs {manual['balance']:.0f}）。"
                )
            else:
                lines.append(
                    f"方案选择上，建议优先采用人工方案，因为人工方案负载均衡性更好（{manual['balance']:.0f} vs {smart['balance']:.0f}）。"
                )

            lines.append("执行上应优先调整高压停车点周边的容量分配，避免局部堆积。")

        elif preference == "cost":
            if distance_diff < 5:
                if recommended in ("smart", "manual"):
                    lines.append(
                        f"从当前偏好看，两种方案平均步行距离接近（智能{round(smart['avg_distance'])}米 vs 人工{round(manual['avg_distance'])}米）。"
                        f"由于差异不明显，建议优先参考当前推荐的{_scheme_name(recommended)}。"
                    )
                else:
                    lines.append(
                        f"从当前偏好看，两种方案平均步行距离接近（智能{round(smart['avg_distance'])}米 vs 人工{round(manual['avg_distance'])}米）。"
                        "由于差异不明显，建议结合覆盖率、均衡性和现场需求再决定。"
                    )
            elif smart["avg_distance"] < manual["avg_distance"]:
                lines.append(
                    f"方案选择上，建议优先采用智能方案，因为智能方案平均步行距离更短（{round(smart['avg_distance'])}米 vs {round(manual['avg_distance'])}米）。"
                )
            else:
                lines.append(
                    f"方案选择上，建议优先采用人工方案，因为人工方案平均步行距离更短（{round(manual['avg_distance'])}米 vs {round(smart['avg_distance'])}米）。"
                )

            lines.append("若当前目标是降低成本，应优先选择路径更紧凑、后续调度压力更小的方案。")

    elif preference == "speed":
        if dispatch.get("routes"):
            lines.append(_top_route_sentence(dispatch))
            if dispatch.get("shortage_count", 0) > 0:
                lines.append(f"当前共有{dispatch['shortage_count']}个缺口点，应先处理缺口最大的线路，再处理次级线路。")
            else:
                ranked = _rank_routes(dispatch)
                if ranked:
                    top = ranked[0]
                    lines.append(f"可先执行\"{top['from']}->{top['to']}\"，因为其转运量为{top['transfer']}辆，最适合快速见效。")
        else:
            lines.append("当前还没有调度结果，建议先运行动态调度后再生成快速缓解建议。")

    else:
        if dispatch.get("routes"):
            lines.append(_top_route_sentence(dispatch))
        else:
            lines.append("当前可用数据不足，建议先运行选址或调度模块后再生成决策建议。")

    low_battery_count = battery.get("low_battery_count", 0)
    if low_battery_count > 0:
        route_count = battery.get("route_count", 0)
        if low_battery_count >= 10:
            lines.append(f"同时需关注{low_battery_count}辆低电量车辆，当前已规划{route_count}条换电路线，避免选址和调度优化后因低电量造成可用运力下降。")
        else:
            lines.append(f"当前有{low_battery_count}辆低电量车辆，可结合{route_count}条换电路线并行安排，不必单独作为首要矛盾。")

    if role == "dispatcher":
        lines.append("调度员执行时应优先处理系统已标记的高优先级任务，不建议临时改动整体方案。")
    else:
        lines.append("管理员可在当前建议基础上结合现场情况做小范围人工调整。")

    return {"text": " ".join(lines)[:260]}


def _answer_known_question(question: str, context: Dict[str, Any]) -> Optional[str]:
    q = question.lower()
    compare = _extract_compare({"compare": context.get("compare")}) if context.get("compare") else None
    dispatch = _extract_dispatch({"dispatch": context.get("dispatch")})
    metrics = _extract_metrics({"metrics": context.get("metrics")})
    battery = _extract_battery({"battery": context.get("battery")})

    if any(k in q for k in ["优先调度还是优先换电", "优先换电还是优先调度", "先调度还是先换电", "先换电还是先调度", "调度还是换电", "换电还是调度"]):
        dispatch_routes = dispatch.get("routes", [])
        shortage_count = dispatch.get("shortage_count", 0)
        low_count = battery.get("low_battery_count", 0)
        battery_routes = battery.get("route_count", 0)

        if low_count >= 10 and shortage_count <= 1:
            return f"建议优先换电。当前低电量车辆有{low_count}辆，已规划{battery_routes}条换电路线；若不先恢复可用电量，后续调度可用车辆会继续下降。"
        if dispatch_routes and shortage_count >= 2:
            return f"建议优先调度，并同步安排换电。当前有{shortage_count}个缺口点需要快速缓解，低电量车辆为{low_count}辆，可按已规划的{battery_routes}条换电路线并行处理。"
        if dispatch_routes and low_count > 0:
            return f"建议调度和换电并行：调度先处理已分配路线中的高缺口任务，换电按{battery_routes}条路线处理{low_count}辆低电量车辆。"
        if low_count > 0:
            return f"当前缺少明确调度路线，建议先按{battery_routes}条换电路线处理{low_count}辆低电量车辆。"
        return "当前缺少调度路线和低电量换电上下文，建议先查看动态调度结果或电池运维路线。"

    if any(k in q for k in ["推荐", "哪套", "选哪", "方案", "智能还是人工"]):
        if compare:
            smart = compare["smart"]
            manual = compare["manual"]
            recommended = compare.get("recommended_scheme", "none")
            preference = context.get("preference", "coverage")

            coverage_diff = abs(smart["coverage"] - manual["coverage"])
            distance_diff = abs(smart["avg_distance"] - manual["avg_distance"])
            balance_diff = abs(smart["balance"] - manual["balance"])

            if preference == "coverage":
                if coverage_diff < 0.5:
                    if recommended in ("smart", "manual"):
                        return (
                            f"两种方案覆盖率接近（智能{smart['coverage']:.1f}% vs 人工{manual['coverage']:.1f}%）。"
                            f"当前差异不明显，建议优先参考系统当前推荐的{_scheme_name(recommended)}。"
                        )
                    return (
                        f"两种方案覆盖率接近（智能{smart['coverage']:.1f}% vs 人工{manual['coverage']:.1f}%）。"
                        "当前差异不明显，建议结合现场需求进一步判断。"
                    )
                if smart["coverage"] > manual["coverage"]:
                    return f"当前更建议采用智能方案，主要原因是智能方案覆盖率更高（{smart['coverage']:.1f}% vs {manual['coverage']:.1f}%）。"
                return f"当前更建议采用人工方案，主要原因是人工方案覆盖率更高（{manual['coverage']:.1f}% vs {smart['coverage']:.1f}%）。"

            if preference == "balance":
                if balance_diff < 1:
                    if recommended in ("smart", "manual"):
                        return (
                            f"两种方案负载均衡性接近（智能{smart['balance']:.0f} vs 人工{manual['balance']:.0f}）。"
                            f"当前差异不明显，建议优先参考系统当前推荐的{_scheme_name(recommended)}。"
                        )
                    return (
                        f"两种方案负载均衡性接近（智能{smart['balance']:.0f} vs 人工{manual['balance']:.0f}）。"
                        "当前差异不明显，建议结合现场需求进一步判断。"
                    )
                if smart["balance"] > manual["balance"]:
                    return f"当前更建议采用智能方案，主要原因是智能方案负载均衡性更好（{smart['balance']:.0f} vs {manual['balance']:.0f}）。"
                return f"当前更建议采用人工方案，主要原因是人工方案负载均衡性更好（{manual['balance']:.0f} vs {smart['balance']:.0f}）。"

            # 默认按成本/距离偏好解释
            if distance_diff < 5:
                if recommended in ("smart", "manual"):
                    return (
                        f"两种方案平均步行距离接近（智能{round(smart['avg_distance'])}米 vs 人工{round(manual['avg_distance'])}米）。"
                        f"当前差异不明显，建议优先参考系统当前推荐的{_scheme_name(recommended)}。"
                    )
                return (
                    f"两种方案平均步行距离接近（智能{round(smart['avg_distance'])}米 vs 人工{round(manual['avg_distance'])}米）。"
                    "当前差异不明显，建议结合覆盖率、均衡性和现场需求进一步判断。"
                )
            if smart["avg_distance"] < manual["avg_distance"]:
                return f"当前更建议采用智能方案，主要原因是智能方案平均步行距离更短（{round(smart['avg_distance'])}米 vs {round(manual['avg_distance'])}米）。"
            return f"当前更建议采用人工方案，主要原因是人工方案平均步行距离更短（{round(manual['avg_distance'])}米 vs {round(smart['avg_distance'])}米）。"
        return "当前缺少方案对比数据，建议先完成智能选址和人工选址。"

    if any(k in q for k in ["先处理", "优先处理", "先做什么", "待办", "调度任务"]):
        if dispatch.get("routes"):
            return _top_route_sentence(dispatch)
        return "当前还没有调度结果，建议先运行动态调度模块。"

    if any(k in q for k in ["风险", "预警", "问题", "隐患"]):
        bullets = _risk_bullets(metrics, dispatch, battery, compare)
        return "；".join(bullets[:3])

    if any(k in q for k in ["低电量", "换电", "电池"]):
        count = battery.get("low_battery_count", 0)
        if count <= 0:
            return "当前未检测到明显的低电量车辆问题，暂无需优先安排换电运维。"
        route_count = battery.get("route_count", 0)
        cap = battery.get("capacity_per_trip", 0)
        routes = battery.get("routes", [])
        if routes:
            top = routes[0]
            return (
                f"当前共有{count}辆低电量车辆，已规划{route_count}条换电路线，单次容量为{cap}。"
                f"可先执行{top['vehicle_name']}的{top['name']}，服务{top['service_count']}辆，路线约{round(top['distance_m'])}米。"
            )
        return f"当前共有{count}辆低电量车辆，已规划{route_count}条换电路线，单次容量为{cap}。建议优先完成已分配的换电任务。"

    if any(k in q for k in ["覆盖率", "覆盖"]):
        coverage = metrics.get("coverage", 0.0)
        if coverage > 0:
            return f"当前有效方案覆盖率约为{coverage:.1f}%。若你更看重覆盖范围，建议优先保留覆盖率更高的方案。"
        return "当前尚未形成可解释的覆盖率结果，请先运行选址模块。"

    if any(k in q for k in ["成本", "距离", "路程"]):
        if dispatch.get("total_distance_m", 0) > 0:
            return f"当前调度总距离约{round(dispatch['total_distance_m'])}米。若要压低成本，应优先完成短路径且高缺口任务。"
        if compare:
            smart = compare["smart"]
            manual = compare["manual"]
            recommended = compare.get("recommended_scheme", "none")
            distance_diff = abs(smart["avg_distance"] - manual["avg_distance"])

            if distance_diff < 5:
                if recommended in ("smart", "manual"):
                    return (
                        f"两种方案平均步行距离接近（智能{round(smart['avg_distance'])}米 vs 人工{round(manual['avg_distance'])}米）。"
                        f"若以成本为先，建议优先参考系统当前推荐的{_scheme_name(recommended)}。"
                    )
                return (
                    f"两种方案平均步行距离接近（智能{round(smart['avg_distance'])}米 vs 人工{round(manual['avg_distance'])}米）。"
                    "若以成本为先，建议再结合覆盖率和均衡性综合判断。"
                )

            if smart["avg_distance"] < manual["avg_distance"]:
                return f"若以成本为先，更建议采用智能方案，因为智能方案平均步行距离更短（{round(smart['avg_distance'])}米 vs {round(manual['avg_distance'])}米）。"
            return f"若以成本为先，更建议采用人工方案，因为人工方案平均步行距离更短（{round(manual['avg_distance'])}米 vs {round(smart['avg_distance'])}米）。"

        return "当前还没有足够的成本相关结果，建议先运行选址或调度模块。"

    if any(k in q for k in ["均衡", "负载"]):
        balance = metrics.get("balance", 0.0)
        if balance > 0:
            return f"当前负载均衡度约为{balance:.0f}。若该值偏低，说明部分点位压力集中，建议优先做局部调平。"
        return "当前缺少负载均衡结果，建议先运行选址模块。"

    return None


def generate_chat_response(payload: Dict[str, Any]) -> Dict[str, Any]:
    role = _safe_text(payload.get("role"), "admin")
    question = _safe_text(payload.get("question"))
    context = payload.get("context") or {}

    if not question:
        return {"answer": "请输入与选址、调度、电池运维或风险预警相关的问题。"}

    answer = _answer_known_question(question, context)
    if answer:
        return {"answer": answer}

    role_name = _get_role_name(role)
    page = _safe_text((context.get("page") if isinstance(context, dict) else ""), "dashboard")
    return {
        "answer": f"当前为{role_name}视图，问题已超出本模块的受限问答范围。请围绕当前页面（{page}）的方案解释、调度优先级、风险预警或电池运维提问。"
    }
