'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomeBanner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HomeBanner.init({
    titleHy: DataTypes.STRING,
    titleEn: DataTypes.STRING,
    titleRu: DataTypes.STRING,
    subTitleHy: DataTypes.STRING,
    subTitleEn: DataTypes.STRING,
    subTitleRu: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'HomeBanner',
  });
  return HomeBanner;
};