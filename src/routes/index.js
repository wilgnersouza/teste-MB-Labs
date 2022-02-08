import express from "express";
const router = express.Router();

import clientesRouter from "./clientes";

router.use("/clientes", clientesRouter);

export default router;