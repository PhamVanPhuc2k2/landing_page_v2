# Hướng dẫn chạy landing page trên server riêng

Trang là **web tĩnh** (HTML/CSS/JS): không cần Node, PHP, database, git hay cron.

Trang gồm 3 năm (2024 – 2026), **mỗi năm 2 Diễn đàn**; mỗi Diễn đàn là 1 chủ đề trên CMS Dân Việt:

| Năm | Diễn đàn | Mã chủ đề |
|---|---|---|
| 2026 | Chủ tịch Hội NDVN – Bộ trưởng Bộ NN&MT | 3093 |
| 2026 | Bộ Công an – T.Ư Hội NDVN (lần thứ I) | 3097 |
| 2025 | Chủ tịch Hội NDVN – Bộ trưởng Bộ Công Thương | 3002 |
| 2025 | Chủ tịch Hội NDVN – Bộ trưởng Bộ NNMT | 3016 |
| 2024 | Diễn đàn Nông dân quốc gia lần thứ IX | 2901 |
| 2024 | Chủ tịch Hội NDVN – Bộ trưởng TNMT | 2911 |

Bài viết của cả 6 Diễn đàn do **trình duyệt người xem gọi trực tiếp API CMS Dân Việt**
(ví dụ `https://danviet.vn/api/chu-de/3097`; trang 2, 3… là `/api/chu-de/3097/p2`, `/p3`…), đúng thứ tự biên tập sắp
trong chủ đề. Bài mới đăng lên chủ đề là hiện ngay trên trang. `js/data.js` giữ sẵn bản dự phòng khi API lỗi.

## 1. Yêu cầu

- Web server phục vụ file tĩnh (nginx, Apache…).
- Trình duyệt người xem cần truy cập được `danviet.vn/api/…` (API) và `*.ex-cdn.com` (ảnh bài viết).
  Server **không** cần gọi ra ngoài.
- Python 3 (chỉ khi cần build lại `js/data.js` sau khi sửa nội dung; có thể chạy trên máy dev).

## 2. Các file cần đưa lên thư mục web

```
/var/www/landing/            <- root của nginx
├── index.html
├── css/style.css
└── js/
    ├── main.js
    ├── effects.js
    └── data.js              nội dung từng Diễn đàn + bài dự phòng (tạo bởi scripts/build_data.py)
```

Chỉ cần đúng 5 file trên. Các thư mục còn lại trong dự án **không** đưa lên web:

| Thư mục / file | Dùng để |
|---|---|
| `scss/` | Mã nguồn CSS, build ra `css/style.css` |
| `data/events.json` | Nội dung viết tay từng năm / Diễn đàn (nguồn để build `js/data.js`) |
| `scripts/build_data.py` | Build `js/data.js` từ `data/events.json` |
| `_duyet/` | File gửi khách duyệt |
| `images/`, `lib/` | Không dùng |

```bash
sudo mkdir -p /var/www/landing/css /var/www/landing/js
sudo cp index.html /var/www/landing/
sudo cp css/style.css /var/www/landing/css/
sudo cp js/main.js js/effects.js js/data.js /var/www/landing/js/
```

## 3. Cấu hình nginx

```nginx
server {
    server_name landing.example.vn;
    root /var/www/landing;
    index index.html;

    # Link CSS/JS trong index.html có ?v=... (đổi mỗi lần sửa) nên cache dài được
    location ~* \.(css|js)$ {
        add_header Cache-Control "public, max-age=86400";
    }

    # data.js đổi khi build lại nội dung: không giữ bản cũ
    location = /js/data.js {
        add_header Cache-Control "no-cache";
    }
}
```

## 4. Lấy bài từ API thế nào

- Khi mở trang, trình duyệt hiện ngay danh sách lưu sẵn trong `data.js`, đồng thời gọi API trang 1
  (20 bài). Có kết quả là thay bằng dữ liệu mới nhất.
- Bấm "Xem thêm" tự tải trang API tiếp theo khi cần; hết bài thì nút tự ẩn.
- **API lỗi hoặc chậm quá 8 giây**: trang vẫn hiển thị bình thường bằng danh sách lưu sẵn.

Danh sách lưu sẵn sẽ cũ dần (không có cron cập nhật). Muốn chụp lại bản mới nhất làm dự phòng:

```bash
python3 scripts/build_data.py --refresh
```

rồi copy `js/data.js` lên server. Không bắt buộc: khi API chạy, người xem luôn thấy bài mới nhất.

## 5. Thao tác thường gặp

**Sửa tên, mô tả, ngày, địa điểm, số liệu, ảnh bìa, link của một Diễn đàn**: sửa mục tương ứng trong
`years[].programs[]` của `data/events.json`,
rồi chạy `python3 scripts/build_data.py` và copy `js/data.js` lên server. Không sửa tay `js/data.js`.

**Thêm một Diễn đàn** (hoặc năm mới): thêm 1 mục vào `programs` của năm đó trong `data/events.json`
(chép một mục có sẵn rồi sửa `id`, nội dung và `source`):

```json
"source": { "api": "https://danviet.vn/api/chu-de/3099" }
```

Mã chủ đề là số ở cuối link chủ đề, ví dụ `...-channel3099/` → `3099`. Chạy
`python3 scripts/build_data.py --refresh` để lấy luôn bản dự phòng, rồi copy `js/data.js` lên server.

**Cập nhật giao diện**: sửa SCSS thì build lại CSS
(`npx sass --no-source-map scss/style.scss css/style.css`), tăng số `?v=` của file đó trong
`index.html`, rồi copy file đã sửa lên server.
