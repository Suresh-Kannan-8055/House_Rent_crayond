'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('quotation_details', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement:true,
      },
      lead_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'users',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      lease_start: {
        type: Sequelize.DATE,
      },
      lease_end: {
        type: Sequelize.DATE,
      },
      rent_start: {
        type: Sequelize.DATE,
      },
      grase_period: {
        type: Sequelize.INTEGER,
      },
      total_amount: {
        type: Sequelize.DECIMAL(10, 2),
      },
      total_amount_qty: {
        type: Sequelize.INTEGER,
      },
      total_discount: {
        type: Sequelize.DECIMAL(10, 2),
      },
      discount_percent: {
        type: Sequelize.INTEGER,
      },
      total_refund: {
        type: Sequelize.DECIMAL(10, 2),
      },
      refund_percent: {
        type: Sequelize.INTEGER,
      },
      total_tax: {
        type: Sequelize.DECIMAL(10, 2),
      },
      total_tax_percent: {
        type: Sequelize.INTEGER,
      },
      quote_amount: {
        type: Sequelize.DECIMAL(10, 2),
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
    await queryInterface.dropTable('quotation_details');
  }
};