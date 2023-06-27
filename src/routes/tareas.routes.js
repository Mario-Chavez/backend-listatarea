import { Router } from "express";
import {
    crearTareas,
    eliminarTareaPorId,
    obtenerTareaPorTitulo,
    obtenerTareas,
} from "../controllers/tarea.controller";

const router = Router();

// metodos get(con su controller),post(con su controller)
router.route("/tareas").get(obtenerTareas).post(crearTareas);

// Ruta para obtener una tarea por título
router.route("/tareas/find").get(obtenerTareaPorTitulo);

// Ruta para eliminar una tarea por id
router.route("/tareas/delet").delete(eliminarTareaPorId);

export default router;
