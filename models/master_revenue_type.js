'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_revenue_type extends Model {
    static associate(models) {
      this.hasMany(models.primary_pricings,{foreignKey:"revenue_id"})
      this.hasMany(models.secondary_pricings,{foreignKey:"revenue_id"})
      this.hasMany(models.one_time_charges,{foreignKey:"revenue_id"})
      this.hasMany(models.refundables,{foreignKey:"revenue_id"})
      this.hasMany(models.inventory_items,{foreignKey:"revenue_id"})
      this.hasMany(models.parking_slots,{foreignKey:"revenue_id"})
    }
  }
  master_revenue_type.init({
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
    modelName: 'master_revenue_types',
    createdAt:false,
    updatedAt:false,
  });
  return master_revenue_type;
};