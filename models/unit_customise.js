'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class unit_customise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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