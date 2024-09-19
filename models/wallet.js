"use strict";
const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Wallet.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      money: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      diamond: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rcoin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      userid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Wallet",
      tableName: "wallet",
      timestamps: false,
    }
  );

  return Wallet;
};
