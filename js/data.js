/**
 * TỰ ĐỘNG TẠO bởi scripts/build_data.py — không sửa tay file này.
 * Sửa nội dung ở data/events.json rồi chạy lại script. Mỗi năm gồm nhiều chương trình (`programs`).
 * Chương trình có `api`: trình duyệt lấy bài trực tiếp từ API CMS, `articles` là bản dự phòng.
 * Chương trình không có api: `articles` là danh sách bài tĩnh.
 */
window.SITE = {
    "kicker": "Lưu trữ truyền thông",
    "title": "Diễn đàn\nLắng nghe nông dân nói",
    "desc": "Tổng hợp các Diễn đàn đối thoại giữa Trung ương Hội Nông dân Việt Nam và lãnh đạo các Bộ, ngành giai đoạn 2024 – 2026: nơi nông dân, hợp tác xã, doanh nghiệp trực tiếp nêu kiến nghị và được giải đáp tại chỗ."
};

window.EVENTS = [
  {
    "year": 2026,
    "label": "2026",
    "special": true,
    "programs": [
      {
        "id": "3097",
        "badge": "Lần đầu tổ chức",
        "kicker": "Lần thứ I • Bộ Công an – Trung ương Hội Nông dân Việt Nam",
        "title": "Diễn đàn Bộ Công an – Trung ương Hội Nông dân Việt Nam Lắng nghe nông dân nói 2026",
        "date": "",
        "location": "Kỷ niệm Ngày thành lập Hội Nông dân Việt Nam",
        "cover": "https://t.ex-cdn.com/danviet.vn/800w/files/channel/2026/08/27/dien-dan-bo-cong-an-trung-uong-hoi-nong-dan-viet-nam-lang-nghe-nong-dan-noi-2026-160220.webp",
        "summary": "Lần đầu tiên Bộ Công an và Trung ương Hội Nông dân Việt Nam cùng tổ chức Diễn đàn lắng nghe nông dân nói nhân dịp kỷ niệm Ngày thành lập Hội Nông dân Việt Nam. Diễn đàn hướng tới an ninh, trật tự ở cơ sở sau sáp nhập xã, vai trò công an xã “gần dân, sát dân” và cảnh báo lừa đảo ở nông thôn.",
        "stats": [
          {
            "value": 100,
            "suffix": "+",
            "label": "Bài báo tư liệu"
          },
          {
            "value": 300,
            "suffix": "+",
            "label": "Đại biểu dự Diễn đàn"
          }
        ],
        "link": "https://danviet.vn/dien-dan-bo-cong-an-trung-uong-hoi-nong-dan-viet-nam-lang-nghe-nong-dan-noi-2026-channel3097/",
        "linkLabel": "Xem thêm trên Dân Việt",
        "special": true,
        "api": "https://danviet.vn/api/chu-de/3097",
        "articles": [
          {
            "id": "1465490",
            "title": "\nSau sáp nhập xã, sắp xếp thôn, tổ dân phố: Công an cơ sở giữ vai trò \"gần dân, sát dân\" để bảo đảm an ninh, trật tự",
            "url": "https://danviet.vn/sau-sap-nhap-xa-sap-xep-thon-to-dan-pho-cong-an-co-so-giu-vai-tro-gan-dan-sat-dan-de-bao-dam-an-ninh-trat-tu-d1465490.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/10/07/bo-cong-an-2211.jpg",
            "sapo": "Việc sáp nhập xã, sắp xếp thôn, tổ dân phố mở ra không gian phát triển mới nhưng cũng đặt ra yêu cầu bảo đảm an ninh, trật tự. Theo luật sư Hoàng Anh Sơn, Công an cơ sở cần phát huy vai trò gần dân, sát dân, nắm chắc địa bàn, chủ động phòng ngừa các nguy cơ từ sớm, từ xa.",
            "location": "",
            "date": ""
          },
          {
            "id": "1465829",
            "title": "'Diễn đàn Bộ Công an - T.Ư Hội ND Việt Nam lắng nghe Nông dân nói': Những trải lòng và gửi gắm của người dân ven đô",
            "url": "https://danviet.vn/dien-dan-bo-cong-an--tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-nhung-trai-long-va-gui-gam-cua-nguoi-dan-ven-do-d1465829.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/10/09/4-1019.jpg",
            "sapo": "Từ những lần cảnh sát khu vực xuống từng khu dân cư, những nhóm Zalo kết nối người dân đến sự phối hợp của công an, Hội Nông dân và chính quyền cơ sở, việc lắng nghe người dân đang trở thành một cách để phát hiện, ngăn ngừa nguy cơ mất an ninh trật tự từ sớm. Người dân Sóc Sơn mong sự gắn bó ấy tiếp tục được duy trì, cùng với những hỗ trợ thiết thực để yên tâm làm ăn, sản xuất.",
            "location": "",
            "date": ""
          },
          {
            "id": "1465361",
            "title": "Mô hình \"3 nhất” của Công an xã Sóc Sơn",
            "url": "https://danviet.vn/mo-hinh-3-nhat-cua-cong-an-xa-soc-son-d1465361.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2026/10/07/1791359126708_7558988338653265605_7558988338653265605_db6e204f3ae8d7cfde1f261a2fd2c049-1447.jpg",
            "sapo": "Trước thực trạng thanh thiếu niên có nguy cơ vi phạm pháp luật, Công an xã Sóc Sơn (Hà Nội) triển khai mô hình “Ba nhất” với sự đồng hành của gia đình, hỗ trợ của công an và chính quyền. Không chỉ tuyên truyền, nhắc nhở, các em còn được tham gia những hoạt động trải nghiệm thực tế để tự nhận thức, thay đổi hành vi và tránh xa những cám dỗ, sai lầm.",
            "location": "",
            "date": ""
          },
          {
            "id": "1464381",
            "title": "Những cuộc sơ tán trong đêm và dấu ấn “bám dân, bám địa bàn” của Công an Lạng Sơn",
            "url": "https://danviet.vn/nhung-cuoc-so-tan-trong-dem-va-dau-an-bam-dan-bam-dia-ban-cua-cong-an-lang-son-d1464381.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/10/03/1790911549862_1703107214932636515_1703107214932636515_baad35909bfdefcb3c1162e183ebb7f6-1235.jpg",
            "sapo": "Sau đợt mưa lũ do bão số 4 tháng 8/2026, cuộc sống của người dân tại nhiều địa bàn ở Lạng Sơn đã cơ bản ổn định. Từ những cuộc sơ tán khẩn cấp, cứu người ở vùng ngập sâu đến hỗ trợ người dân dọn dẹp, làm lại giấy tờ và khôi phục sinh kế, phương châm “4 tại chỗ” đã được Công an tỉnh Lạng Sơn triển khai trong suốt quá trình ứng phó và khắc phục hậu quả thiên tai.",
            "location": "",
            "date": ""
          },
          {
            "id": "1464893",
            "title": "Thống nhất phương án tổ chức \"Diễn đàn Bộ Công an - Trung ương Hội ND Việt Nam lắng nghe nông dân nói\" lần đầu tiên",
            "url": "https://danviet.vn/thong-nhat-phuong-an-to-chuc-dien-dan-bo-cong-an--trung-uong-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-lan-dau-tien-d1464893.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/10/05/1906171791193274190_1259268920168312070_1259268920168312070_1dc7472e4710026899e82c97e44e5047-1905.jpg",
            "sapo": "Sau thời gian phối hợp chuẩn bị, Báo Nông thôn ngày nay/Dân Việt và Cục Xây dựng phong trào bảo vệ an ninh Tổ quốc (V05), Bộ Công an (2 đơn vị tham mưu), đã thống nhất các nội dung quan trọng về phương án tổ chức để báo cáo lãnh đạo cấp trên đối với \"Diễn đàn Bộ Công an - Trung ương Hội ND Việt Nam  lắng nghe nông dân nói\" lần thứ nhất, năm 2026.",
            "location": "",
            "date": ""
          },
          {
            "id": "1464824",
            "title": "Diễn đàn \"Lắng nghe nông dân nói\": Nông dân TP.HCM đề xuất Bộ Công an quy định linh hoạt tải trọng đường nông thôn ",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-nong-dan-tphcm-de-xuat-bo-cong-an-quy-dinh-linh-hoat-tai-trong-duong-nong-thon-d1464824.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/10/05/img_5312-1506.jpg",
            "sapo": "Trước thềm Diễn đàn Lãnh đạo Bộ Công an - Trung ương Hội Nông dân Việt Nam “Lắng nghe nông dân nói” lần thứ I - năm 2026, nông dân TP.HCM đã gửi nhiều kiến nghị từ thực tiễn cuộc sống, sản xuất. Từ phòng chống lừa đảo trên không gian mạng, giữ gìn an ninh ở khu dân cư đến những vướng mắc trong lưu thông phương tiện phục vụ sản xuất nông nghiệp.",
            "location": "",
            "date": ""
          },
          {
            "id": "1464543",
            "title": "Thứ trưởng Bộ Công an đề nghị đẩy nhanh tiến độ xây dựng Trường Phổ thông nội trú liên cấp các xã biên giới",
            "url": "https://danviet.vn/thu-truong-bo-cong-an-de-nghi-day-nhanh-tien-do-xay-dung-truong-pho-thong-noi-tru-lien-cap-cac-xa-bien-gioi-d1464543.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/10/04/library-20261003175142-7bbfe21d-b8a6-4fa7-a7f4-adefc37092a6-nap-1918jpg-090041.jpg",
            "sapo": "Chiều 3/10/2026, tại Hà Nội, Thượng tướng Nguyễn Văn Long, Ủy viên Trung ương Đảng, Thứ trưởng Bộ Công an chủ trì Hội nghị kiểm đếm, đôn đốc tiến độ xây dựng Trường Phổ thông nội trú (PTNT) liên cấp các xã biên giới.",
            "location": "",
            "date": ""
          },
          {
            "id": "1464096",
            "title": "Diễn đàn Bộ Công an - T.Ư Hội ND Việt Nam lắng nghe Nông dân nói: Tinh thần \"vì nhân dân phục vụ\" từ những việc nhỏ nhất",
            "url": "https://danviet.vn/dien-dan-bo-cong-an--tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-tinh-than-vi-nhan-dan-phuc-vu-tu-nhung-viec-nho-nhat-d1464096.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/10/02/88-1126.jpg",
            "sapo": "Ngay khi đang làm nhiệm vụ phân luồng giao thông trên đường, cán bộ CSGT vẫn luôn chú ý đến những khó khăn của người dân để hỗ trợ kịp thời.",
            "location": "",
            "date": ""
          },
          {
            "id": "1464296",
            "title": "'Diễn đàn Bộ Công an-T.Ư Hội ND Việt Nam lắng nghe Nông dân nói': Vận dụng 'Ba nhất' để phòng ngừa thanh niên vi phạm",
            "url": "https://danviet.vn/dien-dan-bo-cong-an-tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-van-dung-ba-nhat-de-phong-ngua-thanh-nien-vi-pham-d1464296.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/10/03/0837101-0819.jpg",
            "sapo": "Từ một tin báo về 2 thanh niên mang theo vật nghi là hung khí, đến những thông tin về cơ sở kinh doanh hoạt động không phép hay mâu thuẫn nhỏ trong khu dân cư, chỉ huy Công an xã Sóc Sơn, TP Hà Nội cho rằng mỗi thông tin người dân cung cấp đều có thể là điểm khởi đầu để ngăn một vụ việc trước khi trở nên phức tạp.",
            "location": "",
            "date": ""
          },
          {
            "id": "1463279",
            "title": "TS Nguyễn Viết Chức: \"Lắng nghe nông dân nói cũng là lắng nghe toàn dân\"",
            "url": "https://danviet.vn/ts-nguyen-viet-chuc-lang-nghe-nong-dan-noi-cung-la-lang-nghe-toan-dan-d1463279.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/29/1785138825937_2290036562997632440_2603496202937172062_d2b7846459618f80713004a9327bd1d2-1455-1631.jpg",
            "sapo": "TS Nguyễn Viết Chức cho rằng, Diễn đàn Bộ Công an - Trung ương Hội Nông dân Việt Nam lắng nghe nông dân nói\" có ý nghĩa thiết thực, bởi đây là dịp để hai lực lượng gần dân trực tiếp nghe những điều người dân đang quan tâm, từ an ninh trật tự đến sinh kế, đời sống.",
            "location": "",
            "date": ""
          },
          {
            "id": "1462762",
            "title": "'Diễn đàn Bộ Công an - T.Ư Hội ND Việt Nam lắng nghe Nông dân nói': Điểm tựa tin cậy cho cuộc sống bình yên",
            "url": "https://danviet.vn/dien-dan-bo-cong-an--tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-diem-tua-tin-cay-cho-cuoc-song-binh-yen-d1462762.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/27/img_3571-1452.jpeg",
            "sapo": "Từ một tin nhắn zalo, người dân có thể báo tin về an ninh trật tự cho công an xã. Ở nơi khác, cán bộ công an đến tận nhà hỗ trợ người chấp hành xong án phạt tù tìm việc, ổn định cuộc sống; tại vùng cao, cảnh báo lừa đảo được nói bằng cả tiếng Kinh và tiếng Ba Na. Những cách làm gần dân đang góp phần phòng ngừa vi phạm từ cơ sở.",
            "location": "",
            "date": ""
          },
          {
            "id": "1463059",
            "title": "Thứ trưởng Bộ Công an yêu cầu phải gần dân, sát dân hơn, lấy sự bình yên mỗi khu dân cư làm thước đo",
            "url": "https://danviet.vn/thu-truong-bo-cong-an-yeu-cau-phai-gan-dan-sat-dan-hon-lay-su-binh-yen-moi-khu-dan-cu-lam-thuoc-do-d1463059.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/28/1737521790590659101_2603496202937172062_2603496202937172062_39499234aff2519fc6b5209bf795962f-1729.jpg",
            "sapo": "Thượng tướng Lê Văn Tuyến, Thứ trưởng Bộ Công an yêu cầu Ban Công tác Mặt trận khu dân cư chủ động nắm tình hình, hòa giải mâu thuẫn từ sớm, đồng thời xây dựng các mô hình “dân vận số”, “khu dân cư số an toàn”.",
            "location": "",
            "date": ""
          },
          {
            "id": "1461805",
            "title": "'Diễn đàn Bộ Công an - T.Ư Hội ND Việt Nam lắng nghe Nông dân nói': Điều ít biết ngoài hồ sơ của cảnh sát khu vực",
            "url": "https://danviet.vn/dien-dan-bo-cong-an--tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-dieu-it-biet-ngoai-ho-so-cua-canh-sat-khu-vuc-d1461805.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/25/1600151789963562602_2603496202937172062_2603496202937172062_c2561ba0ef87d8d2806e3f8505eeebfe-1559.jpg",
            "sapo": "Ở Hoài Đức, nơi những khu dân cư cũ đan xen các khu đô thị mới, người lao động liên tục dịch chuyển, một thông tin về an ninh trật tự đôi khi bắt đầu từ câu chuyện rất đời thường. Với cảnh sát khu vực, xuống cơ sở, gặp dân và lắng nghe không chỉ để biết địa bàn đang có gì, mà còn để nhận diện những nguy cơ trước khi chúng trở thành vụ việc phức tạp.",
            "location": "",
            "date": ""
          },
          {
            "id": "1461882",
            "title": "“Diễn đàn Bộ Công an - T.Ư Hội ND Việt Nam lắng nghe Nông dân nói”: Ân tình người chiến sĩ CAND giữa dòng nước xiết",
            "url": "https://danviet.vn/dien-dan-bo-cong-an--tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-an-tinh-nguoi-chien-si-cand-giua-dong-nuoc-xiet-d1461882.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/23/1787364170603_7380385855007623423_g9024350976331367343_0eef799d6f688b987a3e60c1a030c174-2154.jpg",
            "sapo": "Không chỉ thực hiện nhiệm vụ quản lý Nhà nước về phòng cháy, chữa cháy và cứu nạn, cứu hộ, lực lượng Phòng Cảnh sát PCCC và CNCH - Công an tỉnh Lạng Sơn còn trực tiếp có mặt tại những khu vực bị chia cắt, ngập sâu khi thiên tai xảy ra. Trong đợt mưa lũ do bão số 4 vừa qua, nhiều cán bộ, chiến sĩ, trong đó có cả cán bộ nữ, đã dầm mưa, lội nước, tiếp cận các điểm nguy hiểm để cứu người, hỗ trợ di chuyển tài sản, nông sản và giúp người dân khắc phục hậu quả sau khi nước rút.",
            "location": "",
            "date": ""
          },
          {
            "id": "1461492",
            "title": "“Diễn đàn Bộ Công an - T.Ư Hội ND Việt Nam lắng nghe Nông dân nói”: Điểm tựa bình yên của người dân vùng cao Lương Thịnh",
            "url": "https://danviet.vn/dien-dan-bo-cong-an--tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-diem-tua-binh-yen-cua-nguoi-dan-vung-cao-luong-thinh-d1461492.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2026/09/22/dsc02796-1600.jpg",
            "sapo": "Gắn bó với cơ sở, Công an xã Lương Thịnh (tỉnh Lào Cai) không chỉ giữ vững an ninh trật tự địa bàn mà còn trở thành điểm tựa nghĩa tình, đồng hành cùng bà con vượt qua khó khăn, hoạn nạn.",
            "location": "",
            "date": ""
          },
          {
            "id": "1462080",
            "title": "\"Diễn đàn Bộ Công an - T.Ư Hội ND Việt Nam lắng nghe Nông dân nói\": Những việc làm ấm lòng dân nơi vùng cao Sơn La",
            "url": "https://danviet.vn/dien-dan-bo-cong-an--tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-nhung-viec-lam-am-long-dan-noi-vung-cao-son-la-d1462080.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/24/a3-1-1621.jpg",
            "sapo": "Thực hiện Phong trào thi đua “Ba nhất: Kỷ luật nhất - Trung thành nhất - Gần dân nhất”, thời gian qua, Phòng An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao, Công an tỉnh Sơn La đã cụ thể hóa bằng nhiều việc làm thiết thực, hướng về cơ sở.",
            "location": "",
            "date": ""
          },
          {
            "id": "1461858",
            "title": "Khi tiếng nói người dân trở thành nguồn tin quan trọng của công an cơ sở",
            "url": "https://danviet.vn/khi-tieng-noi-nguoi-dan-tro-thanh-nguon-tin-quan-trong-cua-cong-an-co-so-d1461858.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2026/09/23/phim-ca-xa-hoai-duc00_01_04_21still001-2105.jpg",
            "sapo": "Từ những phản ánh rất gần với đời sống hằng ngày, lực lượng công an có thêm thông tin để nắm địa bàn, xác minh dấu hiệu bất thường và chủ động phòng ngừa tội phạm. Tại xã Hoài Đức (Hà Nội) việc lắng nghe người dân đang trở thành một mắt xích quan trọng trong công tác giữ gìn an ninh trật tự ngay từ cơ sở.",
            "location": "",
            "date": ""
          },
          {
            "id": "1461198",
            "title": "\"Diễn đàn Bộ Công an - T.Ư Hội ND Việt Nam lắng nghe Nông dân nói\": Vững thế trận lòng dân nơi phên giậu Lai Châu",
            "url": "https://danviet.vn/dien-dan-bo-cong-an--tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-vung-the-tran-long-dan-noi-phen-giau-lai-chau-d1461198.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2026/09/21/cong-an-nong-dan-4-1437.jpg",
            "sapo": "Lực lượng Công an cơ sở ở Lai Châu không chỉ thực hiện nhiệm vụ bảo đảm an ninh, trật tự đơn thuần mà đã thực sự trở thành những \"người con của bản\". Từ việc cùng xuống đồng gặt lúa, gánh thóc với bà con đến công tác bám sát địa bàn, lắng nghe tâm tư từ sớm, họ đã cùng người dân vùng cao xây dựng nên thế trận an ninh nhân dân vững chắc, giữ vững sự bình yên cho từng nếp nhà nơi biên cương Tổ quốc.",
            "location": "",
            "date": ""
          },
          {
            "id": "1461394",
            "title": "Lần đầu tiên \"Diễn đàn Bộ Công an - Trung ương Hội Nông dân Việt Nam lắng nghe nông dân nói\", sẽ diễn ra ngày 11/10/2026",
            "url": "https://danviet.vn/lan-dau-tien-dien-dan-bo-cong-an--trung-uong-hoi-nong-dan-viet-nam-lang-nghe-nong-dan-noi-se-dien-ra-ngay-11-10-2026-d1461394.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2026/09/22/cong-an-1035.jpg",
            "sapo": "\"Diễn đàn Bộ Công an - Trung ương Hội Nông dân Việt Nam lắng nghe nông dân nói\" sẽ diễn ra vào dịp Kỷ niệm Ngày thành lập Hội Nông dân Việt Nam, với thời gian 1/2 ngày (bắt đầu 8h30') Chủ nhật, ngày 11/10/2026.",
            "location": "",
            "date": ""
          },
          {
            "id": "1461148",
            "title": "'Diễn đàn Bộ Công an-T.Ư Hội ND Việt Nam lắng nghe Nông dân nói': Giải mã \"liều vắc-xin\" phòng ngừa từ gốc tại Hoài Đức",
            "url": "https://danviet.vn/dien-dan-bo-cong-an-tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-giai-ma-lieu-vac-xin-phong-ngua-tu-goc-tai-hoai-duc-d1461148.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/21/1600591-1536.jpg",
            "sapo": "Một vài người lạ thường xuyên xuất hiện, những nhóm thanh niên lai vãng quanh khu dân cư, những chiếc xe có dấu hiệu bị theo dõi... Những thông tin tưởng như vụn vặt được người dân Hoài Đức đưa ra tại các cuộc giao ban an ninh. Từ những phản ánh đó, Công an xã tổ chức mật phục, rà soát camera và bắt 3 ổ nhóm trộm cắp phương tiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1460575",
            "title": "“Diễn đàn Bộ Công an - T.Ư Hội ND Việt Nam lắng nghe Nông dân nói”: Điểm tựa vững chắc cho Nhân dân trong mưa lũ",
            "url": "https://danviet.vn/dien-dan-bo-cong-an--tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-diem-tua-vung-chac-cho-nhan-dan-trong-mua-lu-d1460575.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/18/cong-an-9-2148.jpg",
            "sapo": "Mưa lớn, nước lũ đổ về nhiều khu vực ngập sâu, Công an phường Hoàng Mai, tỉnh Nghệ An có mặt ngay tại những vùng xung yếu, nguy hiểm nhất giúp di dời tài sản, đảm bảo an toàn cho bà nhân dân. Đặc biệt, một tổ công tác được cử ngay đến Trung tâm y tế Hoàng Mai nơi đang bị nước lũ bủa vây để giúp đỡ các y bác sĩ và bệnh nhân.",
            "location": "",
            "date": ""
          },
          {
            "id": "1460318",
            "title": "Thông qua kết quả kiểm tra, giám sát với Ban Thường vụ Đảng ủy Công an Trung ương",
            "url": "https://danviet.vn/thong-qua-ket-qua-kiem-tra-giam-sat-voi-ban-thuong-vu-dang-uy-cong-an-trung-uong-d1460318.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/18/library-20260917185617-1c896653-f2f5-463a-a516-d8007b528d43-2aoboqzgxiyv7oc7zh2k0aifksejcutzwv2pzg1w7-055904.jpg",
            "sapo": "Chiều 17/9, tại Hà Nội, Đoàn kiểm tra, giám sát số 235 của Bộ Chính trị, Ban Bí thư (Đoàn kiểm tra) đã tổ chức Hội nghị thông qua kết quả kiểm tra, giám sát đối với Ban Thường vụ Đảng ủy Công an Trung ương (CATW).",
            "location": "",
            "date": ""
          },
          {
            "id": "1459993",
            "title": "\"Diễn đàn Bộ Công an- T.Ư Hội ND Việt Nam lắng nghe Nông dân nói\": Hành động từ trái tim vì bình yên của Nhân dân",
            "url": "https://danviet.vn/dien-dan-bo-cong-an-tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-hanh-dong-tu-trai-tim-vi-binh-yen-cua-nhan-dan-d1459993.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2026/09/16/5-3-1842.jpg",
            "sapo": "Trong mưa lũ, sạt lở, cán bộ, chiến sĩ Công an tỉnh Sơn La không quản hiểm nguy, kịp thời hỗ trợ người dân di dời khỏi khu vực nguy hiểm, bảo vệ tính mạng, tài sản và khắc phục hậu quả thiên tai.",
            "location": "",
            "date": ""
          },
          {
            "id": "1459909",
            "title": "'Diễn đàn Bộ Công an - T.Ư Hội ND Việt Nam lắng nghe Nông dân nói': Lan tỏa tiện ích số đến từng hộ dân vùng cao",
            "url": "https://danviet.vn/dien-dan-bo-cong-an--tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-lan-toa-tien-ich-so-den-tung-ho-dan-vung-cao-d1459909.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/16/gia-mao-nhan-hieu-owen-thu-lai-2-ty-dong02_28_54_05still017-1505.jpg",
            "sapo": "Từ các bản, tiểu khu đến từng gia đình, lực lượng Công an xã Vân Hồ (Sơn La) đẩy mạnh hướng dẫn người dân cài đặt, kích hoạt VNeID, góp phần đưa tiện ích số đến gần hơn với cuộc sống.",
            "location": "",
            "date": ""
          },
          {
            "id": "1459104",
            "title": "Diễn đàn Bộ Công an - T.Ư Hội ND Việt Nam lắng nghe Nông dân nói: Chạm đến những khó khăn, nối dài vòng tay nhân ái",
            "url": "https://danviet.vn/dien-dan-bo-cong-an--tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-cham-den-nhung-kho-khan-noi-dai-vong-tay-nhan-ai-d1459104.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/13/img_3045-1829.png",
            "sapo": "Từ một bộ bàn ghế cho cô học trò mồ côi đến sự đồng hành với những đứa trẻ nghèo và hành trình đưa một người từng di cư trái phép trở về đoàn tụ với gia đình, những việc làm cụ thể của lực lượng công an ở Gia Lai đang góp phần tạo nên những điểm tựa giữa cộng đồng.",
            "location": "",
            "date": ""
          },
          {
            "id": "1459366",
            "title": "'Diễn đàn Bộ Công an- T.Ư Hội ND Việt Nam lắng nghe Nông dân nói': Gần dân từ ly cà phê sáng đến đi từng ngõ, gõ từng nhà",
            "url": "https://danviet.vn/dien-dan-bo-cong-an-tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-gan-dan-tu-ly-ca-phe-sang-den-di-tung-ngo-d1459366.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/14/dong-nai-cong-an-gan-dan-tu-ly-ca-phe-sang-den-nhung-buoc-chan-di-tung-ngo-go-tung-nha-o-nhieu-xa-phuong-3-1623.jpg",
            "sapo": "Một ly cà phê sáng. Một cuộc trò chuyện bên bàn nhỏ. Hay cán bộ công an trực tiếp đến từng nhà hướng dẫn người dân sử dụng VNeID. Những việc tưởng như rất đơn giản lại đang trở thành cách để lực lượng công an cơ sở rút ngắn khoảng cách với nhân dân.",
            "location": "",
            "date": ""
          },
          {
            "id": "1459103",
            "title": "'Diễn đàn Bộ Công an- T.Ư Hội ND Việt Nam lắng nghe Nông dân nói': Sắc áo công an sát cánh cùng bà con vượt mùa mưa lũ",
            "url": "https://danviet.vn/dien-dan-bo-cong-an-tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-sac-ao-cong-an-sat-canh-cung-ba-con-vuot-mua-mua-lu-d1459103.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/13/cong-an1-1637.jpeg",
            "sapo": "Trước diễn biến phức tạp của áp thấp nhiệt đới gây mưa lớn, lực lượng Công an ở Quảng Trị, Đà Nẵng đã chỉ đạo lực lượng công an cơ sở chủ động bám địa bàn, rà soát các khu vực xung yếu, hỗ trợ người dân di dời tài sản, khơi thông dòng chảy và sẵn sàng ứng phó với các tình huống thiên tai.",
            "location": "",
            "date": ""
          },
          {
            "id": "1458800",
            "title": "'Diễn đàn Bộ Công an-T.Ư Hội ND Việt Nam lắng nghe Nông dân nói': Từ giúp dân trong mưa lũ đến giữ bình yên xóm làng",
            "url": "https://danviet.vn/dien-dan-bo-cong-an-tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-tu-giup-dan-trong-mua-lu-den-giu-binh-yen-xom-lang-d1458800.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/12/img_2999-1007.jpeg",
            "sapo": "Từ hỗ trợ người dân giữa dòng nước lũ, vận động người có uy tín tham gia giữ gìn an ninh trật tự đến những tuyến đường biên giới được thắp sáng bằng năng lượng mặt trời, lực lượng Công an ở Gia Lai đang tăng cường bám cơ sở, góp phần bảo đảm an toàn cho người dân và xây dựng thế trận an ninh từ lòng dân.",
            "location": "",
            "date": ""
          },
          {
            "id": "1458592",
            "title": "'Diễn đàn Bộ Công an-T.Ư Hội ND Việt Nam lắng nghe Nông dân nói': Sắc áo chiến sĩ chan hòa nơi bản làng, ruộng đồng",
            "url": "https://danviet.vn/dien-dan-bo-cong-an-tu-hoi-nd-viet-nam-lang-nghe-nong-dan-noi-sac-ao-chien-si-chan-hoa-noi-ban-lang-ruong-dong-d1458592.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2026/09/12/anh-dien-dan-bo-cong-an-tu-hoi-nong-dan-viet-nam-lang-nghe-nong-dan-noi-ao-chien-si-cong-an-giua-ruong-dong-ban-lang-quang-ngai-7-1414-0723.jpg",
            "sapo": "Những lưng áo ướt đẫm mồ hôi để giúp dân sửa đường, làm các mô hình kinh tế; không quản gió lớn, mưa to leo lên giúp gia đình nghèo, neo đơn sửa nhà…hành động thiết thực và bình dị của người chiến sĩ công an, đã thắt chặt hơn tình cảm với người dân vùng cao, đồng bằng ở Quảng Ngãi.",
            "location": "",
            "date": ""
          },
          {
            "id": "1458228",
            "title": "'Diễn đàn Bộ Công an- T.Ư Hội Nông dân Việt Nam lắng nghe Nông dân nói': Lan tỏa bình yên từ những \"sứ giả\" áo xanh",
            "url": "https://danviet.vn/dien-dan-bo-cong-an-tu-hoi-nong-dan-viet-nam-lang-nghe-nong-dan-noi-lan-toa-binh-yen-tu-nhung-su-gia-ao-xanh-d1458228.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2026/09/10/img_8968-1028.jpg",
            "sapo": "Thực hiện mô hình Công an cấp xã theo chính quyền địa phương 2 cấp, thời gian qua, Công an xã Ngũ Chỉ Sơn, tỉnh Lào Cai đã nhanh chóng ổn định tổ chức, bám cơ sở, phát huy vai trò nòng cốt bằng những việc làm cụ thể, thiết thực trong công tác giữ gìn an ninh trật tự (ANTT), góp phần giữ bình yên cuộc sống cho người dân vùng cao.",
            "location": "",
            "date": ""
          },
          {
            "id": "1458268",
            "title": "'Diễn đàn Bộ Công an- T.Ư Hội Nông dân Việt Nam lắng nghe Nông dân nói': Sắc xanh công an hòa cùng mùa vàng biên giới",
            "url": "https://danviet.vn/cong-an-xa-xuong-dong-gat-lua-nho-lac-giup-nguoi-dan-bru--van-kieu-d1458268.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/10/ca-truong-son-2-1236.jpg",
            "sapo": "Không chỉ làm nhiệm vụ bảo đảm an ninh, trật tự, cán bộ, chiến sĩ Công an tỉnh Quảng Trị  trực tiếp xuống đồng gặt lúa, nhổ lạc, vận chuyển hoa màu giúp những hộ dân có hoàn cảnh khó khăn, neo đơn. Những việc làm bình dị ấy góp phần đưa hình ảnh người chiến sĩ Công an nhân dân đến gần hơn với nhân dân.",
            "location": "",
            "date": ""
          },
          {
            "id": "1458195",
            "title": "\"Diễn đàn Bộ Công an – Trung ương Hội Nông dân Việt Nam lắng nghe Nông dân nói\" - cầu nối vững chắc cho an ninh cơ sở",
            "url": "https://danviet.vn/dien-dan-bo-cong-an-trung-uong-hoi-nong-dan-lang-nghe-nong-dan-noi--cau-noi-vung-chac-cho-an-ninh-co-so-d1458195.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/10/dai-bieu-pham-van-hoa-0910.png",
            "sapo": "Theo Đại biểu Quốc hội Phạm Văn Hòa (đoàn Đồng Tháp), diễn đàn \"Bộ Công an – Trung ương Hội Nông dân lắng nghe nông dân nói\" có ý nghĩa rất thiết thực để Bộ Công an nắm bắt hơn nữa thực tiễn, qua đó bổ sung các chỉ đạo nhằm nâng cao chất lượng công tác an ninh cơ sở, giúp lực lượng công an xã, phường sát dân, gần dân và hiểu dân hơn.",
            "location": "",
            "date": ""
          },
          {
            "id": "1458022",
            "title": "Thứ trưởng Bộ Công an truyền đạt chuyên đề Nhận diện, xử lý điểm nóng và khủng hoảng cho 30 Phó Cục trưởng, Phó Giám đốc",
            "url": "https://danviet.vn/thu-truong-bo-cong-an-truyen-dat-chuyen-de-nhan-dien-xu-ly-diem-nong-va-khung-hoang-cho-pho-cuc-truong-pho-giam-doc-d1458022.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/09/library-20260909103258-2a8db839-c13f-4401-b1ac-cd2220698fdc-2aoboqxlpmphktdjvg1ksik9ib5twvxptjzqoy08-1513.jpg",
            "sapo": "Thứ trưởng Bộ Công an Lê Quốc Hùng trực tiếp truyền đạt chuyên đề về nhận diện, xử lý “điểm nóng” và khủng hoảng cho 30 Phó Cục trưởng, Phó Giám đốc Công an các đơn vị, địa phương, trong khuôn khổ lớp bồi dưỡng cập nhật kiến thức mới, kiến thức nâng cao năm 2026.",
            "location": "",
            "date": ""
          },
          {
            "id": "1457456",
            "title": "Lan tỏa nghĩa tình và bảo đảm an ninh cơ sở từ mô hình \"Gian hàng 0 đồng\" tại Cần Thơ",
            "url": "https://danviet.vn/lan-toa-nghia-tinh-va-bao-dam-an-ninh-co-so-tu-mo-hinh-gian-hang-0-dong-tai-can-tho-d1457456.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/07/143357gian-hang-0-dong-018-1410.jpg",
            "sapo": "Đổi mới phương thức hỗ trợ từ trao tặng thụ động sang tự chọn theo nhu cầu, mô hình “Gian hàng 0 đồng” do Ủy ban MTTQ Việt Nam xã Phú Hữu phối hợp với Công an xã Phú Hữu (TP Cần Thơ) triển khai không chỉ đem lại niềm vui, thắt chặt nghĩa tình xóm giềng cho bà con nghèo mà còn trở thành điểm sáng trong công tác giữ gìn an ninh trật tự tại cơ sở.",
            "location": "",
            "date": ""
          },
          {
            "id": "1457454",
            "title": "Chủ nhật xanh - Ấm tình quân dân trên cánh đồng Phan Lìn",
            "url": "https://danviet.vn/chu-nhat-xanh--am-tinh-quan-dan-tren-canh-dong-phan-lin-d1457454.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/07/photo-library-20260907085700-37345a0f-40e2-4274-a9af-71078247acf3-khong-quan-nang-nong-can-bo-chien-si-cung-ba-con-nong-dan-gat-lua-van-chuyen-lua-tren-nhung-thua-ruong-ang-vao-o-chin-van-133346.jpg",
            "sapo": "Tháng 9, những cánh đồng lúa tại bản Phan Lìn, phường Tân Phong, tỉnh Lai Châu vào độ chín vàng, trĩu hạt. Trên những thửa ruộng đang vào vụ gặt, hình ảnh cán bộ, chiến sĩ Trại tạm giam - Công an tỉnh Lai Châu cùng bà con nông dân thu hoạch lúa đã để lại ấn tượng đẹp về tinh thần “Vì Nhân dân phục vụ”.",
            "location": "",
            "date": ""
          },
          {
            "id": "1457428",
            "title": "Công an TP Hà Nội lên phương án bảo đảm an ninh khi người dân góp ý quy hoạch phân khu đô thị sông Hồng",
            "url": "https://danviet.vn/cong-an-tp-ha-noi-len-phuong-an-bao-dam-an-ninh-khi-nguoi-dan-gop-y-quy-hoach-phan-khu-do-thi-song-hong-d1457428.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/07/tai-xuong-23-1119.jpeg",
            "sapo": "Công an TP Hà Nội xây dựng phương án bảo đảm an ninh, trật tự, chủ động nhận diện và ngăn chặn nguy cơ phát sinh phức tạp trong quá trình người dân góp ý quy hoạch Điều chỉnh tổng thể Quy hoạch phân khu đô thị sông Hồng.",
            "location": "",
            "date": ""
          },
          {
            "id": "1457286",
            "title": "Vạch trần thủ đoạn lừa đảo đầu tư tiền mã hóa trên không gian mạng",
            "url": "https://danviet.vn/vach-tran-thu-doan-lua-dao-dau-tu-tien-ma-hoa-tren-khong-gian-mang-d1457286.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2026/09/06/anh-minh-hoa-1706.jpg",
            "sapo": "Theo Công an TP Hà Nội, thời gian gần đây, các đối tượng lừa đảo trên không gian mạng tiếp tục sử dụng thủ đoạn mời chào người dân tham gia đầu tư tiền mã hóa, tiền kỹ thuật số với cam kết lợi nhuận cao. Bằng nhiều phương thức tạo dựng lòng tin, dẫn dụ nạn nhân chuyển tiền đầu tư, các đối tượng đã chiếm đoạt số tiền lớn, có trường hợp từ hàng trăm triệu đồng đến hàng chục tỷ đồng.",
            "location": "",
            "date": ""
          },
          {
            "id": "1456217",
            "title": "Bộ trưởng Bộ Công an: Xã hội kỷ cương là 'hạ tầng mềm' cho phát triển",
            "url": "https://danviet.vn/bo-truong-bo-cong-an-xa-hoi-ky-cuong-la-ha-tang-mem-cho-phat-trien-d1456217.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/02/101341dai-tuong-1013.jpg",
            "sapo": "Đất nước đang bước vào giai đoạn phát triển mới, đặt ra yêu cầu ngày càng cao về xây dựng một xã hội kỷ cương, an toàn, lành mạnh, trong đó pháp luật, kỷ cương và các chuẩn mực xã hội được tôn trọng, thực thi nghiêm minh. Với vai trò là lực lượng nòng cốt trong bảo vệ an ninh quốc gia, bảo đảm trật tự, an toàn xã hội, lực lượng Công an nhân dân có trách nhiệm đặc biệt quan trọng trong hiện thực hóa yêu cầu này.",
            "location": "",
            "date": ""
          },
          {
            "id": "1451676",
            "title": "Sau sáp nhập thôn, xã “thủ phủ” thanh long tỉnh Lâm Đồng tổ chức “Ngày hội toàn dân bảo vệ an ninh Tổ quốc năm 2026”",
            "url": "https://danviet.vn/sau-sap-nhap-thon-xa-thu-phu-thanh-long-tinh-lam-dong-to-chuc-ngay-hoi-toan-dan-bao-ve-an-ninh-to-quoc-nam-2026-d1451676.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/08/15/142049hk-1-1419.jpg",
            "sapo": "Lãnh đạo xã Hàm Kiệm, tỉnh Lâm Đồng (địa phận huyện Hàm Thuận Nam, tỉnh Bình Thuận cũ) cho biết, sau sáp nhập thành công từ 11 xuống còn 6 thôn, xã vừa tổ chức “Ngày hội toàn dân bảo vệ an ninh Tổ quốc năm 2026”. Đây là ngày hội lớn, thu hút nhiều lực lượng chức năng, các hội đoàn thể và đông đảo người dân trên địa bàn xã Hàm Kiệm tham dự…",
            "location": "",
            "date": ""
          },
          {
            "id": "1454934",
            "title": "Sẽ tổ chức Diễn đàn Bộ Công an - Trung ương Hội Nông dân Việt Nam \"Lắng nghe Nông dân nói\" lần thứ I - năm 2026",
            "url": "https://danviet.vn/ke-hoach-to-chuc-dien-dan-bo-cong-an--trung-uong-hoi-nong-dan-viet-nam-lang-nghe-nong-dan-noi-lan-thu-i--nam-2026-d1454934.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/08/27/hoi-nong-dan-bo-cong-an-1545.jpg",
            "sapo": "Được sự thống nhất của Bộ Công an, Trung ương Hội Nông dân Việt Nam vừa ban hành Kế hoạch tổ chức Diễn đàn Bộ Công an - Trung ương Hội Nông dân Việt Nam “Lắng nghe Nông dân nói” lần thứ I - năm 2026 nhằm tăng cường đối thoại, lắng nghe với cán bộ, hội viên nông dân cả nước về các vấn đề liên quan. Báo Nông thôn Ngày nay/điện tử Dân Việt được giao tham mưu, trực tiếp tổ chức thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1449552",
            "title": "Chuẩn bị tổ chức Diễn đàn \"Lãnh đạo Bộ Công an - T.Ư Hội Nông dân Việt Nam Lắng nghe nông dân nói\" lần thứ nhất năm 2026",
            "url": "https://danviet.vn/chuan-bi-to-chuc-dien-dan-bo-cong-an--trung-uong-hoi-nong-dan-viet-nam-lang-nghe-nong-dan-noi-lan-thu-nhat-nam-2026-d1449552.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/08/07/1786075137892_2843343929865116630_2843343929865116630_64c74e89dbb7fa4055e47cc0ca9ea5ce-1109.jpg",
            "sapo": "Sáng 7/8, lãnh đạo Báo Nông thôn Ngày nay/điện tử Dân Việt và Cục Xây dựng phong trào bảo vệ an ninh Tổ quốc (V05) - Bộ Công an đã có buổi làm việc nhằm thống nhất một số nội dung, chuẩn bị tổ chức Diễn đàn: \"Lãnh đạo Bộ Công an - Trung ương Hội Nông dân Việt Nam Lắng nghe nông dân nói\" lần thứ nhất - năm 2026.",
            "location": "",
            "date": ""
          }
        ],
        "articleCount": 41
      },
      {
        "id": "3093",
        "kicker": "Lần thứ 3 • T.Ư Hội Nông dân Việt Nam – Bộ Nông nghiệp và Môi trường",
        "title": "Diễn đàn Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói năm 2026",
        "date": "",
        "location": "",
        "cover": "https://t.ex-cdn.com/danviet.vn/800w/files/channel/2026/07/30/dien-dan-chu-tich-hoi-nong-dan-viet-nam--bo-truong-bo-nong-nghiep-va-moi-truong-lang-nghe-nong-dan-noi-nam-2026-144736.jpg",
        "summary": "Kỳ thứ 3 của Diễn đàn giữa Chủ tịch Hội Nông dân Việt Nam và Bộ trưởng Bộ Nông nghiệp và Môi trường. Hàng nghìn câu hỏi, đề xuất của nông dân, hợp tác xã, doanh nghiệp đã gửi về Diễn đàn — từ liên kết, xúc tiến thương mại, khơi thông thị trường xuất khẩu đến chuyển đổi số và an toàn thực phẩm.",
        "stats": [
          {
            "value": 100,
            "suffix": "+",
            "label": "Bài báo tư liệu"
          },
          {
            "value": 300,
            "suffix": "+",
            "label": "Đại biểu dự Diễn đàn"
          }
        ],
        "link": "https://danviet.vn/dien-dan-chu-tich-hoi-nong-dan-viet-nam--bo-truong-bo-nong-nghiep-va-moi-truong-lang-nghe-nong-dan-noi-nam-2026-channel3093/",
        "linkLabel": "Xem thêm trên Dân Việt",
        "api": "https://danviet.vn/api/chu-de/3093",
        "articles": [
          {
            "id": "1462928",
            "title": "Diễn đàn Lắng nghe nông dân nói: Doanh nghiệp đề xuất khơi thông thị trường Mỹ, giám đốc HTX kỳ vọng liên kết 4 nhà",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-doanh-nghiep-de-xuat-khoi-thong-thi-truong-my-giam-doc-htx-ky-vong-lien-ket-4-nha-d1462928.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/28/102810672253402_10224955776799924_4550650167953314687_n-1027.jpg",
            "sapo": "Trong hàng nghìn câu hỏi, đề xuất gửi về Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói năm 2026, nội dung về liên kết hợp tác, xúc tiến thương mại đã nhận được sự quan tâm của nhiều nông dân, chuyên gia, doanh nghiệp. Nhiều ý kiến đã bày tỏ mong muốn mở rộng thị trường tiêu thụ, nâng cao giá trị nông sản Việt thông qua việc đẩy mạnh liên kết \"4 nhà\", xúc tiến thương mại, xây dựng chuỗi giá trị nông sản...",
            "location": "",
            "date": ""
          },
          {
            "id": "1462256",
            "title": "Chuẩn bị tổ chức Diễn đàn \"Bộ trưởng Bộ NNMT - Chủ tịch T.Ư Hội Nông dân Việt Nam Lắng nghe nông dân nói\" năm 2026",
            "url": "https://danviet.vn/chuan-bi-to-chuc-dien-dan-bo-truong-bo-nnmt--chu-tich-tu-hoi-nong-dan-viet-nam-lang-nghe-nong-dan-noi-nam-2026-d1462256.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/25/1-1101.jpg",
            "sapo": "Nhằm chuẩn bị các nội dung liên quan để tổ chức Diễn đàn \"Bộ trưởng Bộ Nông nghiệp và Môi trường - Chủ tịch T.Ư Hội Nông dân Việt Nam Lắng nghe nông dân nói\" năm 2026, Báo Nông thôn Ngày nay/Dân Việt cùng Văn phòng Bộ Nông nghiệp và Môi trường (hai đơn vị được giao thực hiện) đã trao đổi, làm rõ và thống nhất một số nội dung quan trọng trước khi báo cáo đồng chí Bộ trưởng và Chủ tịch Trung ương Hội NDVN.",
            "location": "",
            "date": ""
          },
          {
            "id": "1461660",
            "title": "Diễn đàn Lắng nghe nông dân nói 2026: Nữ giám đốc 9X người Dao kiến nghị 2 giải pháp đưa nông sản vùng cao vươn xa",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-2026-nu-giam-doc-9x-nguoi-dao-kien-nghi-2-giai-phap-dua-nong-san-vung-cao-vuon-xa-d1461660.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/23/7935fefcfb9a7bc4228b-0849.jpg",
            "sapo": "Trước thềm Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói năm 2026, chị Chảo Thị Yến – HTX Goong ở tỉnh Lào Cai đã có những kiến nghị về vấn đề chuyển đổi số và an toàn thực phẩm. Báo Nông thôn Ngày nay/Điện tử Dân Việt được giao trực tiếp tổ chức thực hiện Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường lắng nghe nông dân nói năm 2026.",
            "location": "",
            "date": ""
          },
          {
            "id": "1459793",
            "title": "Diễn đàn Lắng nghe nông dân nói: Anh chủ vườn ươm giống cây trong sách Đỏ đề xuất về thủ tục công nhận nguồn giống",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-anh-chu-vuon-uom-giong-cay-trong-sach-do-de-xuat-ve-thu-tuc-cong-nhan-nguon-giong-d1459793.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/16/091726113124z7387649426135_58ef8805ea4a72eb1a7e0c7a1cffb69e-1127-0916.jpg",
            "sapo": "Là người xây dựng thành công mô hình ươm giống cây quý hiếm trong sách Đỏ - hoàng đàn Hữu Liên, anh nông dân Hoàng Ngọc Vũ - chủ Vườn ươm Đất Phật (xã Đình Lập, tỉnh Lạng Sơn) đang nuôi giấc mơ đưa cây hoàng đàn Hữu Liên ra thế giới. Anh mong muốn trong thời gian tới, các chủ trương, chính sách mới sẽ tiếp tục tháo gỡ khó khăn cho người trồng cây hoàng đàn Hữu Liên nói riêng và những người dân tham gia bảo tồn và phát triển nguồn gen quý nói chung, đặc biệt là vấn đề về thủ tục pháp lý.",
            "location": "",
            "date": ""
          },
          {
            "id": "1459208",
            "title": "Diễn đàn Lắng nghe nông dân nói: Canh cánh tình trạng tôm giống \"tào lao\"; đề nghị siết chặt chất lượng tôm nguyên liệu",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-canh-canh-tinh-trang-tom-giong-tao-lao-de-nghi-siet-chat-chat-luong-tom-nguyen-lieu-d1459208.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/14/123949123422anh-vinh-htx-1233.jpg",
            "sapo": "Những năm gần đây, mô hình tôm + cua - lúa tại An Giang phát triển rất nhanh nhờ đem lại hiệu quả kinh tế vượt trội cho nông dân. Theo đó, lợi nhuận từ tôm + lúa có thể đạt trên 120 triệu đồng/ha/năm, riêng con cua có thể đạt 150 triệu đồng/ha. Tuy nhiên, bà con ở đây vẫn luôn canh cánh nỗi lo mua phải tôm giống kém chất lượng, khi có những người buôn bán giống \"tào lao\" từ Trung Quốc tràn sang, khiến người nuôi đối mặt với nguy cơ dịch bệnh và trắng tay.",
            "location": "",
            "date": ""
          },
          {
            "id": "1458754",
            "title": "Diễn đàn Lắng nghe nông dân nói: Giám đốc HTX Đà Nẵng mong giúp bà con Cơ Tu phát triển du lịch",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-giam-doc-htx-da-nang-mong-giup-ba-con-co-tu-phat-trien-du-lich-d1458754.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2026/09/12/489004526_2115391935590451_4985850698879932409_n-0653.jpg",
            "sapo": "Gửi câu hỏi, đề xuất về Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường lắng nghe nông dân nói năm 2026, anh Đinh Văn Như – Giám đốc Hợp tác xã Nông nghiệp sinh thái và Du lịch cộng đồng Tà Lang – Giàn Bí (phường Hải Vân, thành phố Đà Nẵng), chủ Homestay Alăng Như đã chia sẻ những trăn trở của anh về nguồn nước sạch địa phương, bày tỏ mong muốn có thêm nhiều chính sách hỗ trợ bà con Cơ Tu tại Tà Lang - Giàn Bí phát triển du lịch bền vững hơn.",
            "location": "",
            "date": ""
          },
          {
            "id": "1458439",
            "title": "Diễn đàn Lắng nghe nông dân nói 2026: Tỷ phú An Giang mong cánh đồng lúa giảm phát thải ra mắt thị trường tín chỉ carbon",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-2026-ty-phu-an-giang-mong-canh-dong-lua-giam-phat-thai-ra-mat-thi-truong-tin-chi-carbon-d1458439.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/10/dien-dan-hoi-nong-dan-2214.jpg",
            "sapo": "Trước thềm Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường lắng nghe nông dân nói năm 2026, ông Lê Thanh Long, một tỷ phú nông dân trồng lúa ở phường Chi Lăng, tỉnh An Giang đã mang đến diễn đàn những kiến nghị thực tế từ chính 80ha đồng ruộng của gia đình. Báo Nông thôn Ngày nay/Điện tử Dân Việt được giao trực tiếp tổ chức thực hiện Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường lắng nghe nông dân nói năm 2026.",
            "location": "",
            "date": ""
          },
          {
            "id": "1458190",
            "title": "Diễn đàn Lắng nghe nông dân nói: Nữ Giám đốc HTX kiến nghị về sáng chế, anh KOLs đề xuất hỗ trợ thuế sàn với nông sản ",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-nu-giam-doc-htx-kien-nghi-ve-sang-che-anh-kols-de-xuat-ho-tro-thue-san-voi-nong-san-d1458190.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/09/10/090105111330img_8708-1102-0900.jpg",
            "sapo": "Trước thềm Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường lắng nghe nông dân nói năm 2026 đã có hàng nghìn ý kiến, đề xuất, kiến nghị gửi tới Bộ Nông nghiệp và Môi trường, Hội Nông dân Việt Nam. Các câu hỏi của nông dân, bạn đọc tập trung vào nhiều vấn đề thời sự, thực tiễn với ngành nông nghiệp Việt Nam như bảo hộ quyền sở hữu trí tuệ với phát minh, sáng chế trong nông nghiệp, hỗ trợ nông dân đưa nông sản lên sàn...",
            "location": "",
            "date": ""
          },
          {
            "id": "1447676",
            "title": "Sắp tổ chức Diễn đàn Chủ tịch Hội NDVN - Bộ trưởng Bộ NN&MT \"Lắng nghe nông dân nói\" năm 2026",
            "url": "https://danviet.vn/sap-to-chuc-dien-dan-chu-tich-hoi-ndvn--bo-truong-bo-nnmt-lang-nghe-nong-dan-noi-nam-2026-d1447676.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2026/07/31/2aoboqo0fktlcxnvwwz9nb3zffu7w97km1p9jcag-0736.jpg",
            "sapo": "Tiếp nối sự thành công của 3 kỳ Diễn đàn \"Lắng nghe nông dân nói\" trước, Ban Thường vụ Trung ương Hội Nông dân Việt Nam phối hợp với Bộ Nông nghiệp và Môi trường tổ chức Diễn đàn \"Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường lắng nghe nông dân nói\" năm 2026 (lần 4). Diễn đàn được lãnh đạo 2 cơ quan giao cho Báo Nông thôn Ngày nay/Dân Việt trực tiếp tổ chức, thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1433189",
            "title": "Thường trực Ban Bí thư Trần Cẩm Tú: Tăng cường đối thoại, lắng nghe nông dân, hoạt động Hội Nông dân hướng mạnh về cơ sở",
            "url": "https://danviet.vn/thuong-truc-ban-bi-thu-tran-cam-tu-tang-cuong-doi-thoai-lang-nghe-nong-dan-hoat-dong-hoi-nong-dan-huong-manh-ve-co-so-d1433189.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2026/06/08/z7912718757099_d65ae3ad29011fcb177858b96341ad4f-1138.jpg",
            "sapo": "Phát biểu chỉ đạo tại Đại hội đại biểu toàn quốc Hội Nông dân Việt Nam lần thứ IX, nhiệm kỳ 2026-2031, đồng chí Trần Cẩm Tú, Ủy viên Bộ Chính trị, Thường trực Ban Bí thư nhấn mạnh, hoạt động của Hội Nông dân các cấp trong nhiệm kỳ tới phải hướng mạnh về cơ sở; thường xuyên tổ chức đối thoại, lắng nghe nông dân nói; nông dân được biết, được bàn, được làm, được giám sát, được kiểm tra và được hưởng thụ.",
            "location": "",
            "date": ""
          },
          {
            "id": "1423602",
            "title": "Hướng tới Đại hội Hội Nông dân Việt Nam lần thứ IX: Dấu ấn tham gia giám sát, phản biện, lắng nghe nông dân nói (Bài 5)",
            "url": "https://danviet.vn/huong-toi-dai-hoi-hoi-nong-dan-viet-nam-lan-thu-ix-dau-an-tham-gia-giam-sat-phan-bien-lang-nghe-nong-dan-noi-bai-5-d1423602.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/05/03/164447img6708-17653473042301203354725-17653530367591291353533-0-0-1250-2000-crop-17653530438391704674323-1644.jpg",
            "sapo": "Nhìn lại nhiệm kỳ Đại hội VIII của Hội Nông dân Việt Nam, hoạt động giám sát, phản biện xã hội và đối thoại với nông dân đã trở thành một điểm sáng với nhiều bước chuyển rõ nét, thực chất. Trong nhiệm kỳ qua, hơn 10.000 lượt ý kiến đã được các cấp Hội tập hợp hàng năm, cùng 2 hội nghị đối thoại cấp Thủ tướng, 54 cuộc đối thoại ở địa phương và 4 diễn đàn “Lắng nghe nông dân nói” cấp Trung ương... góp phần đưa tiếng nói của nông dân đi vào các quyết sách.",
            "location": "",
            "date": ""
          },
          {
            "id": "1420716",
            "title": "Lãnh đạo Hội Nông dân TP.HCM về xã, phường “lắng nghe nông dân nói”: Nói chuyện liên kết, tiêu thụ nông sản",
            "url": "https://danviet.vn/lanh-dao-hoi-nong-dan-tphcm-ve-xa-phuong-lang-nghe-nong-dan-noi-noi-chuyen-lien-ket-tieu-thu-nong-san-d1420716.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2026/04/22/674447742_1295529442716478_3446078413559602738_n-1428.jpg",
            "sapo": "Hội Nông dân TP.HCM tổ chức các buổi làm việc với Cụm thi đua số 3, số 4 và chương trình “Lắng nghe nông dân nói” nhằm rà soát tiến độ thực hiện công tác Hội năm 2026, nắm bắt tâm tư, nguyện vọng của hội viên, kịp thời định hướng giải pháp hỗ trợ sản xuất, liên kết và tiêu thụ nông sản.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375675",
            "title": "Sau Diễn đàn Lắng nghe nông dân nói, cần tổ chức nhiều diễn đàn chuyên đề trên nền tảng số kết nối khoa học công nghệ",
            "url": "https://danviet.vn/sau-dien-dan-lang-nghe-nong-dan-noi-can-to-chuc-nhieu-dien-dan-chuyen-de-tren-nen-tang-so-ket-noi-khoa-hoc-cong-nghe-d1375675.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/03/131927z7180365889115_fc989a582c08a38320cdc476bbe934ed-1319.jpg",
            "sapo": "Đây là đề xuất của ông Lê Quốc Thanh, Giám đốc Trung tâm Khuyến nông Quốc gia sau Diễn đàn Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường lắng nghe nông dân nói năm 2025 với chủ đề: “Đồng hành cùng nông dân bước vào kỷ nguyên mới”. Báo Nông thôn Ngày nay/Điện tử Dân Việt được giao trực tiếp tổ chức Diễn đàn.",
            "location": "",
            "date": ""
          }
        ],
        "articleCount": 13
      }
    ]
  },
  {
    "year": 2025,
    "label": "2025",
    "programs": [
      {
        "id": "3002",
        "kicker": "Diễn đàn Nông dân Quốc gia lần thứ X",
        "title": "Chủ tịch Hội Nông dân Việt Nam và Bộ trưởng Bộ Công Thương – Lắng nghe nông dân nói năm 2025",
        "date": "",
        "location": "Hà Nội",
        "cover": "https://t.ex-cdn.com/danviet.vn/800w/files/channel/2025/10/25/chu-tich-hoi-nong-dan-viet-nam-va-bo-truong-bo-cong-thuong--lang-nghe-nong-dan-noi-nam-2025-104655.jpg",
        "summary": "Trung ương Hội Nông dân Việt Nam phối hợp với Bộ Công Thương tổ chức Diễn đàn Nông dân Quốc gia lần thứ X với chủ đề “Kết nối thị trường – Xây dựng thương hiệu – Thúc đẩy tiêu thụ nông sản, góp phần tăng trưởng kinh tế đất nước 2 con số”, trước thềm chuỗi chương trình Tự hào Nông dân Việt Nam 2025.",
        "stats": [
          {
            "value": 100,
            "suffix": "+",
            "label": "Bài báo tư liệu"
          },
          {
            "value": 300,
            "suffix": "+",
            "label": "Đại biểu dự Diễn đàn"
          }
        ],
        "link": "https://danviet.vn/chu-tich-hoi-nong-dan-viet-nam-va-bo-truong-bo-cong-thuong--lang-nghe-nong-dan-noi-nam-2025-channel3002/",
        "linkLabel": "Xem thêm trên Dân Việt",
        "api": "https://danviet.vn/api/chu-de/3002",
        "articles": [
          {
            "id": "1367072",
            "title": "Tại Diễn đàn Nông dân Quốc gia lần thứ X, một chuyên gia nói: Thời kỳ bán nông sản thô đã dần kết thúc",
            "url": "https://danviet.vn/tai-dien-dan-nong-dan-quoc-gia-lan-thu-x-mot-chuyen-gia-noi-thoi-ky-ban-nong-san-tho-da-dan-ket-thuc-d1367072.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/10/01/z7068696932702_8e79851c691d23bbb9969ef2551b4773-2027.jpg",
            "sapo": "“Thời kỳ bán nông sản thô đã dần kết thúc… Nếu chúng ta không đầu tư vào nghiên cứu và chế biến sâu, ngành nông nghiệp sẽ mãi bấp bênh, phụ thuộc thị trường”, đây là nhận định của chuyên gia nông nghiệp Nguyễn Thị Thành Thực tại Diễn đàn Nông dân Quốc gia lần thứ X năm 2025: “Chủ tịch Hội Nông dân Việt Nam và Bộ trưởng Bộ Công Thương - Lắng nghe nông dân nói\".",
            "location": "",
            "date": ""
          },
          {
            "id": "1367061",
            "title": "Toàn cảnh Diễn đàn “Lắng nghe nông dân nói năm 2025” - Góp phần thúc đẩy tăng trưởng kinh tế đất nước 2 con số",
            "url": "https://danviet.vn/toan-canh-dien-dan-lang-nghe-nong-dan-noi-nam-2025--gop-phan-thuc-day-tang-truong-kinh-te-dat-nuoc-2-con-so-d1367061.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/01/194504img_0221-1929.jpeg",
            "sapo": "Ngày 1/10, tại Hà Nội, Trung ương Hội Nông dân Việt Nam phối hợp với Bộ Công Thương tổ chức Diễn đàn Nông dân Quốc gia lần thứ X năm 2025: Chủ tịch Hội Nông dân Việt Nam và Bộ trưởng Bộ Công Thương - Lắng nghe nông dân nói với chủ đề “Kết nối thị trường - Xây dựng thương hiệu - Thúc đẩy tiêu thụ nông sản, góp phần tăng trưởng kinh tế đất nước 2 con số”.",
            "location": "",
            "date": ""
          },
          {
            "id": "1366896",
            "title": "Thị trường nội địa, nông sản sạch là hướng phát triển bền vững",
            "url": "https://danviet.vn/thi-truong-noi-dia-nong-san-sach-la-huong-phat-trien-ben-vung-d1366896.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/10/01/z7068457078398_25fc2d0cf26e2465839f05a84fa9a712-0932-1119.jpg",
            "sapo": "\"Xưa nay bà con ta thường sản xuất tự cung tự cấp, giờ bà con lại vươn ra xuất khẩu nhiều sản phẩm ra thế giới nhiều mà lại bỏ quên trong nước. Chúng ta có 100 triệu dân, nhu cầu tiêu dùng sản phẩm, nông sản cũng rất cao...\" - đây là ý kiến chỉ đạo của Bộ trưởng Bộ Công Thương tại Diễn đàn Nông dân Quốc gia lần thứ X năm 2025: “Chủ tịch Hội Nông dân Việt Nam và Bộ trưởng Bộ Công Thương - Lắng nghe nông dân nói\".",
            "location": "",
            "date": ""
          },
          {
            "id": "1366955",
            "title": "Khoảnh khắc \"tư lệnh\" ngành Công Thương và Chủ tịch Hội Nông dân Việt Nam giao lưu cùng hơn 100 nông dân tiêu biểu ",
            "url": "https://danviet.vn/khoanh-khac-tu-lenh-nganh-nong-dan-va-cong-thuong-giao-luu-than-mat-cung-hon-100-nong-dan-tieu-bieu-d1366955.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/01/4-1429.jpg",
            "sapo": "Sáng 1/10, bên lề sự kiện Diễn đàn Nông dân Việt Nam lần thứ X, hơn 100 Nông dân Việt Nam tiêu biểu, xuất sắc đã gặp gỡ, giao lưu với Chủ tịch BCH TƯ Hội Nông dân Việt Nam Lương Quốc Đoàn và Bộ trưởng Bộ Công Thương Nguyễn Hồng Diên.",
            "location": "",
            "date": ""
          },
          {
            "id": "1366932",
            "title": "Bộ trưởng Bộ Công Thương nêu 5 định hướng lớn nâng cao năng lực, khẳng định vị thế nông sản Việt",
            "url": "https://danviet.vn/bo-truong-bo-cong-thuong-neu-5-dinh-huong-lon-nang-cao-nang-luc-khang-dinh-vi-the-nong-san-viet-d1366932.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/01/5d5497c50e2e8470dd3f-1306.jpg",
            "sapo": "Khẳng định ý nghĩa to lớn của Diễn đàn năm nay giữa Chủ tịch Trung ương Hội nông dân Việt Nam, Bộ trưởng Bộ Công Thương với nông dân, hợp tác xã, Bộ trưởng Nguyễn Hồng Diên khẳng định cùng “lắng nghe”, để “hành động”  vì người nông dân, vị thế nông sản Việt Nam trước vận hội mới.",
            "location": "",
            "date": ""
          },
          {
            "id": "1366916",
            "title": "Thủ tướng đã ban hành Đề án Quỹ hỗ trợ nông dân, tăng trưởng vốn điều lệ 2.000 tỷ đồng riêng với Trung ương Hội",
            "url": "https://danviet.vn/thu-tuong-da-ban-hanh-de-an-quy-ho-tro-nong-dan-tang-truong-von-dieu-le-2000-ty-dong-rieng-voi-trung-uong-hoi-d1366916.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/01/131508z7068608777454_055b08e6aa3cef64cb472c22c48f42a7-1028-1147.jpg",
            "sapo": "Đây là thông tin được đồng chí Lương Quốc Đoàn, Uỷ viên BCH Trung ương Đảng, Chủ tịch BCH Trung ương Hội Nông dân Việt Nam công bố tại Diễn đàn Nông dân Quốc gia lần thứ X năm 2025: Chủ tịch Hội Nông dân Việt Nam và Bộ trưởng Bộ Công Thương - Lắng nghe nông dân nói, với chủ đề “Kết nối thị trường - Xây dựng thương hiệu - Thúc đẩy tiêu thụ nông sản, góp phần tăng trưởng kinh tế đất nước 2 con số”.",
            "location": "",
            "date": ""
          },
          {
            "id": "1366869",
            "title": "5 \"điều kiện cần\" để đưa các sản phẩm OCOP từ đặc sản địa phương vươn tầm quốc tế",
            "url": "https://danviet.vn/5-dieu-kien-can-de-dua-cac-san-pham-ocop-tu-dac-san-dia-phuong-vuon-tam-quoc-te-d1366869.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/10/01/z7068399312847_856a0667957ffe00f6c75a2ff4052f36-0920-0932.jpg",
            "sapo": "Trong khuôn khổ Diễn đàn Nông dân Quốc gia lần thứ X năm 2025: “Chủ tịch Hội Nông dân Việt Nam và Bộ trưởng Bộ Công Thương - Lắng nghe nông dân nói\", đại diện Bộ Công Thương đã giải đáp thắc mắc của đại biểu về giải pháp đưa các sản phẩm OCOP từ đặc sản địa phương vươn tầm quốc tế, trên các sàn thương mại điện tử.",
            "location": "",
            "date": ""
          },
          {
            "id": "1366900",
            "title": "Lắng nghe nông dân nói, Bộ trưởng Nguyễn Hồng Diên yêu cầu làm ngay công thư gửi Trung Quốc, đẩy nhanh xuất khẩu bưởi và bơ",
            "url": "https://danviet.vn/bo-truong-bo-cong-thuong-chi-dao-lam-ngay-cong-thu-gui-trung-quoc-rut-ngan-thoi-gian-xuat-khau-qua-buoi-va-bo-d1366900.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/10/01/nguyen-hong-dien-1121.jpg",
            "sapo": "Tại Diễn đàn Nông dân Quốc gia lần thứ X năm 2025, Bộ trưởng Bộ Công Thương Nguyễn Hồng Diên đề nghị các bộ phận liên quan của Bộ làm ngay công thư gửi Bộ trưởng Thương mại Trung Quốc. Ngay trong tháng 10 này phải thực hiện xong để thúc đẩy quá trình kí kết Nghị định thư cho trái bưởi và trái bơ của Việt Nam trong thời gian nhanh nhất.",
            "location": "",
            "date": ""
          },
          {
            "id": "1366785",
            "title": "Chủ tịch Hội Nông dân và Bộ trưởng Bộ Công Thương: Thương mại là “cánh tay nối dài” đưa nông sản Việt vươn xa",
            "url": "https://danviet.vn/dien-dan-chu-tich-hoi-nong-dan-viet-nam-va-bo-truong-bo-cong-thuong--lang-nghe-nong-dan-noi-d1366785.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/10/01/z7068399310674_d3eb76a1986cf76073abb4a2084b19ed-0902.jpg",
            "sapo": "Hôm nay ngày 1/10/2025, tại Hà Nội, Trung ương Hội Nông dân Việt Nam phối hợp với Bộ Công Thương tổ chức Diễn đàn Nông dân Quốc gia lần thứ X năm 2025: Chủ tịch Hội Nông dân Việt Nam và Bộ trưởng Bộ Công Thương - Lắng nghe nông dân nói, với chủ đề “Kết nối thị trường - Xây dựng thương hiệu - Thúc đẩy tiêu thụ nông sản, góp phần tăng trưởng kinh tế đất nước 2 con số”.",
            "location": "",
            "date": ""
          },
          {
            "id": "1366863",
            "title": "Bộ trưởng Nguyễn Hồng Diên: Nông nghiệp là “con ngựa thồ” của nền kinh tế",
            "url": "https://danviet.vn/bo-truong-nguyen-hong-dien-nong-nghiep-la-con-ngua-tho-cua-nen-kinh-te-d1366863.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/01/bo-truong-cong-thuong-nguyen-hong-dien-0928.jpg",
            "sapo": "Tại Diễn đàn \"Lắng nghe nông dân nói\", Bộ trưởng Bộ Công thương Nguyễn Hồng Diên nhấn mạnh: \"Có thể nói, nông nghiệp chính là “con ngựa thồ” của nền kinh tế trong giai đoạn khó khăn vừa qua\".",
            "location": "",
            "date": ""
          },
          {
            "id": "1366576",
            "title": "Chủ tịch Hội Nông Việt Nam Lương Quốc Đoàn: Lắng nghe nông dân phải thực chất, góp phần cho tăng trưởng 2 con số",
            "url": "https://danviet.vn/chu-tich-hoi-nong-viet-nam-luong-quoc-doan-lang-nghe-nong-dan-phai-thuc-chat-gop-phan-cho-tang-truong-2-con-so-d1366576.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/01/065106chu-tich-hoi-nong-dan-viet-nam-luong-quoc-doan-1003.jpg",
            "sapo": "Hôm nay 1/10 , tại Hà Nội, Trung ương Hội Nông dân Việt Nam phối hợp với Bộ Công Thương tổ chức Diễn đàn Nông dân Quốc gia lần thứ X năm 2025- Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Công Thương Lắng nghe nông dân nói với chủ đề “Kết nối thị trường – Xây dựng thương hiệu – Thúc đẩy tiêu thụ nông sản, góp phần tăng trưởng kinh tế đất nước 2 con số”.",
            "location": "",
            "date": ""
          },
          {
            "id": "1366664",
            "title": "Sáng nay (1/10), diễn ra Diễn đàn \"Chủ tịch Hội Nông dân Việt Nam và Bộ trưởng Bộ Công thương - Lắng nghe nông dân nói",
            "url": "https://danviet.vn/sang-nay-1-10-dien-ra-dien-dan-chu-tich-hoi-nong-dan-viet-nam-va-bo-truong-bo-cong-thuong--lang-nghe-nong-dan-noi-d1366664.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/09/30/cover-1438.jpg",
            "sapo": "Hôm nay ngày 01/10, tại Hà Nội, Trung ương Hội Nông dân Việt Nam (NDVN) phối hợp với Bộ Công Thương tổ chức Diễn đàn Nông dân Quốc gia lần thứ X năm - 2025: Chủ tịch Hội NDVN và Bộ trưởng Bộ Công Thương - Lắng nghe nông dân nói, với chủ đề “Kết nối thị trường - Xây dựng thương hiệu - Thúc đẩy tiêu thụ nông sản, góp phần tăng trưởng kinh tế đất nước 2 con số”.",
            "location": "",
            "date": ""
          },
          {
            "id": "1366786",
            "title": "Mất 2-3 năm đi xin giấy phép cho hàng nông sản xuất khẩu, doanh nghiệp, nông dân vuột mất cơ hội",
            "url": "https://danviet.vn/mat-2-3-nam-di-xin-giay-phep-cho-hang-nong-san-xuat-khau-doanh-nghiep-nong-dan-vuot-mat-co-hoi-d1366786.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/09/30/chuoi-xk2-2152.jpg",
            "sapo": "Là một quốc gia có tiềm năng nông nghiệp to lớn, Việt Nam đang đứng trước những cơ hội vàng để mở rộng thị trường xuất khẩu. Tuy nhiên, các doanh nghiệp nông nghiệp, HTX cho biết họ vẫn đang đứng trước \"mê cung\" thủ tục và những rào cản chính sách kém linh hoạt, khiến họ mất đi lợi thế cạnh tranh và lỡ cơ hội nắm bắt đơn hàng.",
            "location": "",
            "date": ""
          },
          {
            "id": "1366679",
            "title": "Diễn đàn “Chủ tịch Hội NDVN và Bộ trưởng Bộ Công Thương”: Lắng nghe nông dân và mục tiêu tăng trưởng 2 con số",
            "url": "https://danviet.vn/dien-dan-chu-tich-hoi-ndvn-va-bo-truong-bo-cong-thuong-lang-nghe-nong-dan-va-muc-tieu-tang-truong-2-con-so-d1366679.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/09/30/141031nha-bao-nguyen-van-hoai-tong-bien-tap-ntnndan-viet-1410.jpeg",
            "sapo": "Nằm trong chuỗi sự kiện Tự hào Nông dân Việt Nam năm 2025, ngày mai 1/10, Báo Điện tử Dân Việt/Nông thôn Ngày nay tổ chức Diễn đàn “Chủ tịch Hội Nông dân Việt Nam và Bộ trưởng Bộ Công Thương - Lắng nghe nông dân nói” với chủ đề “Kết nối thị trường - Xây dựng thương hiệu - Thúc đẩy tiêu thụ nông sản, góp phần tăng trưởng kinh tế đất nước 2 con số”.",
            "location": "",
            "date": ""
          },
          {
            "id": "1366478",
            "title": "Lắng nghe nông dân nói: \"Đau đầu\" vì thương hiệu Việt \"rớt nhanh\", nông dân siêu đô thị TP.HCM kiến nghị \"nóng\"",
            "url": "https://danviet.vn/lang-nghe-nong-dan-noi-dau-dau-vi-thuong-hieu-viet-rot-nhanh-nong-dan-sieu-do-thi-tphcm-kien-nghi-nong-d1366478.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/09/30/085305212114img_2239-2120.jpg",
            "sapo": "Nhiều nông dân siêu đô thị TP.HCM kiến nghị Bộ Công Thương tập trung xây dựng thương hiệu quốc gia cho nông sản Việt, tăng cường các chương trình xúc tiến thương mại tại thị trường nước ngoài tiềm năng.",
            "location": "",
            "date": ""
          },
          {
            "id": "1366594",
            "title": "Lắng nghe nông dân nói: Ngành Quản lý thị trường \"hiến kế\" xây dựng kênh tiêu thụ nông sản quy chuẩn",
            "url": "https://danviet.vn/lang-nghe-nong-dan-noi-nganh-quan-ly-thi-truong-hien-ke-xay-dung-kenh-tieu-thu-nong-san-quy-chuan-d1366594.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/09/30/truong-phong-quan-ly-nghiep-vu-1107.jpg",
            "sapo": "Trong nhiều nhiệm vụ, cần kết hợp đồng bộ nhiều yếu tố chính sách giám sát và chế tài đủ mạnh, liên kết sản xuất - tiêu thụ, đồng thời đẩy mạnh truyền thông nhằm thay đổi nhận thức người tiêu dùng là giải pháp mang tính căn cơ, bền vững.",
            "location": "",
            "date": ""
          },
          {
            "id": "1366306",
            "title": "Lắng nghe nông dân nói: Nông dân \"đặt hàng\" Bộ Công Thương và Hội Nông dân giải quyết 3 vấn đề ",
            "url": "https://danviet.vn/lang-nghe-nong-dan-noi-nong-dan-dat-hang-bo-cong-thuong-va-hoi-nong-dan-giai-quyet-3-van-de-d1366306.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/09/29/8-1740931892567521007672-1319.jpeg",
            "sapo": "Ngay trước thềm Diễn đàn Nông dân Quốc gia lần thứ X năm 2025 diễn ra sáng 1/10, các hội viên và nông dân tại Thái Nguyên, Phú Thọ, Hưng Yên đã gửi tới Chủ tịch Hội Nông dân Việt Nam và Bộ trưởng Bộ Công Thương những kiến nghị trọng tâm.",
            "location": "",
            "date": ""
          },
          {
            "id": "1366331",
            "title": "Lắng nghe nông dân nói: 6 kỳ vọng then chốt",
            "url": "https://danviet.vn/lang-nghe-nong-dan-noi-6-ky-vong-then-chot-d1366331.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/09/13/anh-quang-ngai-biet-phai-9-can-bo-nong-nghiep-va-moi-truong-ve-ho-tro-chuyen-mon-cho-xa-5-1354.jpg",
            "sapo": "Lần đầu tiên, hai “điểm tựa” của thị trường nông sản (cơ quan quản lý thương mại và tổ chức đại diện nông dân) cùng thiết lập một không gian đối thoại ba bên giữa nông dân – hợp tác xã – doanh nghiệp, xoay quanh ba trục chủ đề “Kết nối thị trường – Xây dựng thương hiệu – Thúc đẩy tiêu thụ nông sản” gắn với mục tiêu tăng trưởng hai con số.",
            "location": "",
            "date": ""
          },
          {
            "id": "1366296",
            "title": "Lắng nghe nông dân nói: Mong chính sách dài hơi từ Bộ Công Thương cho bài toán tiêu thụ",
            "url": "https://danviet.vn/lang-nghe-nong-dan-noi-mong-chinh-sach-dai-hoi-tu-bo-cong-thuong-cho-bai-toan-tieu-thu-d1366296.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/09/29/hinh-8-1114.jpeg",
            "sapo": "Xuất phát từ thực tiễn sản xuất, những tâm tư thiết tha của nông dân đã được gửi gắm tới Chủ tịch Hội Nông dân Việt Nam và Bộ trưởng Bộ Công Thương. Khẳng định xây dựng thương hiệu là \"chìa khóa vàng\" cho tiêu thụ nông sản, nông dân không chỉ mong chờ giải pháp tạm thời như hội chợ, mà còn kỳ vọng vào những quyết sách mang tính chiến lược, dài hơi.",
            "location": "",
            "date": ""
          },
          {
            "id": "1366062",
            "title": "Ngày 1/10 sẽ diễn ra Diễn đàn \"Chủ tịch Hội Nông dân Việt Nam và Bộ trưởng Bộ Công Thương lắng nghe nông dân nói\"",
            "url": "https://danviet.vn/ngay-1-10-se-dien-ra-dien-dan-chu-tich-hoi-nong-dan-viet-nam-va-bo-truong-bo-cong-thuong-lang-nghe-nong-dan-noi-d1366062.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/09/29/cover-dien-dan-0817.jpg",
            "sapo": "Ngày 01/10/2025, tại Hà Nội, Trung ương Hội Nông dân Việt Nam phối hợp với Bộ Công Thương tổ chức Diễn đàn Nông dân Quốc gia lần thứ X năm 2025: “Chủ tịch Hội Nông dân Việt Nam và Bộ trưởng Bộ Công Thương - Lắng nghe nông dân nói\". Báo Nông thôn Ngày nay/điện tử Dân Việt được giao phối hợp với các cơ quan của Bộ Công Thương trực tiếp thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1365937",
            "title": "Lắng nghe nông dân nói: Xuất khẩu nông sản trước thách thức từ thuế quan và hàng rào kỹ thuật ",
            "url": "https://danviet.vn/lang-nghe-nong-dan-noi-xuat-khau-nong-san-truoc-thach-thuc-tu-thue-quan-va-hang-rao-ky-thuat-d1365937.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/09/27/xuat-khau-nong-san-1-1825.jpg",
            "sapo": "Hội nhập toàn cầu đã mở ra những cánh cửa rộng lớn cho ngành xuất khẩu nông sản. Tuy nhiên, những xung đột chính trị giữa các nước kéo dài, khó khăn kinh tế, lạm phát tăng cao… khiến nhiều quốc gia đưa thêm các quy định siết chặt nhập khẩu, dựng hàng rào phi thuế quan khắt khe.",
            "location": "",
            "date": ""
          },
          {
            "id": "1365925",
            "title": "Lắng nghe nông dân nói: Nông dân Đà Nẵng mong mỏi bình ổn giá vật tư nông nghiệp",
            "url": "https://danviet.vn/lang-nghe-nong-dan-noi-nong-dan-da-nang-mong-moi-binh-on-gia-vat-tu-nong-nghiep-d1365925.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/09/27/base64-1700876483416981682611-1649.png",
            "sapo": "Trước thềm Diễn đàn \"Chủ tịch Hội Nông dân Việt Nam và Bộ trưởng Bộ Công Thương lắng nghe nông dân nói\", nhiều nông dân tại Đà Nẵng đã đề xuất nhiều ý kiến nhằm bình ổn giá vật tư nông nghiệp, cũng như các vấn đề liên quan đến đầu ra cho sản phẩm ngành nông nghiệp.",
            "location": "",
            "date": ""
          },
          {
            "id": "1365881",
            "title": "Lắng nghe nông dân nói: Lan tỏa sản xuất sạch, tiêu dùng xanh trong cộng đồng",
            "url": "https://danviet.vn/lang-nghe-nong-dan-noi-lan-toa-san-xuat-sach-tieu-dung-xanh-trong-cong-dong-d1365881.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/09/27/sieu-thi_1129f-1308.jpg",
            "sapo": "Để hiện thực hóa mục tiêu quốc gia về phát triển bền vững, Bộ Công Thương đã tham mưu Chính phủ ban hành Quyết định số 889/QĐ-TTg phê duyệt Chương trình hành động quốc gia về sản xuất và tiêu dùng bền vững giai đoạn 2021 - 2030. Chương trình hướng tới quản lý, khai thác và sử dụng hiệu quả tài nguyên; khuyến khích phát triển vật liệu thân thiện với môi trường; đổi mới mô hình sản xuất - tiêu dùng theo hướng kinh tế tuần hoàn.",
            "location": "",
            "date": ""
          },
          {
            "id": "1365372",
            "title": "Lắng nghe nông dân nói: Cần động lực nào để mở rộng mô hình sản xuất chuẩn sạch, an toàn?",
            "url": "https://danviet.vn/lang-nghe-nong-dan-noi-can-dong-luc-nao-de-mo-rong-mo-hinh-san-xuat-chuan-sach-an-toan-d1365372.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/09/25/z7048545304194_a383a5f7597c50b86b650fb79d912aec-1404.jpg",
            "sapo": "Đối với nông hộ, bên cạnh vai trò kiểm soát thị trường nhằm đảm bảo cạnh tranh lành mạnh thì dòng vốn hỗ trợ đầu tư cũng hết sức cần thiết. Từ đó mới có thể thúc đẩy người nông dân thực sự có động lực tham gia vào quy trình sản xuất rau sạch tiêu chuẩn.",
            "location": "",
            "date": ""
          },
          {
            "id": "1365136",
            "title": "Nông dân Đà Nẵng kỳ vọng giải được bài toán “được mùa mất giá - được giá mất mùa”",
            "url": "https://danviet.vn/nong-dan-da-nang-ky-vong-giai-duoc-bai-toan-duoc-mua-mat-gia--duoc-gia-mat-mua-d1365136.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/09/24/z7044999779053_a638133b01f8db0840e861526b6dfd2a-1457.jpg",
            "sapo": "Trước thềm Diễn đàn \"Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Công Thương lắng nghe nông dân nói\", bà Lê Thị Minh Tâm - Chủ tịch Hội Nông dân TP Đà Nẵng đã chia sẻ những khó khăn, vướng mắc trong việc kết nối thị trường và tiêu thụ nông sản cho bà con nông dân, đặc biệt là những người dân ở vùng sâu, vùng xa.",
            "location": "",
            "date": ""
          },
          {
            "id": "1364540",
            "title": "Chủ tịch Hội Nông dân Quảng Trị gửi kiến nghị tới Diễn đàn “Lắng nghe nông dân nói”",
            "url": "https://danviet.vn/chu-tich-hoi-nong-dan-quang-tri-gui-kien-nghi-toi-dien-dan-lang-nghe-nong-dan-noi-d1364540.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/09/22/cover-1920-x-1080-1344-160532-1100.jpg",
            "sapo": "Trước thềm Diễn đàn Bộ trưởng Bộ Công Thương và Chủ tịch Hội Nông dân Việt Nam - Lắng nghe nông dân nói dự kiến diễn ra đầu tháng 10/2025 tại Hà Nội, ông Trần Tiến Sỹ – Chủ tịch Hội Nông dân tỉnh Quảng Trị đã có những chia sẻ, kiến nghị gửi tới diễn đàn, xoay quanh nhiều vấn đề nóng đang đặt ra cho nông dân địa phương.",
            "location": "",
            "date": ""
          },
          {
            "id": "1364809",
            "title": "Lắng nghe nông dân nói: Bộ trưởng Bộ Công Thương chỉ đạo \"nóng\" về xúc tiến thương mại, xuất khẩu và logistic",
            "url": "https://danviet.vn/lang-nghe-nong-dan-noi-bo-truong-bo-cong-thuong-chi-dao-nong-ve-xuc-tien-thuong-mai-xuat-khau-va-logistic-d1364809.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/09/23/nganh-cong-thuong-dong-bo-giai-phap-tiep-tuc-giu-vung-on-dinh-kinh-te-vi-mo-kiem-soat-lam-phat-thuc-day-tang-truong_68d176c2621fc-103354.jpg",
            "sapo": "Bộ trưởng Bộ Công Thương yêu cầu Cục Xuất nhập khẩu hoàn thiện Chiến lược phát triển dịch vụ logistics Việt Nam thời kỳ 2025 - 2035, tầm nhìn đến năm 2050, báo cáo Thủ tướng Chính phủ.",
            "location": "",
            "date": ""
          },
          {
            "id": "1364555",
            "title": "Lắng nghe nông dân nói: Kiến nghị kết nối thương mại số từ ba trụ cột quan trọng",
            "url": "https://danviet.vn/lang-nghe-nong-dan-noi-kien-nghi-ket-noi-thuong-mai-so-tu-ba-tru-cot-quan-trong-d1364555.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/09/22/175341thai-hoa1-1749-140150.jpg",
            "sapo": "Kết nối thương mại số được coi là “tấm hộ chiếu” để nông sản Việt Nam mở rộng thị trường, nâng cao giá trị và hội nhập sâu vào chuỗi cung ứng toàn cầu.",
            "location": "",
            "date": ""
          },
          {
            "id": "1364390",
            "title": "Lắng nghe nông dân nói: Kỳ vọng Bộ Công Thương và Hội Nông dân đưa ra giải pháp phát triển thương hiệu nông sản\n",
            "url": "https://danviet.vn/lang-nghe-nong-dan-noi-ky-vong-bo-cong-thuong-va-hoi-nong-dan-dua-ra-giai-phap-phat-trien-thuong-hieu-nong-san-d1364390.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/09/21/z7034932630717_898bb8333bc74bef3fbee646a489466d-1607.jpg",
            "sapo": "Không chỉ mong đầu ra ổn định, giá trị cao hơn, nông dân còn gửi gắm nhiều kỳ vọng vào Diễn đàn “Lắng nghe nông dân nói”. Họ chờ đợi Bộ Công Thương và Hội Nông dân sẽ đưa ra những giải pháp cụ thể, đồng hành cùng bà con trong việc kết nối thị trường, xây dựng thương hiệu cho nông sản địa phương.",
            "location": "",
            "date": ""
          },
          {
            "id": "1364216",
            "title": "Bộ Công Thương cụ thể hoá hàng loạt Nghị quyết đột phá của Bộ Chính trị cho lĩnh vực nông nghiệp",
            "url": "https://danviet.vn/bo-cong-thuong-cu-the-hoa-hang-loat-nghi-quyet-dot-pha-cua-bo-chinh-tri-cho-linh-vuc-nong-nghiep-d1364216.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/09/20/171208gemini_generated_image_1z9dl91z9dl91z9d-1711.png",
            "sapo": "Ngay sau khi các Nghị quyết của Bộ Chính trị về kinh tế và ngành nông nghiệp nói riêng được ban hành, với tư các bộ chủ quản kinh tế vĩ mô, Bộ Công Thương đã nhanh chóng đưa ra các kế hoạch, kịch bản, chương trình hành động để các chính sách đi vào cuộc sống từ sớm, thấm vào mọi lĩnh vực, đối tượng.",
            "location": "",
            "date": ""
          },
          {
            "id": "1363942",
            "title": "Sắp diễn ra Diễn đàn Bộ trưởng Bộ Công Thương và Chủ tịch Hội Nông dân Việt Nam lắng nghe nông dân nói",
            "url": "https://danviet.vn/sap-dien-ra-dien-dan-bo-truong-bo-cong-thuong-va-chu-tich-hoi-nong-dan-viet-nam-lang-nghe-nong-dan-noi-d1363942.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/09/19/cover-1920-x-1080-1344.jpg",
            "sapo": "Theo dự kiến, đầu tháng 10 tới đây, Diễn đàn Bộ trưởng Bộ Công Thương và Chủ tịch Hội Nông dân Việt Nam - Lắng nghe nông dân nói, sẽ được tổ chức tại Hà Nội nhằm lắng nghe tâm tư, nguyện vọng của nông dân, hợp tác xã trước thềm diễn ra chuỗi chương trình Tự hào Nông dân Việt Nam năm 2025, hướng tới kỷ niệm 95 năm thành lập Hội Nông dân Việt Nam (ngày 14/10/1930-14/10/2025).",
            "location": "",
            "date": ""
          }
        ],
        "articleCount": 31
      },
      {
        "id": "3016",
        "kicker": "T.Ư Hội Nông dân Việt Nam – Bộ Nông nghiệp và Môi trường",
        "title": "Chủ tịch Hội NDVN và Bộ trưởng Bộ NNMT lắng nghe nông dân nói",
        "date": "",
        "location": "Trung tâm Hội nghị 37 Hùng Vương, Hà Nội",
        "cover": "https://t.ex-cdn.com/danviet.vn/800w/files/channel/2025/10/14/chu-tich-hoi-ndvn-va-bo-truong-bo-nnmt-lang-nghe-nong-dan-noi-091708.jpg",
        "summary": "Diễn đàn với chủ đề “Đồng hành cùng nông dân bước vào kỷ nguyên mới” quy tụ khoảng 300 đại biểu. Hàng trăm câu hỏi của nông dân, hợp tác xã, doanh nghiệp, nhà khoa học tập trung vào 4 nhóm “điểm nghẽn” — từ đất đai, công nghệ đến nhân lực — và được lãnh đạo Bộ, cục, vụ trực tiếp giải đáp.",
        "stats": [
          {
            "value": 100,
            "suffix": "+",
            "label": "Bài báo tư liệu"
          },
          {
            "value": 300,
            "suffix": "+",
            "label": "Đại biểu dự Diễn đàn"
          }
        ],
        "link": "https://danviet.vn/chu-tich-hoi-ndvn-va-bo-truong-bo-nnmt-lang-nghe-nong-dan-noi-channel3016/",
        "linkLabel": "Xem thêm trên Dân Việt",
        "api": "https://danviet.vn/api/chu-de/3016",
        "articles": [
          {
            "id": "1375396",
            "title": "Tỷ phú cá tầm, cá hồi Lào Cai đề nghị xây dựng trung tâm sản xuất giống cá nước lạnh, Bộ NNMT nói có thể \"mua đứt\"",
            "url": "https://danviet.vn/ty-phu-ca-tam-ca-hoi-lao-cai-de-nghi-xay-dung-trung-tam-san-xuat-giong-ca-nuoc-lanh-bo-nnmt-noi-co-the-mua-dut-d1375396.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/04/tran-chugn-hung-1543.jpg",
            "sapo": "Trả lời đề nghị của anh Trần Chung Hưng, nông dân Việt Nam xuất sắc năm 2023, tỷ phú nuôi cá tầm, cá hồi tỉnh Lào Cai về việc hỗ trợ xây dựng trung tâm sản xuất giống cá nước lạnh, Vụ trưởng Vụ Khoa học, Công nghệ và Môi trường cho biết, Việt Nam sẵn sàng \"mua đứt\" khoa học công nghệ của nước ngoài để phát triển kinh tế đất nước, trong đó có lĩnh vực nuôi cá nước lạnh.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375739",
            "title": "Thế hệ nông dân chuyên nghiệp, tri thức sẽ định hình tương lai nền nông nghiệp",
            "url": "https://danviet.vn/the-he-nong-dan-chuyen-nghiep-tri-thuc-se-dinh-hinh-tuong-lai-nen-nong-nghiep-d1375739.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/03/nong-dan-moi-2-1606.jpg",
            "sapo": "Tại Diễn đàn Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường lắng nghe nông dân nói năm 2025, hơn 15 nhóm câu hỏi và ý kiến đã được tiếp nhận, tập trung vào 4 nhóm vấn đề nóng của nông nghiệp, nông dân, nông thôn Việt Nam. Trong đó, khát vọng về một thế hệ người nông dân mới – những người tự tin, chuyên nghiệp, làm chủ tri thức, công nghệ và thị trường – là tâm điểm của diễn đàn.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375728",
            "title": "Nông dân băn khoăn quy định mới trong xuất khẩu của Trung Quốc, Cục trưởng Cục Trồng trọt và BVTV giải thích rõ",
            "url": "https://danviet.vn/nong-dan-ban-khoan-quy-dinh-moi-trong-xuat-khau-cua-trung-quoc-cuc-truong-cuc-trong-trot-va-bvtv-giai-thich-ro-d1375728.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/03/1443764657-dsc_5045-1538.jpg",
            "sapo": "Tại Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói, chị Bùi Thị Hiếu, Nông dân Việt Nam xuất sắc năm 2025 băn khoăn vấn đề số hóa mã số vùng trồng và những quy định mới về xuất nhập khẩu của thị trường Trung Quốc. Diễn đàn do báo Nông thôn Ngày nay/Dân Việt được giao trực tiếp thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375688",
            "title": "Diễn đàn Lắng nghe nông dân: Doanh nghiệp có 13 nông trường, 2 trung tâm sơ chế chia sẻ quan điểm liên kết với nông dân",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-doanh-nghiep-co-13-nong-truong-2-trung-tam-so-che-chia-se-quan-diem-lien-ket-voi-nong-dan-d1375688.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/03/143958lang-nghe-1438.jpg",
            "sapo": "Tại Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói, đại diện Công ty TNHH Đầu tư sản xuất phát triển nông nghiệp WinEco, một thành viên của Tập đoàn Masan đã có những ý kiến đóng góp để thúc đẩy chương trình liên kết, đồng hành với nông dân trong sản xuất.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375675",
            "title": "Sau Diễn đàn Lắng nghe nông dân nói, cần tổ chức nhiều diễn đàn chuyên đề trên nền tảng số kết nối khoa học công nghệ",
            "url": "https://danviet.vn/sau-dien-dan-lang-nghe-nong-dan-noi-can-to-chuc-nhieu-dien-dan-chuyen-de-tren-nen-tang-so-ket-noi-khoa-hoc-cong-nghe-d1375675.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/03/131927z7180365889115_fc989a582c08a38320cdc476bbe934ed-1319.jpg",
            "sapo": "Đây là đề xuất của ông Lê Quốc Thanh, Giám đốc Trung tâm Khuyến nông Quốc gia sau Diễn đàn Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường lắng nghe nông dân nói năm 2025 với chủ đề: “Đồng hành cùng nông dân bước vào kỷ nguyên mới”. Báo Nông thôn Ngày nay/Điện tử Dân Việt được giao trực tiếp tổ chức Diễn đàn.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375650",
            "title": "Chào buổi sáng VTV1: 4 nhóm vấn đề \"nóng\" tại Diễn đàn Lắng nghe nông dân nói 2025",
            "url": "https://danviet.vn/4-nhom-van-de-nong-nhat-duoc-nong-dan-kien-nghi-bo-nnmt-va-hoi-nong-dan-vn-d1375650.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/03/_mg_64031-1203.jpg",
            "sapo": "Diễn đàn \"Lắng nghe nông dân nói\" 2025, bốn nhóm vấn đề nóng nhất được nông dân nêu ra gồm: (1) Cải cách thủ tục hành chính (đất đai, môi trường) khi vận hành chính quyền 2 cấp; (2) Ứng dụng AI, chuyển đổi số, truy xuất nguồn gốc; (3) Khơi thông vốn, tín dụng xanh, phát triển HTX; (4) Xây dựng NTM văn minh và Bộ tiêu chí \"Nông dân số - Nông dân xanh\".",
            "location": "",
            "date": ""
          },
          {
            "id": "1375576",
            "title": "Nhà khoa học trăn trở bảo tồn loài sâm quý, có chất chống ung thư, Vụ trưởng của Bộ NNMT mời làm việc bàn giải pháp ",
            "url": "https://danviet.vn/nha-khoa-hoc-tran-tro-bao-ton-loai-sam-quy-co-chat-chong-ung-thu-vu-truong-cua-bo-nnmt-moi-lam-viec-ban-giai-phap-d1375576.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/03/092856nguyen-van-long-0918.jpg",
            "sapo": "Tại Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói do Báo Nông thôn Ngày nay/Dân Việt được giao tổ chức, nhà khoa học của nhà nông 2024 băn khoăn việc truy xuất nguồn gốc và bảo tồn một loài sâm quý, Vụ trưởng Vụ Khoa học, Công nghệ và Môi trường đã mời đại biểu làm việc ngay ngày hôm sau để tìm ra giải pháp.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375470",
            "title": "\"Vua\" cá nước lạnh Sa Pa  trăn trở: Cá tầm Trung Quốc giá rẻ cạnh tranh gay gắt, công nghệ giống hạn chế",
            "url": "https://danviet.vn/vua-ca-nuoc-lanh-sa-pa-tran-tro-ca-tam-trung-quoc-gia-re-canh-tranh-gay-gat-cong-nghe-giong-han-che-d1375470.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/02/ong-hung-0948-1622.jpg",
            "sapo": "\"Nông dân xuất sắc 2023\" Trần Chung Hưng đã chất vấn Bộ NNMT tại Diễn đàn \"Lắng nghe nông dân nói\" về 2 thách thức lớn của ngành cá nước lạnh: sự cạnh tranh từ cá tầm Trung Quốc giá rẻ và việc thiếu công nghệ giống (phải \"tự mày mò\").",
            "location": "",
            "date": ""
          },
          {
            "id": "1375505",
            "title": "Video toàn cảnh Diễn đàn \"Lắng nghe nông dân nói\": 4 nhóm \"điểm nghẽn\" về đất đai, vốn, giống và nhân lực",
            "url": "https://danviet.vn/video-toan-canh-dien-dan-lang-nghe-nong-dan-noi-4-nhom-diem-nghen-ve-dat-dai-von-giong-va-nhan-luc-d1375505.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/02/img_8399-1922.jpeg",
            "sapo": "Tại Diễn đàn Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói 2025, nông dân xuất sắc và doanh nghiệp đã tập trung chất vấn về 4 nhóm vấn đề: Đất đai; Công nghệ; Hạ tầng; Nhân lực... Lãnh đạo Bộ, cục, vụ… trực tiếp giải đáp từng vấn đề.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375480",
            "title": "AHLĐ - Chủ tịch ThaiBinh Seed: \"Giống cây trồng là vật tư quan trọng bậc nhất, thay đổi cả ngành\"",
            "url": "https://danviet.vn/ahld--chu-tich-thaibinh-seed-giong-cay-trong-la-vat-tu-quan-trong-bac-nhat-thay-doi-ca-nganh-d1375480.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/02/tran-manh-bao-1-1105-1634.jpg",
            "sapo": "Phát biểu tại Diễn đàn “Lắng nghe nông dân nói”, Anh hùng Lao động, Chủ tịch HĐQT Tập đoàn ThaiBinh Seed Trần Mạnh Báo - đề xuất 3 giải pháp cấp bách: (1) Thiết lập cơ chế phối hợp \"công - tư\" hiệu quả (Viện - Doanh nghiệp - Nông dân); (2) Quản lý chặt thị trường giống (đặc biệt là lúa ở ĐBSCL) để bảo vệ thương hiệu gạo Việt; (3) Đẩy nhanh Chiến lược phát triển ngành giống quốc gia đang bị chậm trễ.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375482",
            "title": "CEO Nguyễn Thị Thành Thực: \"Hỗ trợ 300 triệu/máy là quá nhỏ, không đủ mua máy sấy thăng hoa\"",
            "url": "https://danviet.vn/ceo-nguyen-thi-thanh-thuc-ho-tro-300-trieu-may-la-qua-nho-khong-du-mua-may-say-thang-hoa-d1375482.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/02/thanh-thuc-1119-1639.jpg",
            "sapo": "\"Hỗ trợ 300 triệu đồng không đủ để đầu tư công nghệ sấy thăng hoa\", CEO Nguyễn Thị Thành Thực phát biểu tại Diễn đàn \"Lắng nghe nông dân nói\", chỉ ra sự tản mạn trong chính sách hỗ trợ chế biến. Bà Thực cũng kiến nghị thành lập \"Hiệp hội cà phê đặc sản\" để nâng tầm thương hiệu Việt Nam, khi giá cà phê Robusta đang cao kỷ lục.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375501",
            "title": "Toàn cảnh Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường: Lắng nghe Nông dân nói 2025",
            "url": "https://danviet.vn/toan-canh-dien-dan-chu-tich-hoi-nong-dan-viet-nam--bo-truong-bo-nong-nghiep-va-moi-truong-lang-nghe-nong-dan-noi-2025-d1375501.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/02/180437_mg_64202_original-1759.jpeg",
            "sapo": "Ngày 2/11, tại Hà Nội, Trung ương Hội Nông dân Việt Nam phối hợp với Bộ Nông nghiệp và Môi trường chủ trì Diễn đàn Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường lắng nghe nông dân nói năm 2025 với chủ đề: “Đồng hành cùng nông dân bước vào kỷ nguyên mới”. Báo Nông thôn Ngày nay/Điện tử Dân Việt được giao trực tiếp tổ chức thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375478",
            "title": "Ước tính chi phí xử lý nước thải từ 28.000 – 35.000 đồng/m³, một doanh nghiệp chăn nuôi lớn đề xuất loạt kiến nghị",
            "url": "https://danviet.vn/uoc-tinh-chi-phi-xu-ly-nuoc-thai-tu-28000-35000-dong-m-mot-doanh-nghiep-chan-nuoi-lon-de-xuat-loat-kien-nghi-d1375478.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/02/gia-lon-hoi-17200916839871604395060-1720.jpg",
            "sapo": "Tại Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói do báo NTNN/Dân Việt được giao tổ chức thực hiện, ông Nguyễn Văn Minh - Phó Tổng Giám đốc Công ty CP Nông nghiệp BAF Việt Nam đã đề xuất loạt kiến nghị về quy chuẩn xử lý chất thải chăn nuôi gắn với kinh nghiệm thực tiễn của doanh nghiệp, bày tỏ mong muốn hỗ trợ đào tạo và tuyển dụng nguồn nhân lực chăn nuôi công nghệ cao.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375475",
            "title": "“Lắng nghe nông dân nói năm 2025” – Đồng hành cùng nông dân bước vào kỷ nguyên mới",
            "url": "https://danviet.vn/lang-nghe-nong-dan-noi-nam-2025-dong-hanh-cung-nong-dan-buoc-vao-ky-nguyen-moi-d1375475.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/02/anh-23-1154.jpg",
            "sapo": "Không chỉ là nơi “hỏi – đáp”, Diễn đàn “Lắng nghe nông dân nói 2025” còn trở thành cầu nối để các đồng chí lãnh đạo Bộ, ngành được trực tiếp gặp gỡ, đối thoại và lắng nghe những tâm tư, tình cảm, chia sẻ của người nông dân về các vấn đề đã, đang và sẽ đặt ra trong thời gian tới.  Qua diễn đàn, không khí trao đổi thẳng thắn, cởi mở càng làm cho người nông dân vững niềm tin vào các chính sách của Đảng, Nhà nước dành cho nông nghiệp, nông dân, nông thôn.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375460",
            "title": "Bộ trưởng Trần Đức Thắng: \"Giúp nông dân làm chủ tri thức - công nghệ - thị trường\"",
            "url": "https://danviet.vn/bo-truong-tran-duc-thang-giup-nong-dan-lam-chu-tri-thuc--cong-nghe--thi-truong-d1375460.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/02/z7180030554656_e8f4eb1f89406ec2e73efd85be99a1ef-0856-1539.jpg",
            "sapo": "Phát biểu kết luận Diễn đàn \"Lắng nghe nông dân nói\", Bộ trưởng Bộ NNMT Trần Đức Thắng khẳng định \"mệnh lệnh từ thực tiễn\" là phải hành động quyết liệt. Bộ trưởng chia sẻ 3 định hướng lớn: (1) Đặt nông dân làm trung tâm, giúp họ \"làm chủ tri thức, công nghệ, thị trường\"; (2) Kiến tạo hệ sinh thái nông nghiệp xanh - thông minh; (3) Khơi dậy đoàn kết, xây dựng nông thôn \"đáng sống\".",
            "location": "",
            "date": ""
          },
          {
            "id": "1375452",
            "title": "Video phát biểu của Chủ tịch HND VN Lương Quốc Đoàn: Xây dựng nông dân chuyên nghiệp, đáp ứng yêu cầu giai đoạn mới",
            "url": "https://danviet.vn/phat-bieu-cua-chu-tich-hnd-viet-nam-luong-quoc-doan-xay-dung-nong-dan-chuyen-nghiep-dap-ung-yeu-cau-giai-doan-moi-d1375452.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/02/chu-tich-hoi-nong-dan-viet-nam-0858-1459.jpg",
            "sapo": "Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói năm 2025 với chủ đề “Đồng hành cùng nông dân bước vào Kỷ nguyên mới\" là hoạt động lắng nghe, đối thoại lần thứ 2 trong năm nay do Trung ương Hội Nông dân Việt Nam chủ trì tổ chức. Diễn đàn Lắng nghe nông dân nói lần này là một trong những hoạt động quan trọng trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375459",
            "title": "\"Bắt\" bệnh khuyến nông cơ sở: Nông dân Lạng Sơn và câu trả lời của Bộ NNMT",
            "url": "https://danviet.vn/bat-benh-khuyen-nong-co-so-nong-dan-lang-son-va-cau-tra-loi-cua-bo-nnmt-d1375459.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/02/vuong-thi-thuong-0915-1534.jpg",
            "sapo": "Nông dân Lạng Sơn chất vấn về tình trạng thiếu hụt khuyến nông cơ sở. Bộ trưởng Bộ NNMT Trần Đức Thắng và Giám đốc TTKN Quốc gia Lê Quốc Thanh khẳng định: Lực lượng khuyến nông sẽ được đưa về xã, tránh \"tầng lớp trung gian\". Dù Thông tư 60 về việc này đã hiệu lực, Bộ trưởng cho biết mới 7/34 tỉnh thành sắp xếp lực lượng, Bộ đang đôn đốc các tỉnh còn lại khẩn trương tiếp nhận 4.600 cán bộ này.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375413",
            "title": "Bộ trưởng Trần Đức Thắng: Hành động quyết liệt, nông dân là trung tâm, nông thôn là nơi đáng sống",
            "url": "https://danviet.vn/bo-truong-tran-duc-thang-hanh-dong-quyet-liet-nong-dan-la-trung-tam-nong-thon-la-noi-dang-song-d1375413.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/02/anh-112-1152.jpg",
            "sapo": "Phát biểu kết luận Diễn đàn “Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường lắng nghe nông dân nói năm 2025” với chủ đề “Đồng hành cùng nông dân bước vào kỷ nguyên mới”, Bộ trưởng Trần Đức Thắng gửi lời cảm ơn sâu sắc đến Trung ương Hội Nông dân Việt Nam và các đại biểu, đồng thời khẳng định quyết tâm của ngành trong việc đặt nông dân ở vị trí trung tâm, phát triển nông nghiệp sinh thái, nông thôn hiện đại, nông dân văn minh và môi trường bền vững.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375364",
            "title": "Bộ trưởng Trần Đức Thắng: Sẽ tham mưu để phát triển diện tích trồng giống lúa Việt Nam ở Cuba lên 100.000 - 200.000ha",
            "url": "https://danviet.vn/bo-truong-tran-duc-thang-se-tham-muu-de-phat-trien-dien-tich-trong-giong-lua-viet-nam-o-cuba-len-100000--200000ha-d1375364.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/02/094317tran-duc-thang-0935.jpg",
            "sapo": "Tại Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói do báo NTNN/Dân Việt được giao tổ chức thực hiện, trả lời câu hỏi của ông Phạm Văn Hướng, Nông dân Việt Nam xuất sắc năm 2025 đến từ Ninh Bình về việc muốn đầu tư sản xuất lúa ở những địa phương, vùng đất mới như Cuba, Bộ trưởng Trần Đức Thắng cho biết, thời gian tới sẽ phấn đấu đưa diện tích liên kết trồng lúa với Cuba lên khoảng 100.000 - 200.000ha.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375293",
            "title": "Xem trực tiếp Diễn đàn Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói",
            "url": "https://danviet.vn/xem-truc-tiep-dien-dan-chu-tich-hoi-nong-dan-viet-nam-bo-truong-bo-nong-nghiep-va-moi-truong-lang-nghe-nong-dan-noi-d1375293.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/02/z7180169074840_ed5dad904bffa3443044c7b97f60c822-0924.jpg",
            "sapo": "Diễn đàn Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói do Trung ương Hội Nông dân Việt Nam, Bộ Nông nghiệp và Môi trường đồng phối hợp tổ chức. Báo NTNN/Dân Việt được giao phối hợp với Văn phòng Bộ thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375317",
            "title": "Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường: Lắng nghe nông dân nói",
            "url": "https://danviet.vn/dien-dan-chu-tich-hoi-nong-dan-viet-nam--bo-truong-bo-nong-nghiep-va-moi-truong-lang-nghe-nong-dan-noi-d1375317.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/02/avatar-0839.jpg",
            "sapo": "Sáng nay (2/11) tại Hà Nội, Trung ương Hội Nông dân Việt Nam phối hợp với Bộ Nông nghiệp và Môi trường chủ trì Diễn đàn Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường lắng nghe nông dân nói năm 2025 với chủ đề: “Đồng hành cùng nông dân bước vào kỷ nguyên mới”. Báo Nông thôn Ngày nay/Điện tử Dân Việt được giao trực tiếp tổ chức thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375361",
            "title": "Toàn văn bài phát biểu của Chủ tịch Hội Nông dân Việt Nam Lương Quốc Đoàn tại Diễn đàn Lắng nghe nông dân nói 2025",
            "url": "https://danviet.vn/toan-van-bai-phat-bieu-cua-chu-tich-hoi-nong-dan-viet-nam-luong-quoc-doan-tai-dien-dan-lang-nghe-nong-dan-noi-2025-d1375361.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/02/chu-tich-hoi-nong-dan-viet-nam-0858.jpg",
            "sapo": "Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói năm 2025 với chủ đề “Đồng hành cùng nông dân bước vào Kỷ nguyên mới\" là hoạt động lắng nghe, đối thoại lần thứ 2 trong năm nay do Trung ương Hội Nông dân Việt Nam chủ trì tổ chức. Diễn đàn Lắng nghe nông dân nói lần này là một trong những hoạt động quan trọng trước thềm Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2025.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375359",
            "title": "Bộ trưởng Trần Đức Thắng cam kết đồng hành với người nông dân, HTX, doanh nghiệp, kiến tạo nền nông nghiệp vững mạnh",
            "url": "https://danviet.vn/bo-truong-tran-duc-thang-cam-ket-dong-hanh-voi-nguoi-nong-dan-htx-doanh-nghiep-kien-tao-nen-nong-nghiep-vung-manh-d1375359.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/02/z7180030554656_e8f4eb1f89406ec2e73efd85be99a1ef-0856.jpg",
            "sapo": "Bộ trưởng Bộ Nông nghiệp và Môi trường Trần Đức Thắng khẳng định, sẽ luôn đồng hành cùng người nông dân, cùng hợp tác xã và doanh nghiệp, để nông dân Việt Nam không chỉ sản xuất giỏi, mà còn làm chủ công nghệ, làm chủ thị trường và làm chủ tương lai của chính mình, kiến tạo một nền nông nghiệp vững mạnh, một nông thôn đáng sống và một cộng đồng nông dân tự tin, tự lực, tự cường.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375241",
            "title": "Diễn đàn Lắng nghe nông dân nói: HTX lớn ở TP.HCM trăn trở về vốn, nông nghiệp công nghệ cao và lao động trẻ",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-htx-lon-o-tphcm-tran-tro-ve-von-nong-nghiep-cong-nghe-cao-va-lao-dong-tre-d1375241.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/01/thiet-ke-chua-co-ten-1644.png",
            "sapo": "Trước thềm Diễn đàn Lắng nghe nông dân nói năm 2025, nhiều giám đốc HTX lớn ở TP.HCM đã thẳng thắn chia sẻ những khó khăn trong quá trình phát triển nông nghiệp công nghệ cao, từ thiếu vốn, khó tiếp cận tín dụng ưu đãi đến vướng mắc trong quy hoạch đất đai, khung pháp lý và kết nối thị trường. Diễn đàn do báo Nông thôn Ngày nay/Dân Việt được giao trực tiếp thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375215",
            "title": "Hội Nông dân Việt Nam, Bộ Nông nghiệp và Môi trường đồng hành cùng nông dân bước vào kỷ nguyên mới",
            "url": "https://danviet.vn/hoi-nong-dan-viet-nam-bo-nong-nghiep-va-moi-truong-dong-hanh-cung-nong-dan-buoc-vao-ky-nguyen-moi-d1375215.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/01/chu-tich-hoi-nong-dan-viet-nam-luong-quoc-doan-1458.jpg",
            "sapo": "Hôm nay 2/11, tại Hà Nội, Trung ương Hội Nông dân Việt Nam phối hợp với Bộ Nông nghiệp và Môi trường tổ chức Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói năm 2025 với chủ đề “Đồng hành cùng nông dân bước vào kỷ nguyên mới”. Báo Nông thôn Ngày nay/điện tử Dân Việt được giao trực tiếp tổ chức thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375306",
            "title": "Sáng nay (2/11), 300 đại biểu dự Diễn đàn “Lắng nghe nông dân nói 2025”: Đồng hành cùng nông dân bước vào kỷ nguyên mới",
            "url": "https://danviet.vn/sang-nay-2-11-khai-mac-dien-dan-lang-nghe-nong-dan-noi-2025-dong-hanh-cung-nong-dan-buoc-vao-ky-nguyen-moi-d1375306.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/01/573956880_25454491794137436_28536320207947073_n-2115.png",
            "sapo": "Chỉ còn ít giờ nữa, tại Trung tâm Hội nghị 37 Hùng Vương (Hà Nội), Diễn đàn \"Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường “Lắng nghe nông dân nói” năm 2025\" sẽ chính thức khai mạc với chủ đề: “Đồng hành cùng nông dân bước vào kỷ nguyên mới”. Báo Nông thôn Ngày nay/Điện tử Dân Việt được giao trực tiếp tổ chức thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375243",
            "title": "Diễn đàn Lắng nghe nông dân nói: Cát tặc hút ở đâu, đất lở ở đó, một nông dân bị mất 60ha chuối xuất khẩu \"khóc ròng\" ",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-cat-tac-hut-o-dau-dat-lo-o-do-mot-nong-dan-bi-mat-60ha-chuoi-xuat-khau-khoc-rong-d1375243.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/11/01/chuo-5-2046.jpg",
            "sapo": "Trao đổi với PV Dân Việt, anh Hà Văn Tú, ở khu 3, xã Vĩnh Chân, tỉnh Phú Thọ cho biết, anh có gần 60ha chuối trồng tại vùng đất bãi ven sông Hồng và được cấp mã số vùng trồng xuất khẩu. Tuy nhiên đợt mưa lũ vừa qua, anh gần như mất trắng vì hàng chục ha đã bị lở xuống sông. Tại Diễn đàn Lắng nghe nông dân nói, do báo NTNN/Dân Việt được giao tổ chức thực hiện, anh Tú mong muốn Bộ NNMT có giải pháp phối hợp mạnh tay hơn nhằm ngăn chặn \"cát tặc\".",
            "location": "",
            "date": ""
          },
          {
            "id": "1375311",
            "title": "Cục trưởng Cục Trồng trọt và BVTV: Kiến nghị từ Diễn đàn lắng nghe nông dân là cơ sở để tham mưu, xây dựng chính sách",
            "url": "https://danviet.vn/cuc-truong-cuc-trong-trot-va-bvtv-kien-nghi-tu-dien-dan-lang-nghe-nong-dan-la-co-so-de-tham-muu-xay-dung-chinh-sach-d1375311.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/01/215351huynh-tan-dat-2152.jpg",
            "sapo": "Trước thềm Diễn đàn Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói, trao đổi với Dân Việt, ông Huỳnh Tấn Đạt, Cục trưởng Cục Trồng trọt và Bảo vệ thực vật (Bộ Nông nghiệp và Môi trường) cho rằng, Diễn đàn sẽ là kênh quan trọng để tổng hợp kiến nghị từ thực tiễn sản xuất của nông dân để từ đó tham mưu các chính sách, giải pháp sát hơn. Diễn đàn do báo Nông thôn Ngày nay/Dân Việt được giao trực tiếp thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1374986",
            "title": "Diễn đàn Lắng nghe nông dân nói: Nông dân Sơn La kiến nghị cơ chế hỗ trợ phát triển nông nghiệp bền vững vùng cao",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-nong-dan-son-la-kien-nghi-co-che-ho-tro-phat-trien-nong-nghiep-ben-vung-vung-cao-d1374986.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/31/1712207c5a3703-1706.jpg",
            "sapo": "Trước thềm diễn đàn “Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường lắng nghe nông dân nói năm 2025\", nông dân Sơn La mong muốn được đầu tư hạ tầng, hỗ trợ giống cây trồng, kỹ thuật canh tác và tiêu thụ sản phẩm, góp phần nâng cao đời sống, xây dựng nông thôn mới giàu đẹp. Báo Nông thôn Ngày nay/Dân Việt được giao trực tiếp tổ chức Diễn đàn.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375070",
            "title": "Diễn đàn Lắng nghe nông dân nói 2025: Nữ Chủ tịch Hội Nông dân xã kiến nghị tiêu chí xây dựng nông dân chuyên nghiệp",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-2025-nu-chu-tich-hoi-nong-dan-xa-kien-nghi-tieu-chi-xay-dung-nong-dan-chuyen-nghiep-d1375070.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/31/hoi-nong-dan-2322.jpg",
            "sapo": "Trước thềm Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói năm 2025, nhiều Nông dân Việt Nam xuất sắc, Chủ tịch Hội Nông dân cơ sở đã kiến nghị về việc xây dựng hình ảnh người nông dân mới, nông dân chuyên nghiệp. Báo Nông thôn Ngày nay/điện tử Dân Việt được hai đơn vị giao trực tiếp tổ chức thực hiện Diễn đàn.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375058",
            "title": "Đặt nông dân ở trung tâm của phát triển – tinh thần lớn tại Diễn đàn Lắng nghe nông dân nói năm 2025",
            "url": "https://danviet.vn/dat-nong-dan-o-trung-tam-cua-phat-trien-tinh-than-lon-tai-dien-dan-lang-nghe-nong-dan-noi-nam-2025-d1375058.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/31/ong-le-duc-thinh-cuc-truong-cuc-kinh-te-hop-tac-va-ptnt-2-0832-2139.jpg",
            "sapo": "Chỉ còn một ngày nữa, Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói năm 2025 sẽ chính thức diễn ra. Trước thềm sự kiện, Cục trưởng Cục Kinh tế hợp tác và Phát triển nông thôn Lê Đức Thịnh (Bộ NN&MT) đã chia sẻ với phóng viên Dân Việt về kỳ vọng kiến tạo nền nông nghiệp xanh, sinh thái, bền vững. Diễn đàn do Báo NTNN/Dân Việt được giao tổ chức, thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1374923",
            "title": "Diễn đàn Lắng nghe nông dân nói: Trăn trở chuyện làm giàu từ trồng mận hữu cơ, đề xuất về AI, kiểm soát hàng giả",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-tran-tro-chuyen-lam-giau-tu-trong-man-huu-co-de-xuat-ve-ai-kiem-soat-hang-gia-d1374923.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/31/img_7988-2003.jpg",
            "sapo": "Gửi về Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường lắng nghe nông dân nói năm 2025, Hội Nông dân các xã, phường trên cả nước đã có chia sẻ thiết thực về những khó khăn, thách thức của địa phương, đề xuất nhiều nội dung về nông nghiệp hữu cơ, kiểm soát hàng giả, trí tuệ nhân tạo (AI)... Báo Nông thôn ngày nay/Điện tử Dân Việt được hai đơn vị giao trực tiếp tổ chức Diễn đàn.",
            "location": "",
            "date": ""
          },
          {
            "id": "1375047",
            "title": "Chuyên gia, CEO Nguyễn Thị Thành Thực: Lắng nghe nông dân nói, nhìn nông nghiệp đổi thay",
            "url": "https://danviet.vn/chuyen-gia-ceo-nguyen-thi-thanh-thuc-lang-nghe-nong-dan-noi-nhin-nong-nghiep-doi-thay-d1375047.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/31/204944z7176007988449_6db5bf5b7f04761623495e27364104be-2049.jpg",
            "sapo": "Là người đã ba lần tham dự diễn đàn “Lắng nghe nông dân nói”, bà Nguyễn Thị Thành Thực, CEO Công ty CP Công nghệ phần mềm AutoAgri mang đến Diễn đàn lần thứ 4 nhiều tâm huyết và kỳ vọng. Với bà, đây không chỉ là nơi nông dân được “nói lên tiếng nói của mình”, mà còn là cơ hội để chuyển hóa những ý kiến thực tiễn thành chính sách, để nông nghiệp Việt Nam bước vững trên con đường xanh và bền vững. Diễn đàn do Báo NTNN/Dân Việt được giao tổ chức, thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1374874",
            "title": "Diễn đàn Lắng nghe nông dân nói: Hội NDVN - Bộ Nông nghiệp và Môi trường nên thiết lập hệ thống theo dõi sau đối thoại",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-hoi-ndvn--bo-nong-nghiep-va-moi-truong-nen-thiet-lap-he-thong-theo-doi-sau-doi-thoai-d1374874.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/31/131203084559cover-1920-x-1080-ngoi-sao-0845.jpg",
            "sapo": "Đó là kiến nghị của chuyên gia nông nghiệp Hoàng Trọng Thủy trước thềm Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói sẽ chính thức diễn ra vào ngày 2/11, tại Hà Nội. Báo Nông thôn ngày nay/Điện tử Dân Việt được hai đơn vị giao trực tiếp tổ chức Diễn đàn.",
            "location": "",
            "date": ""
          },
          {
            "id": "1374741",
            "title": "Diễn đàn Chủ tịch Hội NDVN-Bộ trưởng Bộ NNMT Lắng nghe nông dân nói: Cầu nối để nông dân bước vào kỷ nguyên mới",
            "url": "https://danviet.vn/dien-dan-chu-tich-hoi-ndvn-bo-truong-bo-nnmt-lang-nghe-nong-dan-noi-cau-noi-de-nong-dan-buoc-vao-ky-nguyen-moi-d1374741.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/11/01/122307tbt-nguyen-van-hoai-2257.jpg",
            "sapo": "Đó là khẳng định của ông Nguyễn Văn Hoài, Tổng biên tập Báo NTNN/Dân Việt, Phó Trưởng ban Thường trực Ban Tổ chức khi nói về Diễn đàn Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói năm 2025. Diễn đàn do Trung ương Hội Nông dân Việt Nam, Bộ Nông nghiệp và Môi trường đồng phối hợp tổ chức. Báo NTNN/Dân Việt được giao phối hợp với Văn phòng Bộ thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1374684",
            "title": "Diễn đàn Lắng nghe nông dân nói là cầu nối quan trọng để cùng xây dựng nền nông nghiệp xanh",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-la-cau-noi-quan-trong-de-cung-xay-dung-nen-nong-nghiep-xanh-d1374684.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/30/184438img20250321231619-1743132037808134019606-1840.jpg",
            "sapo": "Đánh giá cao ý nghĩa của Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói năm 2025, Phó Chủ tịch Hội Nông dân tỉnh Thái Nguyên Nguyễn Đình Điệp nhấn mạnh vai trò của chuyển đổi xanh trong bối cảnh thiên tai ngày càng diễn biến phức tạp. Diễn đàn do Báo NTNN/Dân Việt được giao tổ chức, thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1374384",
            "title": "Hơn 1.000 ý kiến “nóng” gửi Bộ Nông nghiệp và Môi trường, Hội Nông dân Việt Nam trước Diễn đàn lắng nghe nông dân nói",
            "url": "https://danviet.vn/hon-500-y-kien-nong-gui-bo-nong-nghiep-va-moi-truong-hoi-nong-dan-viet-nam-truoc-them-dien-dan-lang-nghe-nong-dan-noi-d1374384.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/29/dien-dan-lang-nghe-nong-dan-noi-1715.jpg",
            "sapo": "Trước thềm Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường lắng nghe nông dân nói năm 2025 đã có hơn 1.000 ý kiến, đề xuất, kiến nghị gửi tới Bộ Nông nghiệp và Môi trường, Hội Nông dân Việt Nam. Các câu hỏi của nông dân tập trung vào nhiều vấn đề thời sự, cấp thiết đang đặt ra với nông nghiệp, nông dân, nông thôn hiện nay. Báo Nông thôn Ngày nay/điện tử Dân Việt được giao trực tiếp tổ chức thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1374307",
            "title": "Diễn đàn Lắng nghe nông dân nói: Nông dân Việt Nam xuất sắc đề xuất thay đổi cách thức hỗ trợ nông dân sau bão, lũ",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-nong-dan-viet-nam-xuat-sac-de-xuat-thay-doi-cach-thuc-ho-tro-nong-dan-sau-bao-lu-d1374307.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/10/29/img_9112-1436.jpg",
            "sapo": "Trước thềm Diễn đàn Chủ  tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói, chị Bùi Thị Hiếu, Giám đốc HTX Sản xuất và tiêu thụ nông sản sạch Viên Sơn, người tiên phong làm giàu từ rau sạch tại phường Sơn Tây (TP Hà Nội) đã có nhiều kiến nghị về cách thức hỗ trợ nông dân sản xuất sau bão, lũ. Diễn đàn do Báo NTNN/Dân Việt được giao tổ chức, thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1374192",
            "title": "Diễn đàn Lắng nghe nông dân nói: Nông dân muốn tìm cơ hội trồng lúa ở Cuba sau gợi ý của Tổng Bí thư Tô Lâm",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-nong-dan-muon-tim-co-hoi-trong-lua-o-cuba-sau-goi-y-cua-tong-bi-thu-to-lam-d1374192.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/29/091454trong-lua-o-cuba-0907.jpg",
            "sapo": "Ngày 2/11, Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói sẽ chính thức diễn ra tại Hà Nội. Trước thềm diễn đàn, nhiều vấn đề \"nóng\" đã được các nông dân, hợp tác xã, doanh nghiệp gửi đến hai đồng chí lãnh đạo. Diễn đàn do Báo NTNN/Dân Việt được giao tổ chức, thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1373736",
            "title": "Diễn đàn Lắng nghe nông dân nói: Bộ NN&MT, Hội NDVN hành động thế nào để nâng cao chất lượng nông sản?",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-bo-nnmt-hoi-ndvn-hanh-dong-the-nao-de-nang-cao-chat-luong-nong-san-d1373736.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/10/27/6-ps-1255-170020.jpg",
            "sapo": "Nhiều nông dân vẫn đang tư duy dùng thuốc bảo vệ thực vật chứ không bảo vệ thực vật, nên mục tiêu kiểm soát an toàn vệ sinh thực phẩm là vấn đề rất cần được nhìn nhận lại. Bộ Nông nghiệp và Môi trường; Hội Nông dân Việt Nam sẽ hành động như thế nào để nâng cao chất lượng nông sản phục vụ cho người tiêu dùng trong nước và xuất khẩu?. Diễn đàn do Báo NTNN/Dân Việt được giao tổ chức, thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1373668",
            "title": " Diễn đàn Chủ tịch Hội Nông dân Việt Nam-Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói diễn ra ngày 2/11",
            "url": "https://danviet.vn/dien-dan-chu-tich-hoi-nong-dan-viet-nam-bo-truong-bo-nong-nghiep-va-moi-truong-lang-nghe-nong-dan-noi-dien-ra-ngay-2-11-d1373668.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/10/27/z72_6798--tran-duc-thang-1631.jpg",
            "sapo": "Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và Môi trường lắng nghe nông dân nói năm 2025 sẽ được tổ chức vào ngày 2/11, tại Trung tâm Hội nghị 37 Hùng Vương, Thủ đô Hà Nội. Báo Nông thôn Ngày nay/điện tử Dân Việt được lãnh đạo hai đơn vị giao trực tiếp tổ chức thực hiện.",
            "location": "",
            "date": ""
          },
          {
            "id": "1373395",
            "title": "Hàng trăm câu hỏi gửi về diễn đàn Lắng nghe nông dân nói: \"Nóng\" vấn đề cơ chế, chính sách, phát triển nông nghiệp xanh",
            "url": "https://danviet.vn/hang-tram-cau-hoi-gui-ve-dien-dan-lang-nghe-nong-dan-noi-nong-van-de-co-che-chinh-sach-phat-trien-nong-nghiep-xanh-d1373395.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/10/26/thiet-ke-chua-co-ten-1236.png",
            "sapo": "Tính đến ngày 27/10, đã có hàng trăm câu hỏi, ý kiến từ các nông dân, hợp tác xã (HTX), chuyên gia, doanh nghiệp, nhà khoa học gửi về Diễn đàn Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói năm 2025. Nhiều ý kiến đã đề cập đến các vấn đề “nóng” trong khơi thông cơ chế, chính sách, phát triển nông nghiệp xanh…",
            "location": "",
            "date": ""
          },
          {
            "id": "1373156",
            "title": "Chân dung và sự nghiệp của ông Trần Đức Thắng - tân Bộ trưởng Bộ Nông nghiệp và Môi trường",
            "url": "https://danviet.vn/chan-dung-va-su-nghiep-cua-ong-tran-duc-thang--tan-bo-truong-bo-nong-nghiep-va-moi-truong-d1373156.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/10/25/cover-o-thang-1119.jpg",
            "sapo": "Ông Trần Đức Thắng - Quyền Bộ trưởng Bộ Nông nghiệp và Môi trường đã được Quốc hội phê chuẩn bổ nhiệm giữ chức Bộ trưởng Bộ Nông nghiệp và Môi trường.",
            "location": "",
            "date": ""
          },
          {
            "id": "1373363",
            "title": "Trước thềm Diễn đàn lắng nghe nông dân: Nông dân, HTX kiến nghị nhiều vấn đề \"nóng\" liên quan đến biến đổi khí hậu",
            "url": "https://danviet.vn/truoc-them-dien-dan-lang-nghe-nong-dan-nong-dan-htx-kien-nghi-nhieu-van-de-nong-lien-quan-den-bien-doi-khi-hau-d1373363.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/10/26/img20241003154903-1012.jpg",
            "sapo": "Trước thềm Diễn đàn Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói năm 2025, nhiều nông dân và giám đốc hợp tác xã (HTX) đã gửi gắm tâm tư, ý kiến kiến nghị về những vấn đề \"nóng\" như nâng cấp, cải thiện hạ tầng nông nghiệp, tháo gỡ khó khăn về đất đai, hỗ trợ người dân chuyển đổi cơ cấu cây trồng thích ứng với biến đổi khí hậu.",
            "location": "",
            "date": ""
          },
          {
            "id": "1369589",
            "title": "Nông dân xuất sắc Vàng A Là đến từ Điện Biên kỳ vọng vào Hội Nông dân trong thời kỳ mới",
            "url": "https://danviet.vn/nong-dan-xuat-sac-vang-a-la-den-tu-dien-bien-ky-vong-vao-hoi-nong-dan-trong-thoi-ky-moi-d1369589.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/11/555639858_4265082880479690_1407943636270420909_n-1709.jpg",
            "sapo": "Anh Vàng A Là, một nông dân Việt Nam xuất sắc năm 2025 đến từ bản Nậm Chim 1, xã Si Pa Phìn, tỉnh Điện Biên kỳ vọng “Hội Nông dân trong thời kỳ mới không chỉ là người đại diện quyền lợi mà còn là người định hướng, kết nối, dẫn dắt nông dân bước vào nền nông nghiệp hiện đại...”.",
            "location": "",
            "date": ""
          },
          {
            "id": "1373044",
            "title": "Nông dân Việt Nam xuất sắc năm 2025 đề xuất chính sách đặc biệt mở vùng sản xuất lúa tại Cuba, Triều Tiên",
            "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-nam-2025-de-xuat-chinh-sach-dac-biet-mo-vung-san-xuat-lua-tai-cuba-trieu-tien-d1373044.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/10/24/nong-dan-viet-nam-xuat-sac-1-2158.jpg",
            "sapo": "Trước thềm Diễn đàn lắng nghe nông dân nói, anh Phạm Văn Hướng, Nông dân Việt Nam xuất sắc năm  2025, đồng thời là  Chủ tịch CLB Đại điền tỉnh Ninh Bình kiến nghị Bộ Nông nghiệp và Môi trường có chính sách đặc biệt hỗ trợ, tổ chức các đoàn đưa nông dân xuất sắc sang Cuba hoặc Triều Tiên để tham quan, học hỏi và tìm hiểu cơ hội hợp tác, mở vùng trồng lúa chất lượng cao.",
            "location": "",
            "date": ""
          },
          {
            "id": "1372906",
            "title": "Nhà khoa học của nhà nông năm 2025 trăn trở khi thiếu khái niệm \"nông nghiệp công nghệ cao\" trong dự thảo luật mới",
            "url": "https://danviet.vn/nha-khoa-hoc-cua-nha-nong-nam-2025-tran-tro-khi-thieu-khai-niem-nong-nghiep-cong-nghe-cao-trong-du-thao-luat-moi-d1372906.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/24/135925nong-nghiep-cong-nghe-coa-1357.jpg",
            "sapo": "TS.Phạm Đình Dũng, Trưởng ban quản lý Khu Nông nghiệp công nghiệp cao TP.HCM - Nhà khoa học của nhà nông năm 2025 kiến nghị trong quá trình sửa đổi Luật Công nghệ cao, cơ quan soạn thảo cần lắng nghe ý kiến từ thực tiễn địa phương, đảm bảo tính kế thừa và phát triển bền vững cho hệ thống khu nông nghiệp công nghệ cao đã và đang hoạt động trên cả nước.",
            "location": "",
            "date": ""
          },
          {
            "id": "1372475",
            "title": "Việt Nam - Phần Lan mở rộng hợp tác nông nghiệp, lâm nghiệp và môi trường",
            "url": "https://danviet.vn/viet-nam--phan-lan-mo-rong-hop-tac-nong-nghiep-lam-nghiep-va-moi-truong-d1372475.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/23/053218phan-lan-2150.jpg",
            "sapo": "Trong khuôn khổ chuyến thăm chính thức Phần Lan của Tổng Bí thư Tô Lâm và Phu nhân cùng Đoàn đại biểu cấp cao Việt Nam, Bộ Nông nghiệp và Môi trường Việt Nam và Bộ Môi trường nước Cộng hòa Phần Lan đã ký kết văn kiện hợp tác song phương trong lĩnh vực môi trường, đa dạng sinh học và biến đổi khí hậu.",
            "location": "",
            "date": ""
          },
          {
            "id": "1369836",
            "title": "Quyền Bộ trưởng Bộ Nông nghiệp và Môi trường nói về 4 đột phá chiến lược để phát triển nông nghiệp xanh",
            "url": "https://danviet.vn/quyen-bo-truong-bo-nong-nghiep-va-moi-truong-noi-ve-4-dot-pha-chien-luoc-de-phat-trien-nong-nghiep-xanh-d1369836.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/12/220008tran-duc-thang-2159.jpg",
            "sapo": "Theo Quyền Bộ trưởng Bộ Nông nghiệp và Môi trường Trần Đức Thắng, nhiệm kỳ 2025-2030, toàn ngành xác định đây là giai đoạn quan trọng để ngành Nông nghiệp và Môi trường vững vàng bước vào kỷ nguyên vươn mình, thịnh vượng, giàu mạnh của dân tộc, đóng góp vào sự phát triển bền vững của đất nước, hướng tới tầm nhìn đến năm 2045.",
            "location": "",
            "date": ""
          },
          {
            "id": "1372369",
            "title": "Trước thềm Diễn đàn lắng nghe nông dân: Nông dân kiến nghị khơi thông đất đai, cơ chế đột phá cho chuyển đổi số",
            "url": "https://danviet.vn/truoc-them-dien-dan-lang-nghe-nong-dan-nong-dan-kien-nghi-khoi-thong-dat-dai-co-che-dot-pha-cho-chuyen-doi-so-d1372369.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/22/do-thi-thuy-ha-1514.jpg",
            "sapo": "Trước thềm Diễn đàn Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Môi trường Lắng nghe nông dân nói năm 2025, nhiều Nông dân Việt Nam xuất sắc và Giám đốc Hợp tác xã (HTX) đã gửi gắm tâm tư, ý kiến kiến nghị về những vấn đề \"nóng\" như đất đai, ứng dụng công nghệ sinh học và hạ tầng sau thu hoạch.",
            "location": "",
            "date": ""
          },
          {
            "id": "1349311",
            "title": "Cập nhật bão Wipha: Phó Thủ tướng Trần Hồng Hà có mặt tại Hải Phòng, Quyền Bộ trưởng Trần Đức Thắng đến Ninh Bình chỉ đạo",
            "url": "https://danviet.vn/cac-tinh-mien-bac-huy-dong-tong-luc-chong-bao-so-3-wipha-d1349311.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/07/21/bao1-1652.jpg",
            "sapo": "Bão số 3 WIPHA chỉ còn cách tỉnh Quảng Ninh khoảng 140km, cách Hải Phòng 280km. Hiện, các tỉnh miền Bắc đang huy động tổng lực chống bão số 3 WIPHA.",
            "location": "",
            "date": ""
          },
          {
            "id": "1349393",
            "title": " Vừa nhậm chức, quyền Bộ trưởng Bộ Nông nghiệp và Môi trường Trần Đức Thắng đã đi chỉ đạo ứng phó bão Wipha",
            "url": "https://danviet.vn/vua-nhan-chuc-quyen-bo-truong-bo-nnmt-tran-duc-thang-da-di-chi-dao-ung-pho-bao-wipha-d1349393.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/07/21/z6826968998048_af2a88efadc43a962d839139d9c332eb-1726.jpg",
            "sapo": "Trong chuyến công tác kiểm tra ứng phó bão số 3 (Wipha) tại Ninh Bình, quyền Bộ trưởng Bộ Nông nghiệp và Môi trường Trần Đức Thắng đánh giá cao tinh thần chủ động của tỉnh, đồng thời đưa ra những chỉ đạo quan trọng nhằm đảm bảo an toàn tối đa cho người dân.",
            "location": "",
            "date": ""
          },
          {
            "id": "1357383",
            "title": "Quyền Bộ trưởng Trần Đức Thắng gợi mở hướng nhân rộng giống nho mới cho thu nhập 1 triệu USD/năm ",
            "url": "https://danviet.vn/quyen-bo-truong-tran-duc-thang-goi-mo-huong-nhan-rong-giong-nho-moi-cho-thu-nhap-1-trieu-usd-nam-d1357383.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/news/2025/08/22/z6933595071079_dad3cee0baa6c87b4fcb7a084489744f-1616.jpg",
            "sapo": "Chiều 22/8, tại buổi làm việc với Cục Trồng trọt và Bảo vệ thực vật , Quyền Bộ trưởng Bộ Nông nghiệp và Môi trường Trần Đức Thắng cho biết, vừa qua, ông đi tham quan mô hình trồng nho ở Hàn Quốc cho thu nhập hàng triệu USD/ha/năm và tại Việt Nam bước đầu các nhà khoa học đã nhân rộng được giống này, nên cần có hướng để phát triển tới đây.",
            "location": "",
            "date": ""
          },
          {
            "id": "1370321",
            "title": "Quyền Bộ trưởng Bộ Nông nghiệp và Môi trường Trần Đức Thắng nêu lý do cần quản lý đặc biệt đất hiếm",
            "url": "https://danviet.vn/quyen-bo-truong-bo-nong-nghiep-va-moi-truong-tran-duc-thang-neu-ly-do-can-quan-ly-dac-biet-dat-hiem-d1370321.html",
            "img": "https://t.ex-cdn.com/danviet.vn/608w/files/content/2025/10/14/154021tran-duc-thang-2-1535.jpg",
            "sapo": "Quyền Bộ trưởng Bộ Nông nghiệp và Môi trường Trần Đức Thắng cho biết, đất hiếm hiện nay là một loại hàng hóa đặc biệt, tạo ra ảnh hưởng lớn đến quốc phòng, an ninh, ngoại giao trên toàn thế giới dẫn đến yêu cầu phải có những cơ chế quản lý chặt chẽ đối với các hoạt động có liên quan đối với loại hình khoáng sản này.",
            "location": "",
            "date": ""
          }
        ],
        "articleCount": 54
      }
    ]
  },
  {
    "year": 2024,
    "label": "2024",
    "programs": [
      {
        "id": "2901",
        "kicker": "Chuỗi chương trình Tự hào Nông dân Việt Nam 2024",
        "title": "Diễn đàn Nông dân quốc gia lần thứ IX – 2024",
        "date": "",
        "location": "Hà Nội",
        "cover": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/10/1-1728438222955913790348-17285273814141258792892.jpg",
        "summary": "Trung ương Hội Nông dân Việt Nam phối hợp Bộ Nông nghiệp và Phát triển nông thôn tổ chức Diễn đàn Nông dân Quốc gia lần thứ IX với chủ đề “Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ NN&PTNT lắng nghe nông dân nói”. Nhiều kiến nghị của nông dân xuất sắc, hợp tác xã được hai đồng chủ trì trả lời trực tiếp.",
        "stats": [
          {
            "value": 100,
            "suffix": "+",
            "label": "Bài báo tư liệu"
          },
          {
            "value": 300,
            "suffix": "+",
            "label": "Đại biểu dự Diễn đàn"
          }
        ],
        "link": "https://danviet.vn/dien-dan-nong-dan-quoc-gia-lan-thu-ix-2024-channel2901/",
        "linkLabel": "Xem thêm trên Dân Việt",
        "api": "https://danviet.vn/api/chu-de/2901",
        "articles": [
          {
            "id": "1191022",
            "title": "Sau Diễn đàn Lắng nghe nông dân nói: Trà Ngọc Thúy cấp đông, vịt bầu Minh Hương-khi nông dân tự làm thương hiệu (Bài 3)",
            "url": "https://danviet.vn/sau-dien-dan-lang-nghe-nong-dan-noi-tra-ngoc-thuy-cap-dong-vit-bau-minh-huong-khi-nong-dan-tu-lam-thuong-hieu-bai-3-20241023070734721-d1191022.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/22/img2221-17277913066041847452421-1729639178597336085553-138-39-1287-1878-crop-17296402853051748888926.jpeg",
            "sapo": "63 Nông dân Việt Nam xuất sắc và 63 hợp tác xã tiêu biểu toàn quốc năm 2024 không chỉ được biết đến với ý chí, nghị lực vươn lên trong lao động, sản xuất mà trong mỗi họ đều đang là \"sứ giả\" lan tỏa những sản phẩm đặc sản của địa phương mình, trong số đó có chè, vịt suối Tuyên Quang, trà hoa cúc chi Hưng Yên...",
            "location": "",
            "date": ""
          },
          {
            "id": "61672",
            "title": "Bộ trưởng Lê Minh Hoan: Nông dân cứ thoải mái nhắn tin cho tôi và Chủ tịch Lương Quốc Đoàn",
            "url": "https://danviet.vn/bo-truong-le-minh-hoan-nong-dan-cu-thoai-mai-nhan-tin-cho-toi-va-chu-tich-luong-quoc-doan-20241014092531707-d61672.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/dien-dan-17288714087481573431842-0-0-1600-2560-crop-17288714154351347804802.jpg",
            "sapo": "Chủ trì, điều hành Diễn đàn Nông dân Quốc gia lần thứ IX, trước khi trả lời các câu hỏi của đại biểu, Bộ trưởng Bộ Nông nghiệp và PTNT Lê Minh Hoan nhắn nhủ: Bà con cứ thoải mái nhắn tin cho tôi cũng như đồng chí Chủ tịch Hội Nông dân VN Lương Quốc Đoàn.",
            "location": "",
            "date": ""
          },
          {
            "id": "1190617",
            "title": "Sau Diễn đàn Lắng nghe nông dân nói: HTX ở Lào Cai thu mua nghìn tấn nông sản, bán đi khắp Âu, Mỹ (Bài 4)",
            "url": "https://danviet.vn/sau-dien-dan-lang-nghe-nong-dan-noi-htx-o-lao-cai-thu-mua-nghin-tan-nong-san-ban-di-khap-au-my-bai-3-20241020183534387-d1190617.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/20/img-1602-17294242723221288305137-83-0-1333-2000-crop-17294242808681737891053.jpg",
            "sapo": "Sau gần 10 năm thành lập và đi vào hoạt động, đến nay, HTX Thịnh Phong, thôn Na Mạ 1, xã Bản Lầu, huyện Mường Khương, tỉnh Lào Cai đã liên kết hỗ trợ người dân phát triển sản xuất và trực tiếp bao tiêu sản phẩm chè, dứa, chuối... cho bà con nông dân. HTX Thịnh Phong là 1 trong 63 HTX tiêu biểu toàn quốc.",
            "location": "",
            "date": ""
          },
          {
            "id": "1190245",
            "title": "Sau Diễn đàn Lắng nghe nông dân nói: Mỗi cái tên là một hành trình cảm xúc (Bài 2)",
            "url": "https://danviet.vn/sau-dien-dan-lang-nghe-nong-dan-noi-moi-cai-ten-la-mot-hanh-trinh-cam-xuc-bai-2-20241018132629946-d1190245.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/18/anh-dai-dien-1729232595033943267453-0-0-1966-3145-crop-1729232614234228991772.jpg",
            "sapo": "Tại Chương trình Tự hào Nông dân Việt Nam năm 2024, 63 hợp tác xã (HTX) tiêu biểu được vinh danh, mang theo những cái tên sản phẩm nông sản độc đáo, chứa đựng cả lịch sử, văn hóa và khát vọng của con người. Đằng sau mỗi cái tên là một câu chuyện, một hành trình và cả niềm tự hào sâu sắc.",
            "location": "",
            "date": ""
          },
          {
            "id": "801246",
            "title": "Sau Diễn đàn Lắng nghe nông dân nói: Chuyện kể của nữ tỷ phú với thương hiệu \"Banikha\" (Bài 1)",
            "url": "https://danviet.vn/sau-dien-dan-lang-nghe-nong-dan-noi-chuyen-ke-cua-nu-ty-phu-voi-thuong-hieu-banikha-bai-1-202410202346372-d801246.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/20/nong-dan-viet-nam-xuat-sac-17294422075371218546953-24-0-854-1328-crop-17294427172041506664347.jpg",
            "sapo": "Tại Diễn đàn Nông dân quốc gia năm 2024 với chủ đề: “Chủ tịch Hội Nông dân Việt Nam- Bộ trưởng Bộ Nông nghiệp và PTNT lắng nghe nông dân nói”, gian hàng trưng bày giới thiệu sản phẩm của nữ tỷ phú nông dân Việt Nam xuất sắc Nguyễn Thị Hồng đã gây ấn tượng mạnh với thương hiệu \"Banikha\".",
            "location": "",
            "date": ""
          },
          {
            "id": "1190023",
            "title": "Nông dân kiến nghị về điện gió, dông sét gây chết cá, Bí thư Tỉnh ủy Quảng Bình: Sẽ tìm hiểu, hỗ trợ nông dân",
            "url": "https://danviet.vn/nong-dan-nuoi-ca-loc-tren-cat-dieu-dung-vi-giong-set-danh-xuong-khu-vuc-dien-gio-la-ca-chet-20241017093646404-d1190023.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/17/z37889061093188194fc66043157830112653a1a00a5b5-16654061416571543505091-0-0-1125-1800-crop-17291323557381015700667.jpg",
            "sapo": "3 ngày sau Diễn đàn Nông dân Quốc gia năm 2024 ngày 14/10, được chia sẻ về những vấn đề của bản thân và cả ngành nông nghiệp, Nông dân Việt Nam xuất sắc Trần Kim Phi đến từ Quảng Bình nói, rất yên tâm khi được Chủ tịch Hội Nông dân Việt Nam, Bộ trưởng Bộ NNPTNT lắng nghe và sẽ có kiến nghị để tháo gỡ khó khăn.",
            "location": "",
            "date": ""
          },
          {
            "id": "1190014",
            "title": "Đôi điều lắng đọng từ một Diễn đàn",
            "url": "https://danviet.vn/dien-dan-nong-dan-quoc-gia-2024-doi-dieu-lang-dong-20241017090136502-d1190014.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/17/le-minh-hoan-2024-dv-1729130906837107255537-0-0-377-603-crop-17291309157771200741992.jpg",
            "sapo": "Diễn đàn\" Lắng nghe nông dân nói\" nhân kỷ niệm Ngày thành lập Hội Nông dân Việt Nam (14/10/1930 - 14/10/2024) đọng lại nhiều cảm xúc. Nhìn những gương mặt rắn rỏi, những ánh mắt đầy niềm tin của đại biểu nông dân, càng cảm xúc hai tiếng \"bà con\" thân thương.",
            "location": "",
            "date": ""
          },
          {
            "id": "1189532",
            "title": "Diễn đàn Nông dân Quốc gia 2024: Những câu trả lời xác đáng của Chủ tịch Hội NDVN và Bộ trưởng Bộ NN&PTNT",
            "url": "https://danviet.vn/dien-dan-nong-dan-quoc-gia-2024-nhung-cau-tra-loi-xac-dang-cua-chu-tich-hoi-ndvn-va-bo-truong-bo-nnptnt-20241014164243715-d1189532.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/sequence-03-00-03-15-05-still002-1728898669138929030144-0-102-1080-1830-crop-17288987864782021997449.jpg",
            "sapo": "Diễn đàn Nông dân Quốc gia 2024 với chủ đề “Chủ tịch Hội NDVN – Bộ trưởng Bộ NN&PTNT Lắng nghe nông dân nói” diễn ra vào sáng nay 14/10 tại Hà Nội. Với những câu trả lời xác đáng từ hai đồng chủ trì, diễn đàn đã đem đến những cơ hội mới và hướng đi mới trong sản xuất nông nghiệp cho người nông dân.",
            "location": "",
            "date": ""
          },
          {
            "id": "846147",
            "title": "Video: Nông dân kỳ vọng nhiều vướng mắc sẽ được tháo gỡ qua Diễn đàn Nông dân Quốc gia 2024",
            "url": "https://danviet.vn/video-nong-dan-ky-vong-nhieu-vuong-mac-se-duoc-thao-go-qua-dien-dan-nong-dan-quoc-gia-2024-2024101411270293-d846147.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/sequence-02-00-44-24-07-still023-1728880012486683811393-0-23-1080-1751-crop-1728880015428742251838.jpg",
            "sapo": "Sáng nay (14/10), Diễn đàn Nông dân Quốc gia lần thứ IX năm 2024 với chủ đề: \"Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ NN&PTNT Lắng nghe nông dân nói\" đã chính thức diễn ra tại Hà Nội. Tham gia diễn đàn, nhiều nông dân kỳ vọng các vướng mắc, khó khăn sẽ được lãnh đạo ngành giải đáp và tháo gỡ.",
            "location": "",
            "date": ""
          },
          {
            "id": "61671",
            "title": "Video: Diễn đàn Nông dân Quốc gia 2024 - Lắng nghe nông dân nói",
            "url": "https://danviet.vn/video-dien-dan-nong-dan-quoc-gia-2024-lang-nghe-nong-dan-noi-20241014082315161-d61671.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/sequence-02-00-04-33-13-still022-1728868799473583585453-0-20-1080-1748-crop-1728868803346377139381.jpg",
            "sapo": "Bước sang năm tổ chức thứ IX, Diễn đàn Nông dân Quốc gia 2024 có một chủ đề đặc biệt: \"Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ NN&PTNT Lắng nghe nông dân nói\", là nơi để các nông dân, HTX, doanh nghiệp nông nghiệp bày tỏ tâm tư, nguyện vọng.",
            "location": "",
            "date": ""
          },
          {
            "id": "61674",
            "title": "Diễn đàn Nông dân Quốc gia năm 2024: Chiếc khăn rằn và thông điệp của Bộ trưởng",
            "url": "https://danviet.vn/dien-dan-nong-dan-quoc-gia-lan-thu-ix-chiec-khan-ran-va-thong-diep-cua-bo-truong-20241014104822964-d61674.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/chu-tich-bo-truong-17288761433521392971823-0-0-1012-1620-crop-1728876151389369734878.jpg",
            "sapo": "Xuất hiện tại Diễn đàn Nông dân Quốc gia lần thứ IX với chủ đề \"Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Nông nghiệp và PTNT Lắng nghe nông dân nói\" 2 vị lãnh đạo chủ trì đều khoác chiếc khăn rằn, tạo ấn tượng và cảm giác gần gũi, thân quen với số đông các đại biểu tham gia Diễn đàn.",
            "location": "",
            "date": ""
          },
          {
            "id": "1189429",
            "title": "[TRỰC TIẾP] Diễn đàn Nông dân Quốc gia lần thứ IX: Lắng nghe nông dân nói",
            "url": "https://danviet.vn/truc-tiep-dien-dan-nong-dan-quoc-gia-lan-thu-ix-lang-nghe-nong-dan-noi-20241014072247625-d1189429.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/z59274189236744d992591822304f4444011583a08715a-1728871607112304119956-106-0-1706-2560-crop-1728871619546891435690.jpg",
            "sapo": "Sáng nay, 14/10, Trung ương Hội Nông dân Việt Nam – Bộ Nông nghiệp và Phát triển nông thôn phối hợp tổ chức Diễn đàn Nông dân Quốc gia lần thứ IX năm 2024 với chủ đề: Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Phát triển nông thôn lắng nghe nông dân nói.",
            "location": "",
            "date": ""
          },
          {
            "id": "401444",
            "title": "Bộ trưởng QP Mỹ công du châu Á giữa lúc Biển Đông căng thẳng",
            "url": "https://danviet.vn/bo-truong-qp-my-cong-du-chau-a-giua-luc-bien-dong-cang-thang-7777637028-d401444.html",
            "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2015/images/2015-10-30/1446188090-cover--copy-.jpg",
            "sapo": "Bộ trưởng Quốc phòng Mỹ Ashton Carter sẽ công du châu Á chỉ vài ngày sau khi căng thẳng tại Biển Đông leo thang khi Mỹ cử tàu chiến tới khu vực Trung Quốc xây đảo nhân tạo phi pháp.",
            "location": "",
            "date": ""
          },
          {
            "id": "410461",
            "title": "Trung Quốc xây trạm xăng trái phép ở Hoàng Sa",
            "url": "https://danviet.vn/trung-quoc-xay-tram-xang-trai-phep-o-hoang-sa-7777647734-d410461.html",
            "img": "https://danviet.ex-cdn.com/files/f1/upload/4-2015/images/2015-12-14/1450087922-ejn1438270750.jpg",
            "sapo": "Tập đoàn năng lượng Sinopec của Trung Quốc đang ngang nhiên xây dựng một trạm xăng trái phép trên đảo Phú Lâm thuộc quần đảo Hoàng Sa của Việt Nam.",
            "location": "",
            "date": ""
          }
        ],
        "articleCount": 14
      },
      {
        "id": "2911",
        "kicker": "T.Ư Hội Nông dân Việt Nam – Bộ Tài nguyên và Môi trường",
        "title": "Chủ tịch Hội NDVN – Bộ trưởng TNMT lắng nghe nông dân nói",
        "date": "",
        "location": "Trung tâm Hội nghị 37 Hùng Vương, Hà Nội",
        "cover": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/20/800-x-500-px-dv-17320996417751324704712.jpg",
        "summary": "Diễn đàn với chủ đề “Khơi thông nguồn lực đất đai, hướng tới mục tiêu NetZero, bảo vệ môi trường nông thôn”. Nhiều kiến nghị về Luật Đất đai 2024 của nông dân, hợp tác xã, chuyên gia, nhà khoa học đã được giải đáp, tháo gỡ tại chỗ.",
        "stats": [
          {
            "value": 100,
            "suffix": "+",
            "label": "Bài báo tư liệu"
          },
          {
            "value": 300,
            "suffix": "+",
            "label": "Đại biểu dự Diễn đàn"
          }
        ],
        "link": "https://danviet.vn/chu-tich-hoi-ndvn-bo-truong-tnmt-lang-nghe-nong-dan-noi-channel2911/",
        "linkLabel": "Xem thêm trên Dân Việt",
        "api": "https://danviet.vn/api/chu-de/2911",
        "articles": [
          {
            "id": "1194652",
            "title": "Trồng lúa giảm phát thải theo Đề án 1 triệu ha lúa chất lượng cao của Bộ NNPTNT, nông dân được thưởng tiền",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-san-xuat-xanh-xu-huong-tat-yeu-tien-den-net-zero-20241112154117891-d1194652.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/12/anhbaiphu-1730708800987518424084-17314006123771819911279-0-0-777-1244-crop-17314007349121524830232.jpg",
            "sapo": "Việc phát triển sản xuất xanh, tạo ra sản phẩm xanh không chỉ đơn thuần là nghĩa vụ môi trường của mỗi tác nhân tham gia sản xuất, mà còn là cơ hội \"vàng\" để các doanh nghiệp, HTX tăng cường tính nhận diện thương hiệu, tăng thu nhập một cách bền vững và tiến đến NET ZERO vào năm 2050 theo cam kết của Chính phủ tại COP26.",
            "location": "",
            "date": ""
          },
          {
            "id": "1196365",
            "title": "Một thay đổi nhỏ trong quy trình canh tác lúa cũng có thể tạo nên cuộc cách mạng",
            "url": "https://danviet.vn/vien-truong-vien-chien-luoc-chinh-sach-tai-nguyen-moi-truong-bo-tnmt-nong-dan-can-duoc-tiep-can-voi-nguon-tai-chinh-xanh-20241122124244726-d1196365.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/22/pgsts-nguyen-dinh-tho-17322539806721551537008-82-0-1332-2000-crop-17322539891951222256209.png",
            "sapo": "Theo Thứ trưởng Bộ Nông nghiệp và PTNT Trần Thanh Nam, liên kết sản xuất sẽ tạo ra những thay đổi lớn cho đồng ruộng, cho chính bà con nông dân.",
            "location": "",
            "date": ""
          },
          {
            "id": "1201906",
            "title": "Tháo gỡ vướng mắc, mở ra cơ hội",
            "url": "https://danviet.vn/thao-go-vuong-mac-mo-ra-co-hoi-20241223160947451-d1201906.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/23/dien-dan-bt-lang-nghe-nong-dan-noi-1734944713347224014365.jpg",
            "sapo": "Việc tổ chức thành công \"Diễn đàn Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Tài nguyên và Môi trường Lắng nghe nông dân nói\" đã mang lại sự tin tưởng, phấn khởi, tạo động lực để phát huy vai trò chủ thể, trung tâm của người nông dân trong phát triển nông nghiệp, kinh tế nông thôn, xây dựng nông thôn mới trong thời gian tới.",
            "location": "",
            "date": ""
          },
          {
            "id": "1196399",
            "title": "Phó Chủ tịch TƯ Hội NDVN Bùi Thị Thơm: Diễn đàn Lắng nghe nông dân nói là hoạt động quan trọng của Hội Nông dân",
            "url": "https://danviet.vn/ba-bui-thi-thom-pho-chu-tich-hoi-ndvn-noi-ve-y-nghia-cua-dien-dan-lang-nghe-nong-dan-noi-20241122150841131-d1196399.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/22/tham-mo-hinh-6-17223191282832094318286-17322620872412009612122-0-83-1441-2389-crop-17322627773831348965581.jpg",
            "sapo": "Diễn đàn \"Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói\" sẽ diễn ra vào ngày 24/11/2024 tại Trung tâm Hội nghị 37 Hùng Vương, Ba Đình, Hà Nội. Diễn đàn có chủ đề: \"Khơi thông nguồn lực đất đai, hướng tới mục tiêu NetZero, bảo vệ môi trường nông nghiệp, nông thôn\".",
            "location": "",
            "date": ""
          },
          {
            "id": "1196981",
            "title": "Nông dân ĐBSCL tin tưởng giải pháp của Bộ trưởng Đỗ Đức Duy sẽ ngăn chặn được nạn khai thác cát trái phép",
            "url": "https://danviet.vn/nong-dan-dbscl-tin-tuong-giai-phap-cua-bo-truong-do-duc-duy-se-ngan-chan-duoc-nan-khai-thac-cat-trai-phep-20241126085803941-d1196981.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/26/h3-1646280727082-17325855465812035793358-134-0-856-1155-crop-173258557158260974358.jpg",
            "sapo": "Trao đổi với PV Báo điện tử Dân Việt, ông Nguyễn Văn Dẫn ở quận Thốt Nốt (TP.Cần Thơ) cho rằng: Bộ trưởng Bộ TNMT trả lời rất sát vấn đề và đưa ra được các giải pháp rất cụ thể, căn cơ. Chúng tôi rất mong, các giải pháp của đại biểu đưa ra sẽ ngăn chặn được nạn khai thác cát bừa bãi, trái phép ở vùng ĐBSCL.",
            "location": "",
            "date": ""
          },
          {
            "id": "1196831",
            "title": "Dân Thủ đô thiệt hại hàng trăm tỷ đồng/năm bởi điệp khúc ngập lụt, Bộ trưởng Đỗ Đức Duy đưa ra giải pháp gì?",
            "url": "https://danviet.vn/dan-thu-do-thiet-hai-hang-tram-ty-dong-nam-boi-diep-khuc-ngap-lut-bo-truong-do-duc-duy-dua-ra-giai-phap-gi-20241125111245061-d1196831.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/25/chu-tich-bo-truong-2-17324187577651842280030-1732507297037271725198-14-0-420-650-crop-17325077844491993754261.jpg",
            "sapo": "Chủ tịch Hội Nông dân huyện Chương Mỹ (Hà Nội) Nguyễn Văn Lợi kiến nghị Bộ Tài nguyên và Môi trường và các Bộ, ngành, cơ quan Trung ương đề xuất với Chính phủ, Thủ tướng Chính phủ quan tâm, có phương án hạn chế lũ rừng ngang từ Hòa Bình đổ về... để giảm thiểu ngập lụt cho bà con ở địa phương.",
            "location": "",
            "date": ""
          },
          {
            "id": "1196839",
            "title": "Diễn đàn \"Lắng nghe nông dân nói\": Bộ trưởng Đỗ Đức Duy đã \"kiến tạo, đồng hành và hỗ trợ nông dân\"",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-bo-truong-do-duc-duy-da-kien-tao-dong-hanh-va-ho-tro-nong-dan-20241125114757074-d1196839.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/25/z6063509849654-fd62c47bde3577004ee6c974d4fc5110-17325058691231776780528-77-0-1327-2000-crop-1732505879809365598655.jpg",
            "sapo": "Sau Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói, đã cho thấy rằng người nông dân đã ngày càng tự tin và thẳng thắn hơn. Còn về phía Bộ trưởng Bộ Tài nguyên và Môi trường Đỗ Đức Duy đã \"kiến tạo, đồng hành và hỗ trợ nông dân\".",
            "location": "",
            "date": ""
          },
          {
            "id": "1196856",
            "title": "Bản tin đặc biệt: Giải đáp thấu đáo nhiều vấn đề \"nóng\" về đất đai, môi trường qua Diễn đàn \"Lắng nghe nông dân nói\"",
            "url": "https://danviet.vn/ban-tin-dac-biet-giai-dap-thau-dao-nhieu-van-de-nong-ve-dat-dai-moi-truong-qua-dien-dan-lang-nghe-nong-dan-noi-20241125133839203-d1196856.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/25/114724-sequence-01-01-58-53-21-still130-17325166229571564963512-0-43-1080-1771-crop-17325166363381077659461.jpg",
            "sapo": "Diễn đàn \"Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói\" diễn ra sáng 24/11 đã khép lại với nhiều nội dung quan trọng được giải đáp, tháo gỡ tại chỗ. Đa số đại biểu dự Diễn đàn bày tỏ sự hài lòng trước phần trả lời thấu đáo của những người chủ trì.",
            "location": "",
            "date": ""
          },
          {
            "id": "1196776",
            "title": "Nông dân Việt Nam xuất sắc mong được Chủ tịch Hội NDVN và các Bộ trưởng tiếp tục lắng nghe, đồng hành",
            "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-mong-chu-tich-hoi-ndvn-cac-bo-truong-tiep-tuc-lang-nghe-dan-noi-20241124231343468-d1196776.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/24/nong-dan-xuat-sac-17324642844501408707122-139-0-1739-2560-crop-173246470665434971672.jpg",
            "sapo": "Ông Nguyễn Cường - Nông dân Việt Nam xuất sắc nuôi tôm ở Nghệ An chia sẻ: Trước đây, nông dân chúng tôi chỉ thấy Bộ trưởng Bộ Tài nguyên và Môi trường trên ti vi. Tham gia Diễn đàn, chúng tôi đã có cơ hội trực tiếp chia sẻ, thẳng thắn trao đổi, đề xuất ý kiến đến 2 đồng chí lãnh đạo Bộ trưởng và Chủ tịch.",
            "location": "",
            "date": ""
          },
          {
            "id": "1196796",
            "title": "Sau Diễn đàn \"lắng nghe nông dân nói\", nông dân Quảng Nam mong muốn được chia sẻ với nhiều lãnh đạo Bộ, ngành ",
            "url": "https://danviet.vn/sau-dien-dan-lang-nghe-nong-dan-noi-nong-dan-quang-nam-mong-muon-duoc-chia-se-voi-nhieu-lanh-dao-bo-nganh-20241125074807029-d1196796.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/25/a9134f01-8d7b-4293-a935-19075edcc107-1732495362039256237940-0-0-1250-2000-crop-1732495457650212744317.jpg",
            "sapo": "Nông dân ở Quảng Nam mong muốn trong thời gian đến, Hội Nông dân Việt Nam và các Bộ, ngành tiếp tục tổ chức nhiều diễn đàn hơn nữa để cho nông dân có nơi để bày tỏ nguyện vọng của mình để tham gia vào quá trình hội nhập quốc tế, góp phần phát triển ngành nông nghiệp Việt Nam…",
            "location": "",
            "date": ""
          },
          {
            "id": "1196698",
            "title": "Video: Diễn đàn \"Lắng nghe nông dân nói\" - tiếng nói của nông dân, giải pháp từ thực tiễn",
            "url": "https://danviet.vn/video-dien-dan-lang-nghe-nong-dan-noi-tieng-noi-cua-nong-dan-giai-phap-tu-thuc-tien-20241124122216246-d1196698.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/24/tun-tuc-00-14-38-06-still1028-1732425673632429181333-0-34-1080-1762-crop-17324256773331713022727.jpg",
            "sapo": "Diễn đàn \"Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Tài nguyên và Môi trường Lắng nghe nông dân nói\" với chủ đề khơi thông nguồn lực đất đai, hướng tới mục tiêu NetZero, bảo vệ môi trường nông thôn là nơi để những người nông dân được bày tỏ ý kiến, nguyện vọng của mình và tháo gỡ những khó khăn, vuớng mắc.",
            "location": "",
            "date": ""
          },
          {
            "id": "1196762",
            "title": "Bản tin 19h VTV1: Diễn đàn \"Lắng nghe nông dân nói\" - khơi thông nguồn lực đất đai, bảo vệ môi trường",
            "url": "https://danviet.vn/ban-tin-19h-vtv1-dien-dan-lang-nghe-nong-dan-noi-khoi-thong-nguon-luc-dat-dai-bao-ve-moi-truong-20241124210321771-d1196762.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/24/img2701-17324579514141220650460-9-260-924-1721-crop-17324580064461056487353.png",
            "sapo": "Bản tin 19h VTV1 tối 24/11 đã thông tin chi tiết về Diễn đàn “Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói” diễn ra vào sáng cùng ngày với chủ đề \"Khơi thông nguồn lực đất đai, hướng tới mục tiêu NetZero, bảo vệ môi trường nông thôn\".",
            "location": "",
            "date": ""
          },
          {
            "id": "1196773",
            "title": "Bộ trưởng Bộ Tài nguyên và môi trường, Chủ tịch Hội NDVN làm việc quyết liệt, trả lời sắc nét, nông dân hài lòng",
            "url": "https://danviet.vn/bo-truong-bo-tai-nguyen-va-moi-truong-chu-tich-hoi-ndvn-lam-viec-quyet-liet-tra-loi-sac-net-nong-dan-hai-long-20241124222239964-d1196773.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/24/bo-tai-nguyen-va-moi-truong-1732461073022198773392-236-0-1836-2560-crop-17324615010711841532426.jpg",
            "sapo": "Nhiều Nông dân Việt Nam xuất sắc, HTX tiêu biểu toàn quốc bày tỏ sự ấn tượng, hài lòng khi được Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói và giải quyết nhiều vấn đề nóng về đất đai, môi trường, khí hậu...",
            "location": "",
            "date": ""
          },
          {
            "id": "1196735",
            "title": "Bộ trưởng Bộ Tài nguyên và Môi trường: Đất nông nghiệp ưu tiên số một cho hoạt động sản xuất nông nghiệp ",
            "url": "https://danviet.vn/bo-truong-bo-tai-nguyen-va-moi-truong-dat-nong-nghiep-uu-tien-so-mot-cho-hoat-dong-san-xuat-nong-nghiep-20241124180316959-d1196735.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/24/tun-tuc-00-25-36-21-still1029-17324461532242029284628-0-57-1080-1785-crop-1732446160549700661313.jpg",
            "sapo": "Tại Diễn đàn “Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói” diễn ra vào sáng nay 24/11, nhiều nội dung, kiến nghị liên quan đến Luật Đất đai 2024 đã được nêu ra bởi các nông dân, HTX, chuyên gia, nhà khoa học…",
            "location": "",
            "date": ""
          },
          {
            "id": "1196721",
            "title": "Nông dân Vĩnh Phúc muốn trồng dâu bán tín chỉ carbon, Bộ trưởng Đỗ Đức Duy khen ý tưởng hay, hứa sẽ hỗ trợ",
            "url": "https://danviet.vn/nong-dan-vinh-phuc-muon-trong-dau-ban-tin-chi-carbon-bo-truong-do-duc-duy-khen-y-tuong-hay-hua-se-ho-tro-20241124160607331-d1196721.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/24/bo-truong-do-duc-duy-1732415009622226988390-1732438752072191560760-26-0-432-650-crop-17324389931341562812244.jpg",
            "sapo": "Trả lời câu hỏi của đại biểu Nguyễn Quốc Huy - Giám đốc HTX nấm Tam Đảo (Tam Đảo, Vĩnh Phúc), Bộ trưởng Bộ TNMT Đỗ Đức Duy rất tâm đắc với câu hỏi và thông tin mà đại biểu Huy nêu ra: Phát triển diện tích trồng dâu nuôi tằm và hướng đến được cấp và bán tín chỉ carbon\" rất hay.",
            "location": "",
            "date": ""
          },
          {
            "id": "1196690",
            "title": "Giám đốc HTX kiến nghị cơ chế cho nông dân ở đô thị vì \"giọt mồ hôi nào cũng mặn chát như nhau\"",
            "url": "https://danviet.vn/giam-doc-htx-kien-nghi-co-che-cho-nong-dan-o-do-thi-vi-giot-mo-hoi-nao-cung-man-chat-nhu-nhau-20241124111706998-d1196690.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/24/huyen-1732421627019857638398-211-0-1811-2560-crop-1732421643203892147523.jpg",
            "sapo": "Tại Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói, bà Vũ Thị Thương Huyền, Giám đốc HTX chè Thịnh An (huyện Đồng Hỷ, Thái Nguyên) kiến nghị về cơ chế, chính sách cho những nông dân ở đô thị vì \"giọt mồ hôi nào của nông dân cũng mặn chát như nhau\".",
            "location": "",
            "date": ""
          },
          {
            "id": "1196697",
            "title": "Bộ trưởng Bộ Tài nguyên và Môi trường Đỗ Đức Duy nêu 6 nhiệm vụ để giải đáp các kiến nghị của nông dân ",
            "url": "https://danviet.vn/bo-truong-bo-tai-nguyen-va-moi-truong-do-duc-duy-neu-6-nhiem-vu-de-giai-dap-cac-kien-nghi-cua-nong-dan-20241124114859546-d1196697.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/24/duy-17324236621701801895846-81-0-1681-2560-crop-1732423668596825181336.jpg",
            "sapo": "Phát biểu kết luận tại Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói, Bộ trưởng Bộ TNMT Đỗ Đức Duy nêu 6 nhiệm vụ trọng tâm để khơi thông nguồn lực đất đai, phát triển sản xuất xanh.",
            "location": "",
            "date": ""
          },
          {
            "id": "1196662",
            "title": "Video: Lắng nghe nông dân nói để tháo gỡ nhiều vấn đề \"nóng\" về đất đai, môi trường",
            "url": "https://danviet.vn/video-lang-nghe-nong-dan-noi-de-thao-go-nhieu-van-de-nong-ve-dat-dai-moi-truong-20241124082446253-d1196662.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/24/tun-tuc-00-14-11-01-still1027-17324120658721107782555-0-97-1080-1825-crop-17324120773021151762337.jpg",
            "sapo": "Nghị quyết số 19 đã xác định nông dân là chủ thể, trung tâm trong phát triển kinh tế nông nghiệp, xây dựng nông thôn mới. Vì thế, người nông dân có vai trò rất lớn trong việc thúc đẩy thi hành Luật Đất đai, trong chuyển đổi sản xuất xanh và bền vững, bảo vệ môi trường, hướng tới mục tiêu NetZero...",
            "location": "",
            "date": ""
          },
          {
            "id": "1196283",
            "title": "Chủ tịch Hội NDVN Lương Quốc Đoàn: Lắng nghe nông dân nói để khơi thông nguồn lực đất đai, chuyển đổi xanh, bền vững",
            "url": "https://danviet.vn/chu-tich-hoi-ndvn-luong-quoc-doan-lang-nghe-nong-dan-noi-de-khoi-thong-nguon-luc-dat-dai-chuyen-doi-xanh-ben-vung-20241122004835489-d1196283.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/22/800x500-ong-doan-1732253232735266371694.jpg",
            "sapo": "Đồng chí Lương Quốc Đoàn- Ủy viên T.Ư Đảng, Chủ tịch Ban Chấp hành T.Ư Hội NDVN khẳng định: Diễn đàn là dịp để Hội NDVN, Bộ TNMT được lắng nghe các nông dân xuất sắc, HTX tiêu biểu chia sẻ những khó khăn, vướng mắc cũng như đề xuất các ý kiến, nguyện vọng liên quan đến các vấn đề chính về đất đai, khí hậu và môi trường.",
            "location": "",
            "date": ""
          },
          {
            "id": "121170",
            "title": "Diễn đàn Lắng nghe nông dân nói: Luật Đất đai 2024 thúc đẩy tiềm lực cho đất nông nghiệp",
            "url": "https://danviet.vn/luat-dat-dai-2024-thuc-day-tiem-luc-cho-dat-nong-nghiep-20241123151504853-d121170.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/23/luat-dat-dai-2024-dat-nong-nghiep-17323495753161409663864-0-192-1080-1920-crop-1732349580703655913806.jpg",
            "sapo": "Những điểm mới của Luật Đất đai 2024 được chuyên gia, doanh nghiệp đánh giá cao trong việc nâng cao giá trị cho đất nông nghiệp, mang lại lợi ích cho người nông dân. Đây cũng là vấn đề được thảo luận tại Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Tài nguyên và Môi trường Lắng nghe nông dân nói năm 2024.",
            "location": "",
            "date": ""
          },
          {
            "id": "1196546",
            "title": "Cả nước đã có 12.011 tổ, nhóm, câu lạc bộ nông dân thu gom, phân loại, xử lý rác thải",
            "url": "https://danviet.vn/ca-nuoc-da-co-12011-to-nhom-cau-lac-bo-nong-dan-thu-gom-phan-loai-xu-ly-rac-thai-20241123121058748-d1196546.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/23/rac-1732256395180310215402-154-0-954-1280-crop-1732338544045855059515.jpeg",
            "sapo": "Những năm qua, Trung ương Hội Nông dân Việt Nam, Bộ Tài nguyên và Môi trường đã phối hợp triển khai nhiều chương trình, dự án nhằm  tuyên truyền, vận động nông dân nâng cao nhận thức, trách nhiệm về bảo vệ môi trường; phản biện, giám sát xây dựng chính sách bảo vệ tài nguyên, môi trường,",
            "location": "",
            "date": ""
          },
          {
            "id": "1196398",
            "title": "Tài chính khí hậu - mục tiêu NetZero và cơ hội của nông dân",
            "url": "https://danviet.vn/tai-chinh-khi-hau-muc-tieu-netzero-va-co-hoi-cua-nong-dan-20241122150509433-d1196398.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/22/anh-tho-dv-2024-17259665256431636875768-0-0-377-603-crop-17322625227941273076926.jpg",
            "sapo": "Từ Baku, Azerbaijan, trong khi Hội nghị COP29 tiếp tục hướng đến mục tiêu huy động tài chính toàn cầu để hỗ trợ các quốc gia trong việc thích ứng biến đổi khí hậu, giảm phát thải khí nhà kính thì ở Đồng bằng sông Cửu Long, đã có những nông dân nhận thưởng \"nóng\" vì trồng được lúa giảm phát thải.",
            "location": "",
            "date": ""
          },
          {
            "id": "1196030",
            "title": "Diễn đàn Lắng nghe nông dân nói: Cần cơ chế đặc thù, tháo gỡ rào cản trong việc tích tụ ruộng đất",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-can-co-che-dac-thu-thao-go-rao-can-trong-viec-tich-tu-ruong-dat-20241120161729279-d1196030.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/20/00001-1732095672436315146466-0-0-303-485-crop-17320956752051886279217.png",
            "sapo": "Gửi gắm tâm tư, kiến nghị tới Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói sẽ được tổ chức tại Hà Nội ngày 24/11 tới đây, nhiều hội viên nông dân ở Lai Châu quan tâm tới vấn đề tích tụ, tập trung đất đai.",
            "location": "",
            "date": ""
          },
          {
            "id": "1195793",
            "title": "Diễn đàn Chủ tịch Hội NDVN - Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói diễn ra vào ngày 24/11",
            "url": "https://danviet.vn/dien-dan-chu-tich-hoi-ndvn-bo-truong-bo-tai-nguyen-va-moi-truong-lang-nghe-nong-dan-noi-dien-ra-vao-ngay-24-11-20241119144758256-d1195793.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/20/800-x-500-px-dv-17320996417751324704712.jpg",
            "sapo": "Diễn đàn \"Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói\" sẽ diễn ra vào ngày 24/11/2024 tại Trung tâm Hội nghị 37 Hùng Vương, Ba Đình, Hà Nội.",
            "location": "",
            "date": ""
          },
          {
            "id": "1195933",
            "title": "Diễn đàn Lắng nghe nông dân nói: Các Giám đốc HTX kiến nghị vấn đề nóng về đất đai, cấp chứng nhận tín chỉ carbon",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noicac-giam-doc-htx-kien-nghi-van-de-nong-ve-dat-dai-cap-chung-nhan-tin-chi-carbon-20241120100057409-d1195933.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/20/hoi-nong-dan-lang-nghe-nong-dan-1732071406120868136093-134-0-934-1280-crop-173207157339789959110.jpg",
            "sapo": "Gửi tâm tư, kiến nghị đến Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói sẽ được tổ chức tại Hà Nội ngày 24/11 tới, nhiều Giám đốc HTX quan tâm đến vấn đề đất đai, cấp chứng nhận tín chỉ carbon.",
            "location": "",
            "date": ""
          },
          {
            "id": "1195775",
            "title": "Diễn đàn Lắng nghe nông dân nói: Nông dân ĐBSCL kiến nghị quản lý, khai thác bền vững tài nguyên cát",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-nong-dan-dbscl-kien-nghi-quan-ly-khai-thac-ben-vung-tai-nguyen-cat-20241119131348178-d1195775.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/19/cat-bien-17319965591181159447525.jpg",
            "sapo": "Gửi tâm tư, kiến nghị đến Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói sẽ được tổ chức tại Hà Nội ngày 24/11 tới, nhiều nông dân ở Đồng bằng sông Cửu Long quan tâm đến vấn đề khai thác cát, trồng lúa giảm phát thải.",
            "location": "",
            "date": ""
          },
          {
            "id": "1194828",
            "title": "Lùi thời gian tổ chức Diễn đàn Chủ tịch Hội NDVN- Bộ trưởng Bộ Tài nguyên và Môi trường Lắng nghe nông dân nói",
            "url": "https://danviet.vn/lui-thoi-gian-to-chuc-dien-dan-chu-tich-hoi-ndvn-bo-truong-bo-tai-nguyen-va-moi-truong-lang-nghe-nong-dan-noi-20241113171230326-d1194828.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/13/trong-buoi-17314925200571544986671-84-0-1334-2000-crop-17314925255261202307255.jpg",
            "sapo": "Ngày 13/11, theo thông tin từ Ban Tổ chức Diễn đàn, vì lý do đột xuất, Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Tài nguyên và Môi trường sẽ được lùi thời gian tổ chức và lịch tổ chức cụ thể sẽ được thông báo sau.",
            "location": "",
            "date": ""
          },
          {
            "id": "1194139",
            "title": "Diễn đàn Lắng nghe nông dân nói: Nông dân Hà Tĩnh trăn trở trước tình trạng đồng ruộng bỏ hoang",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-nong-dan-nam-dinh-ha-tinh-kien-nghi-nhung-van-de-nong-ve-dat-dai-20241109131321202-d1194139.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/9/nong-nghiep-huu-co-1-1728956766956180261841-0-0-591-946-crop-1731132792675964991422.jpg",
            "sapo": "Hội viên nông dân ở Hà Tĩnh gửi đến Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Tài nguyên và Môi trường nhiều vấn đề liên quan đến tích tụ ruộng đất.",
            "location": "",
            "date": ""
          },
          {
            "id": "1194598",
            "title": "Diễn đàn Lắng nghe nông dân nói: Nông dân kiến nghị  tháo gỡ nhiều vấn đề \"nóng\" về đất đai, môi trường",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-nong-dan-kien-nghi-thao-go-nhieu-van-de-nong-ve-dat-dai-moi-truong-20241112113445375-d1194598.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/12/lanhdaotinhsoctrangkhaosatdientichtrongluatrongmohinhtrinhdientaivuhethu2024-1731385961147185665291-0-43-674-1121-crop-17313860310811841908729.jpg",
            "sapo": "Trước thềm Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói, hội viên, Hội Nông dân các cấp ở Thừa Thiên Huế, Bình Định, Cà Mau, Sóc Trăng... đã kiến nghị tháo gỡ nhiều vấn đề nóng liên quan đến môi trường, đất đai...",
            "location": "",
            "date": ""
          },
          {
            "id": "1194220",
            "title": "Diễn đàn Lắng nghe nông dân nói: Nông dân huyện Phú Xuyên đề nghị cải thiện môi trường làng nghề giày da truyền thống",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-nong-dan-huyen-phu-xuyen-de-nghi-cai-thien-moi-truong-lang-nghe-giay-da-truyen-thong-20241109224447839-d1194220.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/9/hoi-nong-dan-17311665911951416339641-0-0-1600-2560-crop-1731166806311669500122.jpg",
            "sapo": "Chủ tịch Hội Nông dân xã Phú Yên, huyện Phú Xuyên, thành phố Hà Nội chia sẻ: Phú Yên được biết đến là xã có nghề giày da nổi tiếng trên 100 năm. Hiện nay các phụ phẩm, rác thải như da, cao su... trong quá trình sản xuất chưa được xử lý đúng quy cách gây khó khăn không nhỏ cho các hộ làng nghề.",
            "location": "",
            "date": ""
          },
          {
            "id": "1193926",
            "title": "Diễn đàn Chủ tịch Hội NDVN- Bộ trưởng Bộ Tài nguyên và Môi trường Lắng nghe nông dân nói sẽ diễn ra vào ngày 15/11",
            "url": "https://danviet.vn/dien-dan-chu-tich-hoi-ndvn-bo-truong-bo-tai-nguyen-va-moi-truong-lang-nghe-nong-dan-noi-se-dien-ra-vao-ngay-15-11-20241108100236877-d1193926.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/8/465816623-1511661449580039-2727966547451330040-n-17310347717111847986485-0-87-480-855-crop-17310347826201695543815.jpg",
            "sapo": "Theo thông tin từ Trung ương Hội Nông dân Việt Nam, Diễn đàn Chủ tịch Hội Nông dân Việt Nam- Bộ trưởng Bộ Tài nguyên và Môi trường Lắng nghe nông dân nói sẽ diễn ra ngày 15/11 tới đây tại Hà Nội.",
            "location": "",
            "date": ""
          },
          {
            "id": "1192702",
            "title": "Sắp diễn ra Diễn đàn Chủ tịch Hội Nông dân Việt Nam- Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói",
            "url": "https://danviet.vn/sap-dien-ra-dien-dan-chu-tich-hoi-nong-dan-viet-nam-bo-truong-bo-tai-nguyen-va-moi-truong-lang-nghe-nong-dan-noi-20241101104507997-d1192702.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/5/cover-full-hd-17307946488321238392241-0-60-1080-1788-crop-1730794659428329150437.jpg",
            "sapo": "Theo dự kiến, vào trung tuần tháng 11 này, Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Tài nguyên và Môi trường Lắng nghe nông dân nói sẽ được tổ chức tại Hà Nội nhằm lắng nghe tâm tư, nguyện vọng của nông dân, hợp tác xã trước thềm diễn ra Hội nghị Thủ tướng Chính phủ đối thoại với nông dân năm 2024.",
            "location": "",
            "date": ""
          },
          {
            "id": "846600",
            "title": "Diễn đàn Lắng nghe nông dân nói: Nông dân Quảng Nam, Lạng Sơn quan tâm đến vấn đề khơi thông nguồn lực đất đai",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-nong-dan-quang-nam-lang-son-quan-tam-den-van-de-khoi-thong-nguon-luc-dat-dai-2024110616215598-d846600.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/6/img20240708145147-768x550-1730932907953385067684-48-0-528-768-crop-1730933159753257903775.jpg",
            "sapo": "Gửi ý kiến, kiến nghị đến Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói, hội viên, nông dân ở Quảng Nam, Lạng Sơn đặt nhiều câu hỏi liên quan đến việc khơi thông nguồn lực đất đai phục vụ sản xuất.",
            "location": "",
            "date": ""
          },
          {
            "id": "1193693",
            "title": "Diễn đàn Lắng nghe nông dân nói: Khơi thông nguồn lực đất đai, nhìn từ những đại điền thế hệ mới",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-khoi-thong-nguon-luc-dat-dai-nhin-tu-nhung-dai-dien-the-he-moi-20241107000812365-d1193693.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/6/dai-dien-3-17309138315831107498797-0-0-1000-1600-crop-17309138353231902250194.jpg",
            "sapo": "Ðể khuyến khích việc tích tụ, tập trung đất đai trong sản xuất nông nghiệp, thời gian qua, nhiều địa phương đã thúc đẩy sản xuất quy mô lớn, với chính sách thu hút doanh nghiệp đầu tư vào nông nghiệp, nông thôn hình thành những cánh đồng lớn.",
            "location": "",
            "date": ""
          },
          {
            "id": "1193823",
            "title": "Diễn đàn Lắng nghe nông dân nói: Nông dân Nghệ An mong muốn tăng thời gian thuê đất nông nghiệp để đầu tư công nghệ cao",
            "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noinong-dan-nghe-an-mong-muon-tang-thoi-gian-thue-dat-nong-nghiep-de-dau-tu-cong-nghe-cao-20241107163221738-d1193823.html",
            "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/11/7/base64-17237859010612108310583-17309714853881516107161-0-29-1216-1975-crop-17309718363509291076.jpeg",
            "sapo": "Gửi ý kiến, kiến nghị đến Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói, hội viên, nông dân ở Nghệ An bày tỏ mong muốn được kéo dài, gia hạn thời gian cho thuê đất kịp thời để yên tâm đầu tư sản xuất, nhất là các mô hình nông nghiệp công nghệ cao.",
            "location": "",
            "date": ""
          }
        ],
        "articleCount": 35
      }
    ]
  }
];
