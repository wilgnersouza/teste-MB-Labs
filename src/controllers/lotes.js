import { Lotes } from '../models';
import lotes from '../models/lotes';

async function list(req, res) {
	try {
		const { id } = req.params;

		if (id) {
			const lote = await Lotes.findByPk(id);

			if (lote) {
				res.send(lote);
			}

			res.status(404).json({ message: "Lote não encontrado" });
		} else {
			res.send(await Lotes.findAll());
		}
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

async function add(req, res) {
	try {
		const { id } = req.body; 
		const lote = await Lotes.findByPk(id);

		if (!lote){
			const lote = await lote.create({ ...req.body })
			const response = {
				message: "Lote adicionado com sucesso",
				lote: lote
		};

		res.status(200).json(response);
		}else{
			res.status(400).json({ message: "Lote já cadastrado."})
		}
	
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

async function update(req, res) {
	try {
		const { id } = req.params;
		const lote = await Lotes.findByPk(id);

		if (lote) {
			var body = req.body;
			delete body.id;

			await lote.update({ ...body }).then(() => {
				const response = {
					message: "Lote atualizado com sucesso",
					lote: lote
				};
		
				res.status(200).json(response);
			});
		}

		res.status(404).json({ message: "Lote nao encontrado" });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

async function remove(req, res) {
	try {
		const { id } = req.params;
		const lote = await Lotes.findByPk(id);

		if (lote) {
			await lote.destroy().then(() => {
				res.status(200).json({ message: "Lote removido com sucesso" });
			});
		}

		res.status(404).json({ message: "Lote não encontrado" });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
}


export default { list, add, update, remove };