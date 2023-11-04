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
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('stories', null, {});
  }
};
