'use strict';
const data = require('../utils/data/data').contactus
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('ContactUs', data, {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ContactUs', null, {});
  }
};
