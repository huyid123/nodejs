'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_detail extends Model {
    static associate(models) {
      order_detail.belongsTo(models.user, {
        foreignKey: 'user_id',
        as: 'user'
      }),
      order_detail.belongsTo(models.product, {
        foreignKey: 'product_id',
        as: 'product'
      })
      order_detail.belongsTo(models.order, {
        foreignKey: 'order_id',
        as: 'order'
      })
    }
  };
  order_detail.init({
    order_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    total_price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'order-detail',
  });
  return order_detail;
};