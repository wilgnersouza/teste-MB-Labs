"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Ingressos extends Model {
		static associate(models) {
			this.belongsTo(models.Lotes, {
				foreignKey: "eventoId",
				targetKey: "id",
				as: "lote",
			});
			this.belongsTo(models.Clientes, {
				foreignKey: "clienteEmail",
				targetKey: "email",
				as: "cliente",
			});
		}
	}
	Ingressos.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			eventoId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			clienteEmail: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Ingressos",
		}
	);
	return Ingressos;
};
