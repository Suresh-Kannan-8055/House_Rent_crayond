'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_pricing_component extends Model {
    static associate(models) {
      this.hasMany(models.primary_pricings,{foreignKey:"pricing_component_id"})
      this.hasMany(models.secondary_pricings,{foreignKey:"pricing_component_id"})
      this.hasMany(models.one_time_charges,{foreignKey:"pricing_component_id"})
      this.hasMany(models.refundables,{foreignKey:"pricing_component_id"})
      this.hasMany(models.inventory_items,{foreignKey:"pricing_component_id"})
      this.hasMany(models.parking_slots,{foreignKey:"pricing_component_id"})
    }
  }
  master_pricing_component.init({
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
    modelName: 'master_pricing_components',
    createdAt:false,
    updatedAt:false,
  });
  return master_pricing_component;
};