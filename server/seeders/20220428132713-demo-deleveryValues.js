'use strict';
const data = require('../utils/data/data').deleveryValues
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DeleveryValues', data, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('DeleveryValues', null, {});

  }
};
