import { Eventos } from '../models';

async function list(req, res) {
	try {
		const { id } = req.params;

		if (id) {
			const eventos = await Eventos.findByPk(id);

			if (eventos) {
				res.send(eventos);
			}

			res.status(404).json({ message: "Evento não encontrado" });
		} else {
			res.send(await Eventos.findAll());
		}
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

async function add(req, res) {
	try {
		const { id } = req.body; 
		const eventos = await Eventos.findByPk(id);

		if (!eventos){
			const eventos = await Eventos.create({ ...req.body })
			const response = {
				message: "Evento adicionado com sucesso",
				eventos: eventos
		};

		res.status(200).json(response);
		}else{
			res.status(400).json({ message: "Evento já cadastrado."})
		}
	
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

async function update(req, res) {
	try {
		const { id } = req.params;
		const eventos = await Eventos.findByPk(id);

		if (eventos) {
			var body = req.body;
			delete body.id;

			await eventos.update({ ...body }).then(() => {
				const response = {
					message: "Evento atualizado com sucesso",
					eventos: eventos
				};
		
				res.status(200).json(response);
			});
		}

		res.status(404).json({ message: "Evento nao encontrado" });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

async function remove(req, res) {
	try {
		const { id } = req.params;
		const evento = await Eventos.findByPk(id);

		if (evento) {
			await evento.destroy().then(() => {
				res.status(200).json({ message: "Evento removido com sucesso" });
			});
		}

		res.status(404).json({ message: "Evento não encontrado" });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}


export default { list, add, update, remove };