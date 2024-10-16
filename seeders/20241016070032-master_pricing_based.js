'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_pricing_baseds', [
      {
        id:1,
        name: 'Montly',
      },
      {
        id:2,
        name: 'Total',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_pricing_baseds', null, {});
  }
};
