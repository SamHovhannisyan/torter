'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    user_id: DataTypes.STRING,
    product_id:DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    addres: DataTypes.STRING,
    apartament: DataTypes.STRING,
    state: DataTypes.STRING,
    delevery: DataTypes.STRING,
    notes: DataTypes.STRING,
    orderNumber: DataTypes.STRING,
    productDescription: DataTypes.STRING,
    deleveryDate:DataTypes.STRING,
    deleveryTime:DataTypes.STRING,
    currency:DataTypes.STRING,
    additions:DataTypes.STRING,
    status:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });

  let User = sequelize.define("User");
  Order.belongsTo(User, {
    foreignKey: "user_id",
  });

  let Product = sequelize.define("Product");
  Order.belongsTo(Product, {
    foreignKey: "product_id",
  });

  return Order;
};