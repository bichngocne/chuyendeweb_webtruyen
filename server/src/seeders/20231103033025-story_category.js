"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("story_categories", [
      {
        id_category: 3,
        id_story: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 1,
        id_story: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 3,
        id_story: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 1,
        id_story: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 3,
        id_story: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 1,
        id_story: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 3,
        id_story: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 1,
        id_story: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 3,
        id_story: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 1,
        id_story: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 3,
        id_story: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 1,
        id_story: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 3,
        id_story: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 1,
        id_story: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 3,
        id_story: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 1,
        id_story: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 3,
        id_story: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 1,
        id_story: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 3,
        id_story: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_category: 1,
        id_story: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("story_categories", null, {});
  },
};
