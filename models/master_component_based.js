"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class master_component_based extends Model {
    static associate(models) {
      this.hasMany(models.primary_pricings, { foreignKey: "component_based_id" });
      this.hasMany(models.secondary_pricings, { foreignKey: "component_based_id" });
      this.hasMany(models.one_time_charges, { foreignKey: "component_based_id" });
      this.hasMany(models.refundables, { foreignKey: "component_based_id" });
      this.hasMany(models.parking_slots, { foreignKey: "component_based_id" });
    }
  }
  master_component_based.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "master_component_baseds",
      createdAt: false,
      updatedAt: false,
    }
  );
  return master_component_based;
};
