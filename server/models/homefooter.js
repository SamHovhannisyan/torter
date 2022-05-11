'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomeFooter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HomeFooter.init({
    titleHy: DataTypes.STRING,
    titleRu: DataTypes.STRING,
    titleEn: DataTypes.STRING,
    subTitleHy: DataTypes.STRING,
    subTitleRu: DataTypes.STRING,
    subTitleEn: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HomeFooter',
  });
  return HomeFooter;
};