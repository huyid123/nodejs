'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    static associate(models) {
      order.belongsTo(models.user, {
        foreignKey: 'user_id',
        as: 'user'
      })
    }
  };
  order.init({
    user_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};