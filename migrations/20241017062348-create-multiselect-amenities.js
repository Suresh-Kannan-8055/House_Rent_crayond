'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('multiselect_amenities', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement:true,
      },
      amenity_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'master_amenities',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      customization_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'unit_customises',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      free_applicability: {
        type: Sequelize.BOOLEAN,
      },
      prize: {
        type: Sequelize.INTEGER,
        defaultValue:0,
      },
      discount_percent: {
        type: Sequelize.INTEGER,
        defaultValue:0,
      },
      discount_amount: {
        type: Sequelize.INTEGER,
        defaultValue:0,
      },
      total_prize: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue:0,
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
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      deleted_by: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('multiselect_amenities');
  }
};