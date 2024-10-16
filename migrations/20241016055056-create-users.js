'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement:true,
      },
      name: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      phone_number: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      email: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      role: {
        type: Sequelize.INTEGER,
        references:{
          model:'master_user_roles',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      user_status: {
        type: Sequelize.INTEGER,
        references:{
          model:'master_user_statuses',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};