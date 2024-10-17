'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_pricing_based extends Model {
    static associate(models) {
      this.hasMany(models.inventory_items,{foreignKey:"pricing_based_id"})
    }
  }
  master_pricing_based.init({
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
    }
  }, {
    sequelize,
    modelName: 'master_pricing_baseds',
    createdAt:false,
    updatedAt:false,
  });
  return master_pricing_based;
};