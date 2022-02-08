"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Lotes", {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			valor: {
				type: Sequelize.DECIMAL,
				allowNull: false,
			},
			tipoLote: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			qtdIngresso: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			eventoId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "Eventos", key: "id" },
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
		await queryInterface.dropTable("Lotes");
	},
};
