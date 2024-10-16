'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_amenities', [
      {
        id:1,
        name: 'Swimming Pool',
        price:50,
        start_date:"2024-10-08",
        end_date:"2024-10-10",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        id:2,
        name: 'Cricket Net',
        price:30,
        start_date:"2024-10-08",
        end_date:"2024-10-10",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        id:3,
        name: 'Tennis Ground',
        price:20,
        start_date:"2024-10-08",
        end_date:"2024-10-10",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        id:4,
        name: 'Volley Ball Ground',
        price:20,
        start_date:"2024-10-08",
        end_date:"2024-10-10",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_amenities', null, {});
  }
};
