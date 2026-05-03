"""
轻量反馈存储：基于 JSON 文件实现反馈创建、查询、更新。
"""

import json
import os
from datetime import datetime
from threading import Lock


_STORE_LOCK = Lock()
_ALLOWED_STATUS = {"待处理", "已处理"}


def _now_str():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def _ensure_store_file(file_path):
    abs_path = os.path.abspath(file_path)
    parent_dir = os.path.dirname(abs_path)
    if parent_dir and not os.path.exists(parent_dir):
        os.makedirs(parent_dir, exist_ok=True)

    if not os.path.exists(abs_path):
        with open(abs_path, "w", encoding="utf-8") as f:
            json.dump([], f, ensure_ascii=False, indent=2)

    return abs_path


def _load_items(file_path):
    path = _ensure_store_file(file_path)
    try:
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
            if isinstance(data, list):
                return data
    except Exception:
        pass
    return []


def _save_items(file_path, items):
    path = _ensure_store_file(file_path)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)


def _next_id(items):
    max_id = 0
    for item in items:
        try:
            current = int(item.get("id", 0))
            if current > max_id:
                max_id = current
        except Exception:
            continue
    return max_id + 1


def _build_reporter_display(role, reporter):
    role_text = "管理员" if str(role or "").strip().lower() == "admin" else "调度员"
    reporter_text = str(reporter or "").strip() or "未知用户"
    return f"{role_text}（{reporter_text}）"


def create_feedback(payload, file_path):
    reporter = str(payload.get("reporter", "")).strip() or "未知用户"
    role = str(payload.get("role", "dispatcher")).strip().lower() or "dispatcher"
    reporter_display = str(payload.get("reporter_display", "")).strip() or _build_reporter_display(role, reporter)
    feedback_type = str(payload.get("type", "其他")).strip() or "其他"
    related_task = str(payload.get("related_task", "")).strip()
    description = str(payload.get("description", "")).strip()
    priority = str(payload.get("priority", "一般")).strip() or "一般"

    if not description:
        raise ValueError("详细描述不能为空")

    with _STORE_LOCK:
        items = _load_items(file_path)
        now = _now_str()
        feedback = {
            "id": _next_id(items),
            "reporter": reporter,
            "reporter_display": reporter_display,
            "role": role,
            "type": feedback_type,
            "related_task": related_task,
            "description": description,
            "priority": priority,
            "status": "待处理",
            "admin_note": "",
            "created_at": now,
            "updated_at": now,
        }
        items.append(feedback)
        _save_items(file_path, items)
        return feedback


def list_feedback(role, reporter, file_path, status=None):
    normalized_role = str(role or "dispatcher").strip().lower()
    reporter_name = str(reporter or "").strip()
    status_filter = str(status or "").strip()

    items = _load_items(file_path)

    if normalized_role != "admin":
        filtered_items = []
        for item in items:
            item_reporter = str(item.get("reporter", "")).strip()
            item_role = str(item.get("role", "")).strip().lower()
            item_reporter_display = str(item.get("reporter_display", "")).strip()

            reporter_match = (
                not reporter_name
                or item_reporter == reporter_name
                or item_reporter_display.endswith(f"（{reporter_name}）")
            )
            role_match = (not item_role) or (item_role == normalized_role)

            if reporter_match and role_match:
                filtered_items.append(item)

        items = filtered_items

    if status_filter in _ALLOWED_STATUS:
        items = [item for item in items if str(item.get("status", "")) == status_filter]

    for item in items:
        if not str(item.get("reporter_display", "")).strip():
            item["reporter_display"] = _build_reporter_display(item.get("role"), item.get("reporter"))

    items.sort(key=lambda x: int(x.get("id", 0)), reverse=True)
    return items


def update_feedback(feedback_id, role, file_path, status=None, admin_note=None, reporter=None, action=None):
    normalized_role = str(role or "dispatcher").strip().lower()
    reporter_name = str(reporter or "").strip()
    normalized_action = str(action or "").strip().lower()

    try:
        target_id = int(feedback_id)
    except Exception as exc:
        raise ValueError("反馈编号无效") from exc

    if normalized_action and normalized_action not in {"revoke", "clear"}:
        raise ValueError("操作类型无效")

    if status is not None:
        status = str(status).strip()
        if status not in _ALLOWED_STATUS:
            raise ValueError("状态无效")

    note_value = None if admin_note is None else str(admin_note).strip()

    with _STORE_LOCK:
        items = _load_items(file_path)
        for item in items:
            if int(item.get("id", 0)) != target_id:
                continue

            if normalized_action == "revoke":
                if normalized_role == "admin":
                    raise PermissionError("管理员不能撤销反馈")
                if not reporter_name:
                    raise PermissionError("缺少提交人信息")

                item_reporter = str(item.get("reporter", "")).strip()
                item_role = str(item.get("role", "")).strip().lower()
                item_status = str(item.get("status", "")).strip()

                if item_reporter != reporter_name or item_role != normalized_role:
                    raise PermissionError("只能撤销本人提交的反馈")
                if item_status != "待处理":
                    raise ValueError("仅待处理反馈可撤销")

                items.remove(item)
                _save_items(file_path, items)
                return {"id": target_id, "deleted": True, "action": "revoke"}

            if normalized_action == "clear":
                if normalized_role != "admin":
                    raise PermissionError("只有管理员可以清空反馈")

                item_status = str(item.get("status", "")).strip()
                if item_status != "已处理":
                    raise ValueError("仅已处理反馈可清空")

                items.remove(item)
                _save_items(file_path, items)
                return {"id": target_id, "deleted": True, "action": "clear"}

            if normalized_role != "admin":
                raise PermissionError("只有管理员可以处理反馈")

            if status is not None:
                item["status"] = status
            if note_value is not None:
                item["admin_note"] = note_value
            item["updated_at"] = _now_str()

            _save_items(file_path, items)
            return item

    raise ValueError("反馈记录不存在")
