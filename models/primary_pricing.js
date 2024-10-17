'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class primary_pricing extends Model {
    static associate(models) {
      this.belongsTo(models.master_revenue_types,{foreignKey:"revenue_id"})
      this.belongsTo(models.master_tax_groups,{foreignKey:"tax_group_id"})
      this.belongsTo(models.master_pricing_components,{foreignKey:"pricing_component_id"})
      this.belongsTo(models.master_component_baseds,{foreignKey:"component_based_id"})
      this.belongsTo(models.users,{foreignKey:"created_by"})
      this.belongsTo(models.users,{foreignKey:"updated_by"})
      this.hasOne(models.unit_customises,{foreignKey:"primary_pricing_id"})
    }
  }
  primary_pricing.init({
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
        model:'master_revenue_types',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    pricing_component_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'master_pricing_components',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    tax_group_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'master_tax_groups',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    component_based_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'master_component_baseds',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    uom_value: {
      type: Sequelize.INTEGER,
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
    modelName: 'primary_pricings',
    createdAt:true,
    updatedAt:true
  });
  return primary_pricing;
};