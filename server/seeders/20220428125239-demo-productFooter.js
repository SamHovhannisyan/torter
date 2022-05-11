'use strict';
const data = require('../utils/data/data').productFooter
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductFooters', data, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('ProductFooters', null, {});

  }
};
