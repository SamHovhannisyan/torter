'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TermsData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subjectHy: {
        type: Sequelize.STRING
      },
      subjectRu: {
        type: Sequelize.STRING
      },
      subjectEn: {
        type: Sequelize.STRING
      },
      answerHy: {
        type: Sequelize.STRING
      },
      answerRu: {
        type: Sequelize.STRING
      },
      answerEn: {
        type: Sequelize.STRING
      },
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
    await queryInterface.dropTable('TermsData');
  }
};