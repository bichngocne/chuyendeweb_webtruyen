"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Comments", [
      {
        content: "hay",
        id_story: 1,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "hay",
        id_story: 2,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "hay",
        id_story: 2,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "hay",
        id_story: 2,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "hay",
        id_story: 2,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "hay",
        id_story: 2,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "hay",
        id_story: 2,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "hay",
        id_story: 2,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "hay",
        id_story: 2,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "hay",
        id_story: 2,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "hay",
        id_story: 2,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "hay",
        id_story: 2,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "hay",
        id_story: 2,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "hay",
        id_story: 2,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "hay",
        id_story: 2,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "hay",
        id_story: 2,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Comments", null, {});
  }
};
