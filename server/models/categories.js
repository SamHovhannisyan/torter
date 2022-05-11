'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Categories extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Categories.init({
        nameHy: DataTypes.STRING,
        nameRu: DataTypes.STRING,
        nameEn: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Categories',
    });

    let Product = sequelize.define("Products");
    Categories.belongsTo(Product, {
        foreignKey: "id",
    });
    return Categories;
};