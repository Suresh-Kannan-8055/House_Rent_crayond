"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class master_unit_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  master_unit_images.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      unit_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'master_unit_details',
          key:'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      name: {
        type: Sequelize.TEXT,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "master_unit_images",
      createdAt: true,
      updatedAt: true,
    }
  );
  return master_unit_images;
};
