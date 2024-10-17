'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_user_statuses extends Model {
    static associate(models) {
      this.hasMany(models.users,{foreignKey:"role" ,as:"role"})
    }
  }
  master_user_statuses.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue:true
    },
  }, {
    sequelize,
    modelName: 'master_user_statuses',
    createdAt:true,
    updatedAt:true
  });
  return master_user_statuses;
};