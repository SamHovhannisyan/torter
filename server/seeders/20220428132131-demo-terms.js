'use strict';
const data = require('../utils/data/data').terms
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Terms', data, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Terms', null, {});

  }
};
