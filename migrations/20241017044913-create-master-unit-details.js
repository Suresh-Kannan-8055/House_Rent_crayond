'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('master_unit_details', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement:true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
      },
      sub_name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      bed_room_count: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      wash_room_count: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      square_feet: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      is_delete: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      deleted_by: {
        type: Sequelize.INTEGER,
        defaultValue:null,
        references:{
          model:'users',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },  
      deleted_at: {
        type: Sequelize.DATE,
        defaultValue:null
      }, 
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('master_unit_details');
  }
};