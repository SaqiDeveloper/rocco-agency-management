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
    phone: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    SSN: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    user_account_number: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(199),
      allowNull: false,
    },
    pin_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    is_subscribed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    id_front_pic: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_back_pic: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    is_docs_verified: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    verification_desc: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    device_token: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    my_referel_code: {
      type: DataTypes.STRING,
      defaultValue: () => {
        const timestamp = Date.now().toString();
        return 'REF-' + timestamp.slice(-8);
      },
    },
    by_referel: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
  }, {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
    hooks: {
      beforeUpdate: (user, options) => {
        user.updatedAt = Sequelize.literal('CURRENT_TIMESTAMP');
      }
    },
  });

  return User;
};
