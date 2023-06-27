import { Router } from "express";
import { crearTareas, obtenerTareas } from "../controllers/tarea.controller";

const router = Router();

router.route("/tareas").get(obtenerTareas).post(crearTareas);

export default router;
