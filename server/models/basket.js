'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Basket.init({
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    quantity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Basket',
  });


  let User = sequelize.define("User");
  Basket.belongsTo(User, {
    foreignKey: "user_id",
  });

  let Product = sequelize.define("Product");
  Basket.belongsTo(Product, {
    foreignKey: "product_id",
  });



  return Basket;
};