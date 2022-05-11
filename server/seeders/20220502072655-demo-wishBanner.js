'use strict';
const data = require('../utils/data/data').wishBanner
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('WishBanners', data, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('WishBanners', null, {});

  }
};
