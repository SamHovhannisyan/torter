'use strict';
const data = require('../utils/data/data').aboutUsBanner
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AboutUsBanners', data, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AboutUsBanners', null, {});
  }
}