"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("stories", [
      {
        name: "Làm càn",
        description: `Đường Nhược Dao chỉ mới 22 tuổi đã giành được giải thưởng Nữ diễn viên chính xuất sắc nhất, tiền đồ vô hạn. Ngày hôm sau truyền thông kéo nhau đưa tin, gọi cô bằng cái tên mĩ miều “Tiểu Tần Ý Nùng.”

        Fan của Đường Nhược Dao vô cùng tức giận, khuôn mặt Tần Ý Nùng hại nước hại dân, danh tiếng trong giới giải trí vô cùng tệ hại, bất luận trai gái chay mặn đều không buông tha, nghe đồn nửa giới giải trí đều là nhân tình của cô ta, cô ta còn chưa kết hôn đã sinh con, con những mấy tuổi rồi. Truyền thông vô lương tâm, chà đạp thần tượng của chúng tôi!
        
        Fan của Tần Ý Nùng cũng đáp trả, danh hiệu Ảnh hậu nhà tôi trong nước ngoài nước cầm nhũn tay rồi, Đường Nhược Dao còn không xứng xách dép cho Tần Ý Nùng, chỉ là diễn viên vô danh tiểu tốt!
        
        Có phóng viên nhiều chuyện lần lượt phỏng vấn hai người về ấn tượng với đối phương.
        `,
        total_chapper: 4,
        author: "Huyền Tiên",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `lam-can.jpg`,
        view: 0,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tội án An Cách Nhĩ - Ám Dạ Thiên",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 40,
        author: "Nhĩ Nhã",
        status_approve: false,
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
        name: "Làm càn",
        description: `Đường Nhược Dao chỉ mới 22 tuổi đã giành được giải thưởng Nữ diễn viên chính xuất sắc nhất, tiền đồ vô hạn. Ngày hôm sau truyền thông kéo nhau đưa tin, gọi cô bằng cái tên mĩ miều “Tiểu Tần Ý Nùng.”

        Fan của Đường Nhược Dao vô cùng tức giận, khuôn mặt Tần Ý Nùng hại nước hại dân, danh tiếng trong giới giải trí vô cùng tệ hại, bất luận trai gái chay mặn đều không buông tha, nghe đồn nửa giới giải trí đều là nhân tình của cô ta, cô ta còn chưa kết hôn đã sinh con, con những mấy tuổi rồi. Truyền thông vô lương tâm, chà đạp thần tượng của chúng tôi!
        
        Fan của Tần Ý Nùng cũng đáp trả, danh hiệu Ảnh hậu nhà tôi trong nước ngoài nước cầm nhũn tay rồi, Đường Nhược Dao còn không xứng xách dép cho Tần Ý Nùng, chỉ là diễn viên vô danh tiểu tốt!
        
        Có phóng viên nhiều chuyện lần lượt phỏng vấn hai người về ấn tượng với đối phương.
        `,
        total_chapper: 4,
        author: "Huyền Tiên",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `lam-can.jpg`,
        view: 0,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tội án An Cách Nhĩ - Ám Dạ Thiên",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 40,
        author: "Nhĩ Nhã",
        status_approve: false,
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
        name: "Làm càn",
        description: `Đường Nhược Dao chỉ mới 22 tuổi đã giành được giải thưởng Nữ diễn viên chính xuất sắc nhất, tiền đồ vô hạn. Ngày hôm sau truyền thông kéo nhau đưa tin, gọi cô bằng cái tên mĩ miều “Tiểu Tần Ý Nùng.”

        Fan của Đường Nhược Dao vô cùng tức giận, khuôn mặt Tần Ý Nùng hại nước hại dân, danh tiếng trong giới giải trí vô cùng tệ hại, bất luận trai gái chay mặn đều không buông tha, nghe đồn nửa giới giải trí đều là nhân tình của cô ta, cô ta còn chưa kết hôn đã sinh con, con những mấy tuổi rồi. Truyền thông vô lương tâm, chà đạp thần tượng của chúng tôi!
        
        Fan của Tần Ý Nùng cũng đáp trả, danh hiệu Ảnh hậu nhà tôi trong nước ngoài nước cầm nhũn tay rồi, Đường Nhược Dao còn không xứng xách dép cho Tần Ý Nùng, chỉ là diễn viên vô danh tiểu tốt!
        
        Có phóng viên nhiều chuyện lần lượt phỏng vấn hai người về ấn tượng với đối phương.
        `,
        total_chapper: 4,
        author: "Huyền Tiên",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `lam-can.jpg`,
        view: 0,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tội án An Cách Nhĩ - Ám Dạ Thiên",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 40,
        author: "Nhĩ Nhã",
        status_approve: false,
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
        name: "Làm càn",
        description: `Đường Nhược Dao chỉ mới 22 tuổi đã giành được giải thưởng Nữ diễn viên chính xuất sắc nhất, tiền đồ vô hạn. Ngày hôm sau truyền thông kéo nhau đưa tin, gọi cô bằng cái tên mĩ miều “Tiểu Tần Ý Nùng.”

        Fan của Đường Nhược Dao vô cùng tức giận, khuôn mặt Tần Ý Nùng hại nước hại dân, danh tiếng trong giới giải trí vô cùng tệ hại, bất luận trai gái chay mặn đều không buông tha, nghe đồn nửa giới giải trí đều là nhân tình của cô ta, cô ta còn chưa kết hôn đã sinh con, con những mấy tuổi rồi. Truyền thông vô lương tâm, chà đạp thần tượng của chúng tôi!
        
        Fan của Tần Ý Nùng cũng đáp trả, danh hiệu Ảnh hậu nhà tôi trong nước ngoài nước cầm nhũn tay rồi, Đường Nhược Dao còn không xứng xách dép cho Tần Ý Nùng, chỉ là diễn viên vô danh tiểu tốt!
        
        Có phóng viên nhiều chuyện lần lượt phỏng vấn hai người về ấn tượng với đối phương.
        `,
        total_chapper: 4,
        author: "Huyền Tiên",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `lam-can.jpg`,
        view: 0,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tội án An Cách Nhĩ - Ám Dạ Thiên",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 40,
        author: "Nhĩ Nhã",
        status_approve: false,
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
        name: "Làm càn",
        description: `Đường Nhược Dao chỉ mới 22 tuổi đã giành được giải thưởng Nữ diễn viên chính xuất sắc nhất, tiền đồ vô hạn. Ngày hôm sau truyền thông kéo nhau đưa tin, gọi cô bằng cái tên mĩ miều “Tiểu Tần Ý Nùng.”

        Fan của Đường Nhược Dao vô cùng tức giận, khuôn mặt Tần Ý Nùng hại nước hại dân, danh tiếng trong giới giải trí vô cùng tệ hại, bất luận trai gái chay mặn đều không buông tha, nghe đồn nửa giới giải trí đều là nhân tình của cô ta, cô ta còn chưa kết hôn đã sinh con, con những mấy tuổi rồi. Truyền thông vô lương tâm, chà đạp thần tượng của chúng tôi!
        
        Fan của Tần Ý Nùng cũng đáp trả, danh hiệu Ảnh hậu nhà tôi trong nước ngoài nước cầm nhũn tay rồi, Đường Nhược Dao còn không xứng xách dép cho Tần Ý Nùng, chỉ là diễn viên vô danh tiểu tốt!
        
        Có phóng viên nhiều chuyện lần lượt phỏng vấn hai người về ấn tượng với đối phương.
        `,
        total_chapper: 4,
        author: "Huyền Tiên",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `lam-can.jpg`,
        view: 0,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tội án An Cách Nhĩ - Ám Dạ Thiên",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 40,
        author: "Nhĩ Nhã",
        status_approve: false,
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
        name: "Làm càn",
        description: `Đường Nhược Dao chỉ mới 22 tuổi đã giành được giải thưởng Nữ diễn viên chính xuất sắc nhất, tiền đồ vô hạn. Ngày hôm sau truyền thông kéo nhau đưa tin, gọi cô bằng cái tên mĩ miều “Tiểu Tần Ý Nùng.”

        Fan của Đường Nhược Dao vô cùng tức giận, khuôn mặt Tần Ý Nùng hại nước hại dân, danh tiếng trong giới giải trí vô cùng tệ hại, bất luận trai gái chay mặn đều không buông tha, nghe đồn nửa giới giải trí đều là nhân tình của cô ta, cô ta còn chưa kết hôn đã sinh con, con những mấy tuổi rồi. Truyền thông vô lương tâm, chà đạp thần tượng của chúng tôi!
        
        Fan của Tần Ý Nùng cũng đáp trả, danh hiệu Ảnh hậu nhà tôi trong nước ngoài nước cầm nhũn tay rồi, Đường Nhược Dao còn không xứng xách dép cho Tần Ý Nùng, chỉ là diễn viên vô danh tiểu tốt!
        
        Có phóng viên nhiều chuyện lần lượt phỏng vấn hai người về ấn tượng với đối phương.
        `,
        total_chapper: 4,
        author: "Huyền Tiên",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `lam-can.jpg`,
        view: 0,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tội án An Cách Nhĩ - Ám Dạ Thiên",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 40,
        author: "Nhĩ Nhã",
        status_approve: false,
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
        name: "Làm càn",
        description: `Đường Nhược Dao chỉ mới 22 tuổi đã giành được giải thưởng Nữ diễn viên chính xuất sắc nhất, tiền đồ vô hạn. Ngày hôm sau truyền thông kéo nhau đưa tin, gọi cô bằng cái tên mĩ miều “Tiểu Tần Ý Nùng.”

        Fan của Đường Nhược Dao vô cùng tức giận, khuôn mặt Tần Ý Nùng hại nước hại dân, danh tiếng trong giới giải trí vô cùng tệ hại, bất luận trai gái chay mặn đều không buông tha, nghe đồn nửa giới giải trí đều là nhân tình của cô ta, cô ta còn chưa kết hôn đã sinh con, con những mấy tuổi rồi. Truyền thông vô lương tâm, chà đạp thần tượng của chúng tôi!
        
        Fan của Tần Ý Nùng cũng đáp trả, danh hiệu Ảnh hậu nhà tôi trong nước ngoài nước cầm nhũn tay rồi, Đường Nhược Dao còn không xứng xách dép cho Tần Ý Nùng, chỉ là diễn viên vô danh tiểu tốt!
        
        Có phóng viên nhiều chuyện lần lượt phỏng vấn hai người về ấn tượng với đối phương.
        `,
        total_chapper: 4,
        author: "Huyền Tiên",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `lam-can.jpg`,
        view: 0,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tội án An Cách Nhĩ - Ám Dạ Thiên",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 40,
        author: "Nhĩ Nhã",
        status_approve: false,
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
        name: "Làm càn",
        description: `Đường Nhược Dao chỉ mới 22 tuổi đã giành được giải thưởng Nữ diễn viên chính xuất sắc nhất, tiền đồ vô hạn. Ngày hôm sau truyền thông kéo nhau đưa tin, gọi cô bằng cái tên mĩ miều “Tiểu Tần Ý Nùng.”

        Fan của Đường Nhược Dao vô cùng tức giận, khuôn mặt Tần Ý Nùng hại nước hại dân, danh tiếng trong giới giải trí vô cùng tệ hại, bất luận trai gái chay mặn đều không buông tha, nghe đồn nửa giới giải trí đều là nhân tình của cô ta, cô ta còn chưa kết hôn đã sinh con, con những mấy tuổi rồi. Truyền thông vô lương tâm, chà đạp thần tượng của chúng tôi!
        
        Fan của Tần Ý Nùng cũng đáp trả, danh hiệu Ảnh hậu nhà tôi trong nước ngoài nước cầm nhũn tay rồi, Đường Nhược Dao còn không xứng xách dép cho Tần Ý Nùng, chỉ là diễn viên vô danh tiểu tốt!
        
        Có phóng viên nhiều chuyện lần lượt phỏng vấn hai người về ấn tượng với đối phương.
        `,
        total_chapper: 4,
        author: "Huyền Tiên",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `lam-can.jpg`,
        view: 0,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tội án An Cách Nhĩ - Ám Dạ Thiên",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 40,
        author: "Nhĩ Nhã",
        status_approve: false,
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
        name: "Làm càn",
        description: `Đường Nhược Dao chỉ mới 22 tuổi đã giành được giải thưởng Nữ diễn viên chính xuất sắc nhất, tiền đồ vô hạn. Ngày hôm sau truyền thông kéo nhau đưa tin, gọi cô bằng cái tên mĩ miều “Tiểu Tần Ý Nùng.”

        Fan của Đường Nhược Dao vô cùng tức giận, khuôn mặt Tần Ý Nùng hại nước hại dân, danh tiếng trong giới giải trí vô cùng tệ hại, bất luận trai gái chay mặn đều không buông tha, nghe đồn nửa giới giải trí đều là nhân tình của cô ta, cô ta còn chưa kết hôn đã sinh con, con những mấy tuổi rồi. Truyền thông vô lương tâm, chà đạp thần tượng của chúng tôi!
        
        Fan của Tần Ý Nùng cũng đáp trả, danh hiệu Ảnh hậu nhà tôi trong nước ngoài nước cầm nhũn tay rồi, Đường Nhược Dao còn không xứng xách dép cho Tần Ý Nùng, chỉ là diễn viên vô danh tiểu tốt!
        
        Có phóng viên nhiều chuyện lần lượt phỏng vấn hai người về ấn tượng với đối phương.
        `,
        total_chapper: 4,
        author: "Huyền Tiên",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `lam-can.jpg`,
        view: 0,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tội án An Cách Nhĩ - Ám Dạ Thiên",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 40,
        author: "Nhĩ Nhã",
        status_approve: false,
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
        name: "Làm càn",
        description: `Đường Nhược Dao chỉ mới 22 tuổi đã giành được giải thưởng Nữ diễn viên chính xuất sắc nhất, tiền đồ vô hạn. Ngày hôm sau truyền thông kéo nhau đưa tin, gọi cô bằng cái tên mĩ miều “Tiểu Tần Ý Nùng.”

        Fan của Đường Nhược Dao vô cùng tức giận, khuôn mặt Tần Ý Nùng hại nước hại dân, danh tiếng trong giới giải trí vô cùng tệ hại, bất luận trai gái chay mặn đều không buông tha, nghe đồn nửa giới giải trí đều là nhân tình của cô ta, cô ta còn chưa kết hôn đã sinh con, con những mấy tuổi rồi. Truyền thông vô lương tâm, chà đạp thần tượng của chúng tôi!
        
        Fan của Tần Ý Nùng cũng đáp trả, danh hiệu Ảnh hậu nhà tôi trong nước ngoài nước cầm nhũn tay rồi, Đường Nhược Dao còn không xứng xách dép cho Tần Ý Nùng, chỉ là diễn viên vô danh tiểu tốt!
        
        Có phóng viên nhiều chuyện lần lượt phỏng vấn hai người về ấn tượng với đối phương.
        `,
        total_chapper: 4,
        author: "Huyền Tiên",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `lam-can.jpg`,
        view: 0,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tội án An Cách Nhĩ - Ám Dạ Thiên",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 40,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 0,
        id_user: 2,
        deleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
   
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('stories', null, {});
  }
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("stories", [
      {
        name: "TỘI ÁI AN CÁCH NHĨ – ÁM DẠ THIÊN",
        description:
          "Là câu chuyện về chó hoang bị vứt bỏ cùng trinh thám kiêm nghệ thuật gia đã thu nhận con chó hoang đó",
        total_chapper: 40,
        author: "Nhĩ Nhã",
        status_approve: false,
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
        total_chapper: 40,
        author: "Nhĩ Nhã",
        status_approve: false,
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
        total_chapper: 40,
        author: "Nhĩ Nhã",
        status_approve: false,
        status_chapter: false,
        classifi: 0,
        image: `image44.png`,
        view: 0,
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
