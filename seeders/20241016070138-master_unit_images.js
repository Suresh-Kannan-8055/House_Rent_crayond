"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("master_unit_images", [
      {
        id: 1,
        unit_id:1,
        name: "https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.jpg?s=612x612&w=0&k=20&c=HOCqYY0noIVxnp5uQf1MJJEVpsH_d4WtVQ6-OwVoeDo=",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        unit_id:1,
        name: "https://media.istockphoto.com/id/1449364000/photo/minimalist-style-tiny-room.jpg?s=612x612&w=0&k=20&c=uokTOpJl8Hoc4HGqJPicYjy8SBMwCEWkGLUhhvJYgTA=",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        unit_id:1,
        name: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024,h_683/https://www.essentialhome.eu/inspirations/wp-content/uploads/2022/07/Luxury-bedroom-home-decor-Beasley-and-Henley-1024x683.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("master_unit_images", null, {});
  },
};
