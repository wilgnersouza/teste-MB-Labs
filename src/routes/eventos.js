import express from "express";
import eventosController from "../controllers/eventos";
const router = express.Router();

// GET
router.get("/", eventosController.list);

router.get("/:id", eventosController.list);

// POST
router.post("/", eventosController.add);

// PUT
router.put("/:id", eventosController.update);

// DELETE
router.delete("/:id", eventosController.remove);

export default router;