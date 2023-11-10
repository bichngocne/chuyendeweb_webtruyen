'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [{
      name: 'Ngôn tình',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kiếm hiệp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Đam mỹ',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
