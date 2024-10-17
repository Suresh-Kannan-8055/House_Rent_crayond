'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('select_qutations', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement:true,
      },
      quotation_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'quotation_details',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      unit_details_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'master_unit_details',
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
    await queryInterface.dropTable('select_qutations');
  }
};