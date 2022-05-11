'use strict';
const admins = require('../utils/data/data').admins
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Admins', admins, {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Admins', null, {});
    }
};
