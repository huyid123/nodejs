'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
    }
  };
  user.init({
    name: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    sdt: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};