'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const hashedPassword1 = await bcrypt.hash('123456', 10);
    const hashedPassword2 = await bcrypt.hash('1234567', 10);
    const hashedPassword3 = await bcrypt.hash('12345678', 10);

      return queryInterface.bulkInsert('users', [{
        name: 'reader1',
        email: 'reader1@gmail.com',
        password:hashedPassword1,
        id_role:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'poter1',
        email: 'poter1@gmail.com',
        password: hashedPassword2,
        id_role:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'admin1',
        email: 'admin1@gmail.com',
        password: hashedPassword3,
        id_role:3,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
