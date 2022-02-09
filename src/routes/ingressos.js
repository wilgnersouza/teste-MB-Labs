import express from "express";
import ingressosController from "../controllers/ingressos";
const router = express.Router();

// GET
router.get("/", ingressosController.list);

router.get("/:id", ingressosController.list);

// POST
router.post("/", ingressosController.add);

// DELETE
router.delete("/:id", ingressosController.remove);

export default router;