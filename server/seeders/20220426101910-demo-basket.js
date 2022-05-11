'use strict';
const data = require("../utils/data/data").basket
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Baskets', data, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Baskets', null, {});
  }
};
