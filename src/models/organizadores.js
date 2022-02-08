"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Organizadores extends Model {
		static associate(models) {
			this.hasMany(models.Eventos, { foreignKey: "organizadorEmail", sourceKey: "email", as: "eventos" });
		}
	}
	Organizadores.init(
		{
			email: {
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false,
				validate: {
					isEmail: true,
				},
			},
			nome: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			senha: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [6, 16]
				},
			},
			tipoOrg: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Organizadores",
		}
	);
	return Organizadores;
};
