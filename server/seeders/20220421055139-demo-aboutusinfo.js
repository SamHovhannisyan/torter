'use strict';
const aboutusInfo = require('../utils/data/data').aboutUsInfo
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('AboutUsInfos', aboutusInfo, {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('AboutUsInfos', null, {});
  }
};
