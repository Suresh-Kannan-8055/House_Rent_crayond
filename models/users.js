'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.master_user_roles, { foreignKey: 'role' });
      this.belongsTo(models.master_user_statuses, { foreignKey: 'user_status' });
    }
  }
  users.init({
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
  }, {
    sequelize,
    modelName: 'users',
    createdAt:true,
    updatedAt:true
  });
  return users;
};