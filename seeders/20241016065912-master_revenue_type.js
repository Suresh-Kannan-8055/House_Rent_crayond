'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_revenue_types', [
      {
        id:1,
        name: 'Lease',
      },
      {
        id:2,
        name: 'Sales',
      },
      {
        id:3,
        name: 'Manage',
      },
      {
        id:4,
        name: 'Stay',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_revenue_types', null, {});
  }
};
