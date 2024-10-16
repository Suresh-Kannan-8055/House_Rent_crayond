'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_user_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.users,{foreignKey:"role" ,as:"role"})
    }
  }
  master_user_roles.init({
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
    modelName: 'master_user_roles',
    createdAt:true,
    updatedAt:true
  });
  return master_user_roles;
};