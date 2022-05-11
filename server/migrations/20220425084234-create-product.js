'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameHy: Sequelize.STRING,
      nameRu: Sequelize.STRING,
      nameEn: Sequelize.STRING,
      model: Sequelize.STRING,
      image: Sequelize.STRING(1234),
      price: Sequelize.INTEGER,
      descriptionHy: Sequelize.STRING(1234),
      descriptionRu: Sequelize.STRING(1234),
      descriptionEn: Sequelize.STRING(1234),
      category_id: Sequelize.INTEGER,
      cake_count:Sequelize.STRING,
      cake_price:Sequelize.STRING,
      cake_addition_name_hy:Sequelize.STRING,
      cake_addition_name_ru:Sequelize.STRING,
      cake_addition_name_en:Sequelize.STRING,
      cake_addition_price:Sequelize.STRING,
      long_description_hy:Sequelize.STRING(1234),
      long_description_ey:Sequelize.STRING(1234),
      long_description_en:Sequelize.STRING(1234),
      adition_info_hy:Sequelize.STRING(1234),
      adition_info_ru:Sequelize.STRING(1234),
      adition_info_en:Sequelize.STRING(1234),
      addition_info_value:Sequelize.STRING(1234),
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};