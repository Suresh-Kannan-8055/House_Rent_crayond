'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class select_qutations extends Model {
    static associate(models) {
      this.belongsTo(models.quotation_details,{foreignKey:"quotation_id"})
      this.belongsTo(models.master_unit_details,{foreignKey:"unit_details_id"})
      this.belongsTo(models.users,{foreignKey:"created_by"})
      this.belongsTo(models.users,{foreignKey:"updated_by"})
      this.belongsTo(models.users,{foreignKey:"deleted_by"})
    }
  }
  select_qutations.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement:true,
    },
    quotation_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'quotation_details',
        key:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    unit_details_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:'master_unit_details',
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
    is_delete: {
      type: Sequelize.BOOLEAN,
      defaultValue:false
    },
    deleted_by: {
      type: Sequelize.INTEGER,
      defaultValue:null,
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
    modelName: 'select_qutations',
    createdAt:true,
    updatedAt:true
  });
  return select_qutations;
};