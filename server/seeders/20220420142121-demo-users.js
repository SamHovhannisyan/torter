'use strict';
const users = require("../utils/data/data").users
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', users, {});
    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('Users', null, {});
    }
};
