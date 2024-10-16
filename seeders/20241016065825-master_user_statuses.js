'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('master_user_statuses', [{
        id:1,
        name: 'Active',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_user_statuses', null, {});
  }
};
