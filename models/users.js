'use strict';
const { Model, Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(199),
      allowNull: true,
    },
    birth_day: {
      type: DataTypes.STRING(199),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(199),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.STRING(199),
      allowNull: true,
    },
    latitude: {
      type: DataTypes.STRING(199),
      allowNull: true,
    },
    biography: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: false,
    },
    frame: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    role: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    banned: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    verified: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    agencyId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resellerId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    businessDeveloperId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    moderationId: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    official: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: ""
    },
    isSuperAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: ""
    },
    pushNotificationToken: {
      type: DataTypes.STRING,
      allowNull: true,
    
    },
    stripeCustomerId: {
      type: DataTypes.STRING,
      allowNull: true,
    
    }
  }, {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
  });

  return User;
};
