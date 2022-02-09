import express from "express";
import lotesController from "../controllers/lotes";
const router = express.Router();

// GET
router.get("/", lotesController.list);

router.get("/:id", lotesController.list);

// POST
router.post("/", lotesController.add);

// PUT
router.put("/:id", lotesController.update);

// DELETE
router.delete("/:id", lotesController.remove);

export default router;