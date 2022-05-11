'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    nameHy: DataTypes.STRING,
    nameRu: DataTypes.STRING,
    nameEn: DataTypes.STRING,
    model: DataTypes.STRING,
    image: DataTypes.STRING(1234),
    price: DataTypes.INTEGER,
    descriptionHy: DataTypes.STRING(1234),
    descriptionRu: DataTypes.STRING(1234),
    descriptionEn: DataTypes.STRING(1234),
    category_id: DataTypes.INTEGER,
    cake_count:DataTypes.STRING,
    cake_price:DataTypes.STRING,
    cake_addition_name_hy:DataTypes.STRING,
    cake_addition_name_ru:DataTypes.STRING,
    cake_addition_name_en:DataTypes.STRING,
    cake_addition_price:DataTypes.STRING,
    long_description_hy:DataTypes.STRING(1234),
    long_description_ey:DataTypes.STRING(1234),
    long_description_en:DataTypes.STRING(1234),
    adition_info_hy:DataTypes.STRING(1234),
    adition_info_ru:DataTypes.STRING(1234),
    adition_info_en:DataTypes.STRING(1234),
    addition_info_value:DataTypes.STRING(1234)
  }, {
    sequelize,
    modelName: 'Product',
  });

  let Category = sequelize.define("Categories");
  Product.hasOne(Category, {
    foreignKey: "id",
  });

  let Basket = sequelize.define("Basket")
  Product.belongsTo(Basket, {
    foreignKey: "id"
  });

  let Order = sequelize.define("Order")
  Product.belongsTo(Order, {
    foreignKey: "id"
  });

  return Product;
};