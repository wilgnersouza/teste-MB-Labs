import express from "express";
import organizadoresController from "../controllers/organizadores";
const router = express.Router();

// GET
router.get("/", organizadoresController.list);
router.get("/:tipoOrg", organizadoresController.list);

router.get("/:email", organizadoresController.list);

// POST
router.post("/", organizadoresController.add);

// PUT
router.put("/:email", organizadoresController.update);

// DELETE
router.delete("/:email", organizadoresController.remove);

export default router;