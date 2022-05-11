'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeleveryValues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DeleveryValues.init({
    loacation: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DeleveryValues',
  });
  return DeleveryValues;
};