"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("master_unit_details", [
      {
        id:1,
        name: "Jumeirah Estate",
        price: 1200,
        sub_name: "Jumeirah Estate",
        address: "Rubix Apartment, K Tower, Floor 1",
        bed_room_count: 2,
        wash_room_count: 2,
        square_feet: 2000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("master_unit_details", null, {});
  },
};
