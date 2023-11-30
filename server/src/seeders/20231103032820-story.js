"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("stories", [
      {
        name: "TỘI ÁI AN CÁCH NHĨ – ÁM DẠ THIÊN",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 50,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "TỘI ÁI",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 40,
        author: "Nhĩ Nhã",
        status_approve: true,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 0,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "ÁM DẠ THIÊN",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 40,
        author: "Nhĩ Nhã",
        status_approve: true,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 0,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TỰ CẨM",
        description: `Trong kinh thành mọi người đều đồn đại rằng ở trong Khương gia thì Tứ tiểu thư nổi tiếng là một đại tuyệt sắc mỹ nhân. Nhưng đáng tiếc là đáng tiếc lúc nàng xinh đẹp nhất lại bị phủ An quốc công chọn trúng.
          Không chỉ vậy mà đêm trước khi Khương Tự xuất giá, vị hôn phu cùng nữ nhân khác nhảy sông tự tử `,
        total_chapper: 5,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 10,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "THẦN ĐẠO ĐAN TÔN",
        description: `
          Tác giả:Cô Đơn Địa Phi
          Thể loại:Tiên Hiệp, Huyền Huyễn
          Nguồn:Phong Nguyệt Lâu
          Trạng thái:Đang ra
          1 2 3 4 5 6 7 8 9 10
          Đánh giá: 6.9/10 từ 8105 lượt
          Lăng Hàn - Một Đan Đế đại danh đỉnh định mang trong thân mình tuyệt thế công pháp vì truy cầu bước cuối, xé bỏ tấm màn thành thần nhưng thất bại đã phải bỏ mình. Thế nhưng ông trời dường như không muốn tuyệt dường người, Lăng Hàn đã được trọng sinh vào một thiếu niên cùng tên và điều may mắn nhất là "Bất Diệt Thiên Kinh" ấn ký vẫn còn nằm nguyên trong tâm thức hắn.
          
          Từ nay về sau sóng gió cuộn trào nổi lên, Đan Đế ngày xưa bây giờ phải cùng tranh phong với vô số thiên tài trẻ tuổi, lại bắt đầu một truyền thuyết mới như để chứng minh với trời đất: Ta, là người mạnh nhất!`,
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 22,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Quân Lâm Binh Vương",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 24,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Độc Tôn Thiên Hạ",
        description: `Trong kinh thành mọi người đều đồn đại rằng ở trong Khương gia thì Tứ tiểu thư nổi tiếng là một đại tuyệt sắc mỹ nhân. Nhưng đáng tiếc là đáng tiếc lúc nàng xinh đẹp nhất lại bị phủ An quốc công chọn trúng.
          Không chỉ vậy mà đêm trước khi Khương Tự xuất giá, vị hôn phu cùng nữ nhân khác nhảy sông tự tử `,
        total_chapper: 6,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 25,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: " Ông Xã Bạc Tỷ Là Chủ Nợ",
        description: `
          Tác giả:Cô Đơn Địa Phi
          Thể loại:Tiên Hiệp, Huyền Huyễn
          Nguồn:Phong Nguyệt Lâu
          Trạng thái:Đang ra
          1 2 3 4 5 6 7 8 9 10
          Đánh giá: 6.9/10 từ 8105 lượt
          Lăng Hàn - Một Đan Đế đại danh đỉnh định mang trong thân mình tuyệt thế công pháp vì truy cầu bước cuối, xé bỏ tấm màn thành thần nhưng thất bại đã phải bỏ mình. Thế nhưng ông trời dường như không muốn tuyệt dường người, Lăng Hàn đã được trọng sinh vào một thiếu niên cùng tên và điều may mắn nhất là "Bất Diệt Thiên Kinh" ấn ký vẫn còn nằm nguyên trong tâm thức hắn.
          
          Từ nay về sau sóng gió cuộn trào nổi lên, Đan Đế ngày xưa bây giờ phải cùng tranh phong với vô số thiên tài trẻ tuổi, lại bắt đầu một truyền thuyết mới như để chứng minh với trời đất: Ta, là người mạnh nhất!`,
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 26,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: " Cô Vợ Câm Mang Con Bỏ Chạy",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 5,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 27,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Người Vợ Bất Đắc Dĩ Của Tổng Tài",
        description: `Trong kinh thành mọi người đều đồn đại rằng ở trong Khương gia thì Tứ tiểu thư nổi tiếng là một đại tuyệt sắc mỹ nhân. Nhưng đáng tiếc là đáng tiếc lúc nàng xinh đẹp nhất lại bị phủ An quốc công chọn trúng.
          Không chỉ vậy mà đêm trước khi Khương Tự xuất giá, vị hôn phu cùng nữ nhân khác nhảy sông tự tử `,
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 30,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: " Đồ Đệ Xuống Núi Vô Địch Thiên Hạ",
        description: `
          Tác giả:Cô Đơn Địa Phi
          Thể loại:Tiên Hiệp, Huyền Huyễn
          Nguồn:Phong Nguyệt Lâu
          Trạng thái:Đang ra
          1 2 3 4 5 6 7 8 9 10
          Đánh giá: 6.9/10 từ 8105 lượt
          Lăng Hàn - Một Đan Đế đại danh đỉnh định mang trong thân mình tuyệt thế công pháp vì truy cầu bước cuối, xé bỏ tấm màn thành thần nhưng thất bại đã phải bỏ mình. Thế nhưng ông trời dường như không muốn tuyệt dường người, Lăng Hàn đã được trọng sinh vào một thiếu niên cùng tên và điều may mắn nhất là "Bất Diệt Thiên Kinh" ấn ký vẫn còn nằm nguyên trong tâm thức hắn.
          
          Từ nay về sau sóng gió cuộn trào nổi lên, Đan Đế ngày xưa bây giờ phải cùng tranh phong với vô số thiên tài trẻ tuổi, lại bắt đầu một truyền thuyết mới như để chứng minh với trời đất: Ta, là người mạnh nhất!`,
        total_chapper: 3,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 40,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nhạc Tiên Sinh Đang Không Vui",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 31,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: " Cá Mặn Tiểu Thiếu Gia",
        description: `Trong kinh thành mọi người đều đồn đại rằng ở trong Khương gia thì Tứ tiểu thư nổi tiếng là một đại tuyệt sắc mỹ nhân. Nhưng đáng tiếc là đáng tiếc lúc nàng xinh đẹp nhất lại bị phủ An quốc công chọn trúng.
          Không chỉ vậy mà đêm trước khi Khương Tự xuất giá, vị hôn phu cùng nữ nhân khác nhảy sông tự tử `,
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 31,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chân Long Chí Tôn Đô Thị",
        description: `
          Tác giả:Cô Đơn Địa Phi
          Thể loại:Tiên Hiệp, Huyền Huyễn
          Nguồn:Phong Nguyệt Lâu
          Trạng thái:Đang ra
          1 2 3 4 5 6 7 8 9 10
          Đánh giá: 6.9/10 từ 8105 lượt
          Lăng Hàn - Một Đan Đế đại danh đỉnh định mang trong thân mình tuyệt thế công pháp vì truy cầu bước cuối, xé bỏ tấm màn thành thần nhưng thất bại đã phải bỏ mình. Thế nhưng ông trời dường như không muốn tuyệt dường người, Lăng Hàn đã được trọng sinh vào một thiếu niên cùng tên và điều may mắn nhất là "Bất Diệt Thiên Kinh" ấn ký vẫn còn nằm nguyên trong tâm thức hắn.
          
          Từ nay về sau sóng gió cuộn trào nổi lên, Đan Đế ngày xưa bây giờ phải cùng tranh phong với vô số thiên tài trẻ tuổi, lại bắt đầu một truyền thuyết mới như để chứng minh với trời đất: Ta, là người mạnh nhất!`,
        total_chapper: 6,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 29,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: " Phản Hồi Sau Hôn Nhân",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 33,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Đuổi Theo Gió",
        description: `Trong kinh thành mọi người đều đồn đại rằng ở trong Khương gia thì Tứ tiểu thư nổi tiếng là một đại tuyệt sắc mỹ nhân. Nhưng đáng tiếc là đáng tiếc lúc nàng xinh đẹp nhất lại bị phủ An quốc công chọn trúng.
          Không chỉ vậy mà đêm trước khi Khương Tự xuất giá, vị hôn phu cùng nữ nhân khác nhảy sông tự tử `,
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 21,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cưa Nhầm Bạn Trai, Được Chồng Như Ý",
        description: `
          Tác giả:Cô Đơn Địa Phi
          Thể loại:Tiên Hiệp, Huyền Huyễn
          Nguồn:Phong Nguyệt Lâu
          Trạng thái:Đang ra
          1 2 3 4 5 6 7 8 9 10
          Đánh giá: 6.9/10 từ 8105 lượt
          Lăng Hàn - Một Đan Đế đại danh đỉnh định mang trong thân mình tuyệt thế công pháp vì truy cầu bước cuối, xé bỏ tấm màn thành thần nhưng thất bại đã phải bỏ mình. Thế nhưng ông trời dường như không muốn tuyệt dường người, Lăng Hàn đã được trọng sinh vào một thiếu niên cùng tên và điều may mắn nhất là "Bất Diệt Thiên Kinh" ấn ký vẫn còn nằm nguyên trong tâm thức hắn.
          
          Từ nay về sau sóng gió cuộn trào nổi lên, Đan Đế ngày xưa bây giờ phải cùng tranh phong với vô số thiên tài trẻ tuổi, lại bắt đầu một truyền thuyết mới như để chứng minh với trời đất: Ta, là người mạnh nhất!`,
        total_chapper: 2,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 43,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Khôn Ninh",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 45,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: " VAN's Force: Phế Tích Thế Giới Các Thần",
        description: `Trong kinh thành mọi người đều đồn đại rằng ở trong Khương gia thì Tứ tiểu thư nổi tiếng là một đại tuyệt sắc mỹ nhân. Nhưng đáng tiếc là đáng tiếc lúc nàng xinh đẹp nhất lại bị phủ An quốc công chọn trúng.
          Không chỉ vậy mà đêm trước khi Khương Tự xuất giá, vị hôn phu cùng nữ nhân khác nhảy sông tự tử `,
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 52,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: " Mỹ Thực Gia Ở Dị Giới",
        description: `
          Tác giả:Cô Đơn Địa Phi
          Thể loại:Tiên Hiệp, Huyền Huyễn
          Nguồn:Phong Nguyệt Lâu
          Trạng thái:Đang ra
          1 2 3 4 5 6 7 8 9 10
          Đánh giá: 6.9/10 từ 8105 lượt
          Lăng Hàn - Một Đan Đế đại danh đỉnh định mang trong thân mình tuyệt thế công pháp vì truy cầu bước cuối, xé bỏ tấm màn thành thần nhưng thất bại đã phải bỏ mình. Thế nhưng ông trời dường như không muốn tuyệt dường người, Lăng Hàn đã được trọng sinh vào một thiếu niên cùng tên và điều may mắn nhất là "Bất Diệt Thiên Kinh" ấn ký vẫn còn nằm nguyên trong tâm thức hắn.
          
          Từ nay về sau sóng gió cuộn trào nổi lên, Đan Đế ngày xưa bây giờ phải cùng tranh phong với vô số thiên tài trẻ tuổi, lại bắt đầu một truyền thuyết mới như để chứng minh với trời đất: Ta, là người mạnh nhất!`,
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 35,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tiêu Tổng, Xin Tha Cho Tôi",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 15,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: " Trúc Mã Vừa Ngọt Lại Mặn",
        description: `Trong kinh thành mọi người đều đồn đại rằng ở trong Khương gia thì Tứ tiểu thư nổi tiếng là một đại tuyệt sắc mỹ nhân. Nhưng đáng tiếc là đáng tiếc lúc nàng xinh đẹp nhất lại bị phủ An quốc công chọn trúng.
          Không chỉ vậy mà đêm trước khi Khương Tự xuất giá, vị hôn phu cùng nữ nhân khác nhảy sông tự tử `,
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 33,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: " Trúc Mã Vừa Ngọt Lại Mặn",
        description: `
          Tác giả:Cô Đơn Địa Phi
          Thể loại:Tiên Hiệp, Huyền Huyễn
          Nguồn:Phong Nguyệt Lâu
          Trạng thái:Đang ra
          1 2 3 4 5 6 7 8 9 10
          Đánh giá: 6.9/10 từ 8105 lượt
          Lăng Hàn - Một Đan Đế đại danh đỉnh định mang trong thân mình tuyệt thế công pháp vì truy cầu bước cuối, xé bỏ tấm màn thành thần nhưng thất bại đã phải bỏ mình. Thế nhưng ông trời dường như không muốn tuyệt dường người, Lăng Hàn đã được trọng sinh vào một thiếu niên cùng tên và điều may mắn nhất là "Bất Diệt Thiên Kinh" ấn ký vẫn còn nằm nguyên trong tâm thức hắn.
          
          Từ nay về sau sóng gió cuộn trào nổi lên, Đan Đế ngày xưa bây giờ phải cùng tranh phong với vô số thiên tài trẻ tuổi, lại bắt đầu một truyền thuyết mới như để chứng minh với trời đất: Ta, là người mạnh nhất!`,
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 35,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: " Báo Đen",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 15,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TỰ CẨM",
        description: `Trong kinh thành mọi người đều đồn đại rằng ở trong Khương gia thì Tứ tiểu thư nổi tiếng là một đại tuyệt sắc mỹ nhân. Nhưng đáng tiếc là đáng tiếc lúc nàng xinh đẹp nhất lại bị phủ An quốc công chọn trúng.
          Không chỉ vậy mà đêm trước khi Khương Tự xuất giá, vị hôn phu cùng nữ nhân khác nhảy sông tự tử `,
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 33,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "THẦN ĐẠO ĐAN TÔN",
        description: `
          Tác giả:Cô Đơn Địa Phi
          Thể loại:Tiên Hiệp, Huyền Huyễn
          Nguồn:Phong Nguyệt Lâu
          Trạng thái:Đang ra
          1 2 3 4 5 6 7 8 9 10
          Đánh giá: 6.9/10 từ 8105 lượt
          Lăng Hàn - Một Đan Đế đại danh đỉnh định mang trong thân mình tuyệt thế công pháp vì truy cầu bước cuối, xé bỏ tấm màn thành thần nhưng thất bại đã phải bỏ mình. Thế nhưng ông trời dường như không muốn tuyệt dường người, Lăng Hàn đã được trọng sinh vào một thiếu niên cùng tên và điều may mắn nhất là "Bất Diệt Thiên Kinh" ấn ký vẫn còn nằm nguyên trong tâm thức hắn.
          
          Từ nay về sau sóng gió cuộn trào nổi lên, Đan Đế ngày xưa bây giờ phải cùng tranh phong với vô số thiên tài trẻ tuổi, lại bắt đầu một truyền thuyết mới như để chứng minh với trời đất: Ta, là người mạnh nhất!`,
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 35,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TỘI ÁI AN CÁCH NHĨ – ÁM DẠ THIÊN",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 15,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TỰ CẨM",
        description: `Trong kinh thành mọi người đều đồn đại rằng ở trong Khương gia thì Tứ tiểu thư nổi tiếng là một đại tuyệt sắc mỹ nhân. Nhưng đáng tiếc là đáng tiếc lúc nàng xinh đẹp nhất lại bị phủ An quốc công chọn trúng.
          Không chỉ vậy mà đêm trước khi Khương Tự xuất giá, vị hôn phu cùng nữ nhân khác nhảy sông tự tử `,
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 33,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "THẦN ĐẠO ĐAN TÔN",
        description: `
          Tác giả:Cô Đơn Địa Phi
          Thể loại:Tiên Hiệp, Huyền Huyễn
          Nguồn:Phong Nguyệt Lâu
          Trạng thái:Đang ra
          1 2 3 4 5 6 7 8 9 10
          Đánh giá: 6.9/10 từ 8105 lượt
          Lăng Hàn - Một Đan Đế đại danh đỉnh định mang trong thân mình tuyệt thế công pháp vì truy cầu bước cuối, xé bỏ tấm màn thành thần nhưng thất bại đã phải bỏ mình. Thế nhưng ông trời dường như không muốn tuyệt dường người, Lăng Hàn đã được trọng sinh vào một thiếu niên cùng tên và điều may mắn nhất là "Bất Diệt Thiên Kinh" ấn ký vẫn còn nằm nguyên trong tâm thức hắn.
          
          Từ nay về sau sóng gió cuộn trào nổi lên, Đan Đế ngày xưa bây giờ phải cùng tranh phong với vô số thiên tài trẻ tuổi, lại bắt đầu một truyền thuyết mới như để chứng minh với trời đất: Ta, là người mạnh nhất!`,
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 35,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TỘI ÁI AN CÁCH NHĨ – ÁM DẠ THIÊN",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 15,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TỰ CẨM",
        description: `Trong kinh thành mọi người đều đồn đại rằng ở trong Khương gia thì Tứ tiểu thư nổi tiếng là một đại tuyệt sắc mỹ nhân. Nhưng đáng tiếc là đáng tiếc lúc nàng xinh đẹp nhất lại bị phủ An quốc công chọn trúng.
          Không chỉ vậy mà đêm trước khi Khương Tự xuất giá, vị hôn phu cùng nữ nhân khác nhảy sông tự tử `,
        total_chapper: 4,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 33,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("stories", null, {});
  },
};
