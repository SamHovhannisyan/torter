'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductFooter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductFooter.init({
    titleHy: DataTypes.STRING,
    titleRu: DataTypes.STRING,
    titleEn: DataTypes.STRING,
    subTitleHy: DataTypes.STRING,
    subTitleRu: DataTypes.STRING,
    subTitleEn: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductFooter',
  });
  return ProductFooter;
};