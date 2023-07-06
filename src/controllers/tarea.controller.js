import Tarea from "../models/tareas";

// GET all tasks
export const obtenerTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.status(200).json(tareas);
    } catch (error) {
        console.log(err);
        res.status(404).json({
            mensaje: "error en obtener tareas desde controller",
        });
    }
};
// Post create task
export const crearTareas = async (req, res) => {
    try {
        const tareaNueva = new Tarea(req.body);
        await tareaNueva.save();
        res.status(201).json({
            mensaje: "tarea guarda exitosamente",
        });
    } catch (error) {
        console.log(err);
        res.status(404).json({
            mensaje: "error en crear tarea desde controller",
        });
    }
};
// GET find for id
export const obtenerTareaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const tarea = await Tarea.findById(id);

        res.status(200).json(tarea);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: "Error al obtener la tarea desde el controlador",
        });
    }
};

// DELETE
export const eliminarTareaPorId = async (req, res) => {
    try {
        const { id } = req.params; // Obtén el ID de la tarea de los parámetros de la solicitud
        await Tarea.findByIdAndDelete(id);

        res.status(200).json({ mensaje: "Tarea eliminada correctamente" });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al eliminar la tarea desde el controlador",
        });
    }
};

// PUT update
export const editTareaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        await Tarea.findByIdAndUpdate(id, req.body);

        res.status(200).json({ mensaje: "Tarea editada correctamente" });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al editar la tarea desde el controlador",
        });
    }
};
