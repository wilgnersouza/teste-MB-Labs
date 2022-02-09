"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Organizadores", {
			email: {
				type: Sequelize.STRING,
				primaryKey: true,
				allowNull: false,
			},
			nome: {
				type: Sequelize.STRING,
				allowNull: false
			},
			senha: {
				type: Sequelize.STRING,
				allowNull: false
			},
			tipoOrg: {
				type: Sequelize.STRING,
				allowNull: false,
				
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
		await queryInterface.dropTable("Organizadores");
	},
};
