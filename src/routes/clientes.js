import express from "express";
import clientesController from "../controllers/clientes";
const router = express.Router();

// GET
router.get("/", clientesController.list);

router.get("/:email", clientesController.list);

// POST
router.post("/", clientesController.add);

// PUT
router.put("/:email", clientesController.update);

// DELETE
router.delete("/:email", clientesController.remove);

export default router;