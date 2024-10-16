'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_utilities', [
      {
        id:1,
        name: 'Car Maintenance',
        price:50,
        start_date:"2024-10-08",
        end_date:"2024-10-10",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        id:2,
        name: 'Electricity Service',
        price:30,
        start_date:"2024-10-08",
        end_date:"2024-10-10",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        id:3,
        name: 'Water Service',
        price:20,
        start_date:"2024-10-08",
        end_date:"2024-10-10",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        id:4,
        name: 'Appliances Services',
        price:20,
        start_date:"2024-10-08",
        end_date:"2024-10-10",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_utilities', null, {});
  }
};
