'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class multiselect_amenities extends Model {
    static associate(models) {
      this.belongsTo(models.master_amenities,{foreignKey:"amenity_id"})
      this.belongsTo(models.unit_customises,{foreignKey:"customization_id"})
      this.belongsTo(models.users,{foreignKey:"created_by"})
      this.belongsTo(models.users,{foreignKey:"updated_by"})
      this.belongsTo(models.users,{foreignKey:"deleted_by"})
    }
  }
  multiselect_amenities.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement:true,
    },
    amenity_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'master_amenities',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    customization_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'unit_customises',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    free_applicability: {
      type: Sequelize.BOOLEAN,
    },
    prize: {
      type: Sequelize.INTEGER,
      defaultValue:0,
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
    is_deleted: {
      type: Sequelize.BOOLEAN,
      defaultValue:false
    },
    deleted_by: {
      type: Sequelize.INTEGER,
      references:{
        model:'users',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }, 
    deleted_at: {
      type: Sequelize.DATE, 
      defaultValue:null
    }, 
  }, {
    sequelize,
    modelName: 'multiselect_amenities',
    createdAt:true,
    updatedAt:true
  });
  return multiselect_amenities;
};