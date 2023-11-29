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
    },
    {
      name: 'Xuyên không',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Xuyên nhanh',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ngược',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sủng',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Quan trường',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dị năng',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'trinh thám',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Trọng sinh',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Lịch sử',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Quân sự',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dị giới',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Hệ Thống',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Võng du',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
