'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    static associate(models) {
      category.hasMany(models.product, {
        foreignKey: 'category_id',
        as: 'product'
      })
    }
  };
  category.init({
    type: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};