import { Clientes } from "../models/";

async function list(req, res) {
	try {
		const { email } = req.params;

		if (email) {
			const cliente = await Clientes.findByPk(email);

			if (cliente) {
				res.send(cliente);
			}

			res.status(404).json({ message: "Cliente não encontrado" });
		} else {
			res.send(await Clientes.findAll());
		}
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
}



export default { list/*, add, update, remove*/ };
