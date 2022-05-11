'use strict';
const data = require('../utils/data/data').basketBanner
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BasketBanners', data, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('BasketBanners', null, {});

  }
};
