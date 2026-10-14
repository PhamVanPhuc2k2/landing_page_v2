#!/usr/bin/env python3
"""Tạo js/data.js từ data/events.json. CHẠY TAY khi sửa nội dung, không cần cron.

Cấu trúc: mỗi năm (`years`) gồm nhiều chương trình (`programs`), mỗi chương trình là 1 chủ đề CMS Dân Việt.
- Chương trình có `source.api`: TRÌNH DUYỆT gọi trực tiếp API CMS Dân Việt, đúng thứ tự
  biên tập sắp trong chủ đề; danh sách bài trong data.js chỉ là bản DỰ PHÒNG khi API lỗi/chậm.
- Chương trình không có api: dữ liệu TĨNH — danh sách bài cố định trong js/data.js, giữ nguyên qua mỗi lần build.
js/data.js còn chứa nội dung viết tay từng chương trình (tên, mô tả, ngày, địa điểm, số liệu, ảnh bìa, link…).

Cách dùng:
    python3 scripts/build_data.py            # sau khi sửa data/events.json
    python3 scripts/build_data.py --refresh  # (tuỳ chọn) chụp lại bài mới nhất từ API làm bản dự phòng

Biến môi trường OUTPUT_DIR: thư mục web, script ghi {OUTPUT_DIR}/js/data.js (mặc định: thư mục dự án).
Chỉ dùng thư viện chuẩn của Python.
"""
import json
import os
import re
import sys
import tempfile
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EVENTS_JSON = ROOT / "data" / "events.json"
DATA_JS = Path(os.environ.get("OUTPUT_DIR") or ROOT) / "js" / "data.js"
UA = {"User-Agent": "Mozilla/5.0 (landing-page build)"}


def write_atomic(path, text):
    """Ghi ra file tạm rồi đổi tên một lần: người xem không bao giờ nhận file ghi dở."""
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, tmp = tempfile.mkstemp(dir=path.parent, prefix=f".{path.name}.", suffix=".tmp")
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            f.write(text)
        os.chmod(tmp, 0o644)
        os.replace(tmp, path)
    except BaseException:
        if os.path.exists(tmp):
            os.remove(tmp)
        raise


def load_previous():
    if not DATA_JS.exists():
        return {}
    s = DATA_JS.read_text(encoding="utf-8")
    k = "window.EVENTS = "
    if k not in s:
        return {}
    # Bài đã lưu theo id chương trình (bản cũ không có `programs` thì bỏ qua)
    years = json.loads(s[s.index(k) + len(k):].rstrip().rstrip(";"))
    return {p["id"]: p for y in years for p in y.get("programs", [])}


def api_page_url(api_url, n):
    """https://danviet.vn/api/chu-de/<id> (trang 1), .../<id>/p<n> (trang n); dạng khác dùng ?page=<n>."""
    if re.search(r"/api/chu-de/\d+/?$", api_url):
        return api_url if n == 1 else api_url.rstrip("/") + f"/p{n}"
    return f"{api_url}{'&' if '?' in api_url else '?'}page={n}"


def fetch_api(api_url):
    """Lấy toàn bộ bài của 1 chủ đề qua API CMS (20 bài/trang) — chỉ dùng với --refresh."""
    items, page, total_pages = [], 1, 1
    while page <= total_pages and page <= 50:
        req = urllib.request.Request(api_page_url(api_url, page), headers=UA)
        with urllib.request.urlopen(req, timeout=30) as r:
            data = json.loads(r.read().decode("utf-8"))
        if not data.get("success"):
            raise RuntimeError(str(data)[:200])
        total_pages = int(data.get("total_pages") or 0)
        for a in data.get("data") or []:
            items.append({"id": str(a["id"]), "title": a["title"], "url": a["link"],
                          "img": a.get("image") or "", "sapo": a.get("sapo") or "", "location": "", "date": ""})
        page += 1
        time.sleep(0.3)
    return items


def build_program(meta, articles):
    pr = {k: v for k, v in meta.items() if k not in ("source", "special")}
    if meta.get("special"):
        pr["special"] = True
    if meta["source"].get("api"):
        pr["api"] = meta["source"]["api"]  # trình duyệt gọi trực tiếp; articles = bản dự phòng
    pr["articles"] = articles
    pr["articleCount"] = len(articles)
    pr["stats"] = [dict(s, value=len(articles)) if s["value"] == "$count" else s for s in meta["stats"]]
    return pr


def main():
    refresh = "--refresh" in sys.argv[1:]
    cfg = json.loads(EVENTS_JSON.read_text(encoding="utf-8"))
    previous = load_previous()
    events = []

    for year_meta in cfg["years"]:
        year = year_meta["year"]
        programs = []
        for meta in year_meta["programs"]:
            tag = f"{year}/{meta['id']}"
            articles = (previous.get(meta["id"]) or {}).get("articles", [])
            if refresh and meta["source"].get("api"):
                try:
                    fresh = fetch_api(meta["source"]["api"])
                    if fresh:
                        articles = fresh
                    else:
                        print(f"[{tag}] chủ đề chưa có bài -> giữ {len(articles)} bài dự phòng")
                except Exception as e:
                    print(f"[{tag}] ! không gọi được API ({e}) -> giữ {len(articles)} bài dự phòng")
            kind = "API (trình duyệt gọi) + bản dự phòng" if meta["source"].get("api") else "tĩnh"
            print(f"[{tag}] {kind}: {len(articles)} bài")
            programs.append(build_program(meta, articles))
        events.append(dict({k: v for k, v in year_meta.items() if k != "programs"}, programs=programs))

    header = (
        "/**\n"
        " * TỰ ĐỘNG TẠO bởi scripts/build_data.py — không sửa tay file này.\n"
        " * Sửa nội dung ở data/events.json rồi chạy lại script. Mỗi năm gồm nhiều chương trình (`programs`).\n"
        " * Chương trình có `api`: trình duyệt lấy bài trực tiếp từ API CMS, `articles` là bản dự phòng.\n"
        " * Chương trình không có api: `articles` là danh sách bài tĩnh.\n"
        " */\n"
    )
    out = (header + "window.SITE = " + json.dumps(cfg["site"], ensure_ascii=False, indent=4) + ";\n\n"
           + "window.EVENTS = " + json.dumps(events, ensure_ascii=False, indent=2) + ";\n")
    write_atomic(DATA_JS, out)
    print(f"Đã ghi {DATA_JS}")


if __name__ == "__main__":
    main()
