'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.STRING
            },
            product_id: {
                type: Sequelize.STRING
            },
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            addres: {
                type: Sequelize.STRING
            },
            apartament: {
                type: Sequelize.STRING
            },
            state: {
                type: Sequelize.STRING
            },
            delevery: {
                type: Sequelize.STRING
            },
            notes: {
                type: Sequelize.STRING
            },
            orderNumber: {
                type: Sequelize.STRING
            },
            productDescription: {
                type: Sequelize.STRING
            },
            deleveryDate:Sequelize.STRING,
            deleveryTime:Sequelize.STRING,
            currency:Sequelize.STRING,
            additions:Sequelize.STRING,
            status:Sequelize.STRING,
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Orders');
    }
};