import { Organizadores } from '../models';

async function list(req, res) {
	try {
		const { email } = req.params;

		if (email) {
			const organizadores = await Organizadores.findByPk(email);

			if (organizadores) {
				res.send(organizadores);
			}

			res.status(404).json({ message: "Organizador não encontrado" });
		} else {
			res.send(await Organizadores.findAll());
		}
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

async function add(req, res) {
	try {
		const { email } = req.body; 
		const organizadores = await Organizadores.findByPk(email);

		if (!organizadores){
			const organizadores = await Organizadores.create({ ...req.body })
			const response = {
				message: "Organizador adicionado com sucesso",
				organizadores: organizadores
		};

		res.status(200).json(response);
		}else{
			res.status(400).json({ message: "organizador já cadastrado."})
		}
	
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

async function update(req, res) {
	try {
		const { email } = req.params;
		const organizador = await Organizadores.findByPk(email);

		if (organizador) {
			var body = req.body;
			delete body.id;

			await organizador.update({ ...body }).then(() => {
				const response = {
					message: "Organizador atualizado com sucesso",
					organizador: organizador
				};
		
				res.status(200).json(response);
			});
		}

		res.status(404).json({ message: "Organizador nao encontrado" });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

async function remove(req, res) {
	try {
		const { email } = req.params;
		const organizador = await Organizadores.findByPk(email);

		if (organizador) {
			await organizador.destroy().then(() => {
				res.status(200).json({ message: "Organizador removido com sucesso" });
			});
		}

		res.status(404).json({ message: "Organizador não encontrado" });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}


export default { list, add, update, remove };