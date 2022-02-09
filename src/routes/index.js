import express from "express";
const router = express.Router();

import clientesRouter from "./clientes";
import organizadoresRouter from './organizadores';
import eventosRouter from './eventos';
import lotesRouter from './lotes';
import ingressosRouter from './ingressos';

router.use("/clientes", clientesRouter);
router.use('/organizadores', organizadoresRouter)
router.use('/eventos', eventosRouter)
router.use('/lotes', lotesRouter)
router.use('/ingressos', ingressosRouter)

export default router;