'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AboutUs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titleHy: {
        type: Sequelize.STRING
      },
      titleEn: {
        type: Sequelize.STRING
      },
      titleRu: {
        type: Sequelize.STRING
      },
      textHy: {
        type: Sequelize.STRING(1234)
      },
      textEn: {
        type: Sequelize.STRING(1234)
      },
      textRu: {
        type: Sequelize.STRING(1234)
      },
      images:Sequelize.STRING(1234),
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
    await queryInterface.dropTable('AboutUs');
  }
};