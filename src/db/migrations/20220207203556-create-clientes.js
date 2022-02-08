"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Clientes", {
			email: {
				type: Sequelize.STRING,
				primaryKey: true,
				allowNull: false,
			},
			senha: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			nome: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			cpf: {
				type: Sequelize.STRING
			},
			telefone: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("NOW")
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("NOW")
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Clientes");
	},
};
