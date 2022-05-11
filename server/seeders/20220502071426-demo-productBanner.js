'use strict';
const data = require('../utils/data/data').productBanner
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProcuctBanners', data, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('ProcuctBanners', null, {});

  }
};
