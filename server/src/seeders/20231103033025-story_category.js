'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('story_categories', [{
      id_category: 3,
      id_story: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('story_categories', null, {});
  }
};
