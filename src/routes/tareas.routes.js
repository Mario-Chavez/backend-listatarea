import { Router } from "express";
import {
    crearTareas,
    editTareaPorId,
    eliminarTareaPorId,
    obtenerTareaPorId,
    obtenerTareas,
} from "../controllers/tarea.controller";

const router = Router();

// metodos get(con su controller),post(con su controller)
router.route("/tareas").get(obtenerTareas).post(crearTareas);

// Ruta obtener, editar y  para eliminar una tarea por id
router
    .route("/tareas/:id")
    .get(obtenerTareaPorId)
    .delete(eliminarTareaPorId)
    .put(editTareaPorId);

export default router;
