'use strict';
const data = require('../utils/data/data').termData
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TermsData', data, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('TermsData', null, {});

  }
};
