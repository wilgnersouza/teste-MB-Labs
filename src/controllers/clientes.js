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
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

async function add(req, res) {
	try {
		const { email } = req.body; 
		const cliente = await Clientes.findByPk(email);

		if (!cliente){
			const cliente = await Clientes.create({ ...req.body })
			const response = {
				message: "Cliente adicionado com sucesso",
				cliente: cliente
		};

		res.status(200).json(response);
		}else{
			res.status(400).json({ message: "email já cadastrado."})
		}

		
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

async function update(req, res) {
	try {
		const { email } = req.params;
		const cliente = await Clientes.findByPk(email);

		if (cliente) {
			var body = req.body;
			delete body.email;

			await cliente.update({ ...body }).then(() => {
				const response = {
					message: "Cliente atualizado com sucesso",
					cliente: cliente
				};
		
				res.status(200).json(response);
			});
		}

		res.status(404).json({ message: "Cliente nao encontrado" });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

async function remove(req, res) {
	try {
		const { email } = req.params;
		const cliente = await Clientes.findByPk(email);

		if (cliente) {
			await cliente.destroy().then(() => {
				res.status(200).json({ message: "Cliente removido com sucesso" });
			});
		}

		res.status(404).json({ message: "Cliente não encontrado" });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}


export default { list, add, update, remove };
