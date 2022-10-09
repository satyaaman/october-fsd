'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.category,{
        foreignKey: 'categoryId'
      });
      this.belongsToMany(models.order,{
        through: models.order_product
      })
    }
  }
  product.init({
    name: DataTypes.STRING,
    range: DataTypes.INTEGER,
    review: DataTypes.STRING,
    categoryId:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};