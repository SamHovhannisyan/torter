'use strict';
const data = require('../utils/data/data').chooseData
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Chooses', data, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Chooses', null, {});

  }
};
