'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class unit_customise extends Model {
    static associate(models) {
      this.belongsTo(models.master_unit_details,{foreignKey:"unit_id"})
      this.belongsTo(models.primary_pricings,{foreignKey:"primary_pricing_id"})
      this.belongsTo(models.secondary_pricings,{foreignKey:"secondary_pricing_id"})
      this.belongsTo(models.one_time_charges,{foreignKey:"one_time_charges_id"})
      this.belongsTo(models.refundables,{foreignKey:"refundable_id"})
      this.belongsTo(models.inventory_items,{foreignKey:"inventory_items_id"})
      this.belongsTo(models.parking_slots,{foreignKey:"parking_slot_id"})
      this.belongsTo(models.users,{foreignKey:"created_by"})
      this.belongsTo(models.users,{foreignKey:"updated_by"})
      this.hasMany(models.multiselect_amenities,{foreignKey:"customization_id"})
      this.hasMany(models.multiselect_utilities,{foreignKey:"customization_id"})
    }
  }
  unit_customise.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement:true,
    },
    unit_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'master_unit_details',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    primary_pricing_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'primary_pricings',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    secondary_pricing_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'secondary_pricings',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    one_time_charges_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'one_time_charges',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    refundable_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'refundables',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    inventory_items_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'inventory_items',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    parking_slot_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'parking_slots',
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
    updated_by: {
      type: Sequelize.INTEGER,
      references:{
        model:'users',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }, 
  }, {
    sequelize,
    modelName: 'unit_customises',
    createdAt:true,
    updatedAt:true
  });
  return unit_customise;
};