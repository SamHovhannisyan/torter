'use strict';
const contacts = require('../utils/data/data').contacts
module.exports = {
  async up (queryInterface, Sequelize) {
 await queryInterface.bulkInsert('Contacts', contacts, {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Contacts', null, {});
  }
};
