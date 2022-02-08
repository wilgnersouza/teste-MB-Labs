"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Eventos", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			nomeEvento: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			dataEvento: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			localEvento: {
				type: Sequelize.STRING,
			},
			qtdLote: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			organizadorEmail: {
				type: Sequelize.STRING,
				allowNull: false,
				references: { model: "Organizadores", key: "email" },
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
		await queryInterface.dropTable("Eventos");
	},
};
