import { Router } from "express";
import { crearTareas, obtenerTareas } from "../controllers/tarea.controller";

const router = Router();

// metodos get(con su controller),post(con su controller)
router.route("/tareas").get(obtenerTareas).post(crearTareas);

export default router;
