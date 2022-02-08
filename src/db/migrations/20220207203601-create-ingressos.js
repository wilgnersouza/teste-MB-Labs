"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Ingressos", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			loteId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "Lotes", key: "id" },
				onUpdate: "CASCADE"
			},
			clienteEmail: {
				type: Sequelize.STRING,
				allowNull: false,
				references: { model: "Clientes", key: "email" },
				onUpdate: "CASCADE"
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
		await queryInterface.dropTable("Ingressos");
	},
};
