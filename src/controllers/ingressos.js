import { Ingressos } from "../models/";

async function list(req, res) {
	try {
		const { id } = req.params;

		if (id) {
			const ingresso = await Ingressos.findByPk(id);

			if (ingresso) {
				res.send(ingresso);
			}

			res.status(404).json({ message: "Ingresso não encontrado" });
		} else {
			res.send(await Ingressos.findAll());
		}
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

async function add(req, res) {
	try {
		const { id } = req.body; 
		const ingresso = await Ingressos.findByPk(id);

		if (!ingresso){
			const ingresso = await Ingressos.create({ ...req.body })
			const response = {
				message: "Ingresso vendido com sucesso",
				ingresso: ingresso
		};

		res.status(200).json(response);
		}else{
			res.status(400).json({ message: "Ingresso já comprado."})
		}

		
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

async function remove(req, res) {
	try {
		const { id } = req.params;
		const ingresso = await Ingressos.findByPk(id);

		if (ingresso) {
			await ingresso.destroy().then(() => {
				res.status(200).json({ message: "Ingresso removido com sucesso" });
			});
		}

		res.status(404).json({ message: "Ingresso não encontrado" });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}


export default { list, add, remove };
