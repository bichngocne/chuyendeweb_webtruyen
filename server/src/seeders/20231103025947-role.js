'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('role', [{
      name: 'reader',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'poster',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('role', null, {});
  }
};
