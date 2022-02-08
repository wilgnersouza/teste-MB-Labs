import { isCpf } from "../utils";

("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Clientes extends Model {
		static associate(models) {
			this.hasMany(models.Ingressos, { foreignKey: "clienteEmail", sourceKey: "email", as: "ingressos" });
		}
	}
	Clientes.init(
		{
			email: {
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false,
				validate: {
					isEmail: true,
				},
			},
			senha: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			nome: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isAlpha: true,
					isNome(value) {
						if (value.split(" ").length < 2) {
							throw new Error(
								"Nome inválido (necessita pelo menos um nome e um sobrenome)"
							);
						}
					},
				},
			},
			cpf: {
				type: DataTypes.STRING,
				validate: {
					isNumeric: true,
					len: [11, 11],
					isValid(value) {
						if (!isCpf(value)) {
							throw new Error("CPF inválido");
						}
					},
				},
			},
			telefone: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Clientes",
		}
	);
	return Clientes;
};
