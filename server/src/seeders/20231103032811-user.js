'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      name: 'reader1',
      email: 'reader1@gmail.com',
      password: '123456',
      id_role:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'poter1',
      email: 'poter1@gmail.com',
      password: '1234567',
      id_role:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'admin1',
      email: 'admin1@gmail.com',
      password: '12345678',
      id_role:3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
