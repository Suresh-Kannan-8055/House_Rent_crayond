'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('unit_customises', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement:true,
      },
      unit_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'master_unit_details',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      primary_pricing_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'primary_pricings',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      secondary_pricing_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'secondary_pricings',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      one_time_charges_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'one_time_charges',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      refundable_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'refundables',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      inventory_items_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'inventory_items',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      parking_slot_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'parking_slots',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      created_by: {
        type: Sequelize.INTEGER,
        references:{
          model:'users',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }, 
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_by: {
        type: Sequelize.INTEGER,
        references:{
          model:'users',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }, 
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('unit_customises');
  }
};