'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AboutUsBanner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AboutUsBanner.init({
    titleHy: DataTypes.STRING,
    titleRu: DataTypes.STRING,
    titleEn: DataTypes.STRING,
    subTititleHy: DataTypes.STRING,
    subTitleRu: DataTypes.STRING,
    subTitleEn: DataTypes.STRING,
    image: DataTypes.STRING,
    cloudinary_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AboutUsBanner',
  });
  return AboutUsBanner;
};