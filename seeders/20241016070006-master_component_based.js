'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_component_baseds', [
      {
        id:1,
        name: 'Amount',
      },
      {
        id:2,
        name: 'UOM',
      },
      {
        id:3,
        name: '%',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_component_baseds', null, {});
  }
};
