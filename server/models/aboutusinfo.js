'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AboutUsInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AboutUsInfo.init({
    titleHy: DataTypes.STRING,
    titleEn: DataTypes.STRING,
    titleRu: DataTypes.STRING,
    textHy: DataTypes.STRING(1234),
    textEn: DataTypes.STRING(1234),
    textRu: DataTypes.STRING(1234),
    image:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'AboutUsInfo',
  });
  return AboutUsInfo;
};