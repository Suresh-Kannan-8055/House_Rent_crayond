'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_tax_group extends Model {
    static associate(models) {
      this.hasMany(models.primary_pricings,{foreignKey:"tax_group_id"})
      this.hasMany(models.secondary_pricings,{foreignKey:"tax_group_id"})
      this.hasMany(models.one_time_charges,{foreignKey:"tax_group_id"})
      this.hasMany(models.refundables,{foreignKey:"tax_group_id"})
      this.hasMany(models.inventory_items,{foreignKey:"tax_group_id"})
      this.hasMany(models.parking_slots,{foreignKey:"tax_group_id"})    }
  }
  master_tax_group.init({
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
    modelName: 'master_tax_groups',
    createdAt:false,
    updatedAt:false,
  });
  return master_tax_group;
};