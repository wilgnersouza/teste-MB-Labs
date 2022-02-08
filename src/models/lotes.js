"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Lotes extends Model {
		static associate(models) {
			this.belongsTo(models.Eventos, { foreignKey: "eventoId", targetKey: "id", as: "evento" });
			this.hasMany(models.Ingressos, { foreignKey: "loteId", sourceKey: "id", as: "ingressos" });
		}
	}
	Lotes.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			valor: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					isDecimal: true,
				},
			},
			tipoLote: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			qtdIngresso: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isNumeric: true,
				},
			},
			eventoId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			}
		},
		{
			sequelize,
			modelName: "Lotes",
		}
	);
	return Lotes;
};
