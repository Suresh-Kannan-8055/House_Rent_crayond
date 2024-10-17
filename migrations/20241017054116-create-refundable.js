'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('refundables', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement:true,
      },
      revenue_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'master_revenue_types',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      pricing_component_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'master_pricing_components',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      tax_group_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'master_tax_groups',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      component_based_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'master_component_baseds',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('refundables');
  }
};