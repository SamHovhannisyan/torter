'use strict';
const data = require('../utils/data/data').detailFooter
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DetailFooters', data, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('DetailFooters', null, {});

  }
};
