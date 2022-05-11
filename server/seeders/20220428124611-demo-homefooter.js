'use strict';
const data = require('../utils/data/data').homeFooter
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('HomeFooters', data, {});
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('HomeFooters', null, {});

  }
};
