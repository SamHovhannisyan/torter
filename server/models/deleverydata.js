'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeleveryData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DeleveryData.init({
    subjectHy: DataTypes.STRING,
    subjectRu: DataTypes.STRING,
    subjectEn: DataTypes.STRING,
    answerHy: DataTypes.STRING,
    answerRu: DataTypes.STRING,
    answerEn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DeleveryData',
  });
  return DeleveryData;
};