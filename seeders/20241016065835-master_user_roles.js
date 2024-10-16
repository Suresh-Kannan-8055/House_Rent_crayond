'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('master_user_roles', [
      {
        id:1,
        name: 'Product Manager',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:2,
        name: 'FullStack Developer',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:3,
        name: 'Frontend Developer',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:4,
        name: 'Backend Developer',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_user_roles', null, {});
  }
};
