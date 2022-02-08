import express from "express";
import clientesController from "../controllers/clientes";
const router = express.Router();

// GET
router.get("/", clientesController.list);
router.get("/:email", clientesController.list);

// POST
//router.post("/", clientesController.add);

// PUT
//router.put("/:id", clientesController.update);

// DELETE
//router.delete("/:id", clientesController.remove);

export default router;