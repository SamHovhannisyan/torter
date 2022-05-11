'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TermsData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TermsData.init({
    subjectHy: DataTypes.STRING,
    subjectRu: DataTypes.STRING,
    subjectEn: DataTypes.STRING,
    answerHy: DataTypes.STRING,
    answerRu: DataTypes.STRING,
    answerEn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TermsData',
  });
  return TermsData;
};