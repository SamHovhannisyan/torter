'use strict';
const aboutus = require('../utils/data/data').aboutUs
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('AboutUs', aboutus, {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('AboutUs', null, {});
  }
};
