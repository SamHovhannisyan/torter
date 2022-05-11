'use strict';
const data = require('../utils/data/data').deleveryData
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DeleveryData', data, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('DeleveryData', null, {});

  }
};
