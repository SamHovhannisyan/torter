'use strict';
const data = require('../utils/data/data').detailBanner
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DetailBanners', data, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('DetailBanners', null, {});

  }
};
