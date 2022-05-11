'use strict';
const data = require('../utils/data/data').delevery
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Deleveries', data, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Deleveries', null, {});

  }
};
