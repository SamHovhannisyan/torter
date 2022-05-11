'use strict';
const data = require('../utils/data/data').aboutFooter
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AboutFooters', data, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('AboutFooters', null, {});

  }
};
