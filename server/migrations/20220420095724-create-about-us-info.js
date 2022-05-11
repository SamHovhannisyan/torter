'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AboutUsInfos', {
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
      image:Sequelize.STRING,
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
    await queryInterface.dropTable('AboutUsInfos');
  }
};