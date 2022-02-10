"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Eventos extends Model {
		static associate(models) {
			this.belongsTo(models.Organizadores, { foreignKey: "organizadorEmail", targetKey: "email", as: "organizador" });
			this.hasMany(models.Lotes, { foreignKey: "eventoId", sourceKey: "id", as: "lotes" });
		}
	}
	Eventos.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			nomeEvento: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			dataEvento: {
				type: DataTypes.DATE,
				allowNull: false,
				validate: {
					isDate: true,
				},
			},
			localEvento: DataTypes.STRING,
			
			qtdLote: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					isNumeric: true,
				},
			},
			organizadorEmail: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Eventos",
		}
	);
	return Eventos;
};
