'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    static associate(models) {
    
     product.belongsTo(models.category, {
       foreignKey: 'category_id',
       as: 'category'
     })
    }
  };
  product.init({
    category_id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};