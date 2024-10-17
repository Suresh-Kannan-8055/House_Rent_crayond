'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_unit_details extends Model {
    static associate(models) {
      this.belongsTo(models.users,{foreignKey:"deleted_by"})
      this.hasMany(models.master_unit_images,{foreignKey:"unit_id"})
      this.hasMany(models.select_qutations,{foreignKey:"unit_details_id"})
      this.hasMany(models.unit_customises,{foreignKey:"unit_id"})
    }
  }
  master_unit_details.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement:true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull:false,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
    },
    sub_name: {
      type: Sequelize.STRING,
      allowNull:false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull:false,
    },
    bed_room_count: {
      type: Sequelize.INTEGER,
      allowNull:false,
    },
    wash_room_count: {
      type: Sequelize.INTEGER,
      allowNull:false,
    },
    square_feet: {
      type: Sequelize.INTEGER,
      allowNull:false,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue:true
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
    modelName: 'master_unit_details',
    createdAt:true,
    updatedAt:true
  });
  return master_unit_details;
};