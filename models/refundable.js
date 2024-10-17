'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class refundable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  refundable.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement:true,
    },
    revenue_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'master_revenue_type',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    pricing_component_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'master_pricing_component',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    tax_group_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'master_tax_group',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    component_based_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'master_component_based',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    discount_percent: {
      type: Sequelize.INTEGER,
      defaultValue:0,
    },
    discount_amount: {
      type: Sequelize.INTEGER,
      defaultValue:0,
    },
    total_prize: {
      type: Sequelize.DECIMAL(10, 2),
      defaultValue:0,
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
    modelName: 'refundables',
    createdAt:true,
    updatedAt:true    
  });
  return refundable;
};