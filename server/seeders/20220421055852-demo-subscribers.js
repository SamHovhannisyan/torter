'use strict';
const subscribers = require("../utils/data/data").subscribers
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Subscribers', subscribers, {});

  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Subscribers', null, {});

  }
};
