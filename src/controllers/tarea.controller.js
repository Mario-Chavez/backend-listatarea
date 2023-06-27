import Tarea from "../models/tareas";

export const obtenerTareas = async (req, res) => {
    console.log("entre primero");
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
export const obtenerTareaPorTitulo = async (req, res) => {
    try {
        const { title } = req.query; // Obtén el títle de la tarea de los parámetros de la query
        const tarea = await Tarea.findOne({ title: title });
        if (!tarea) {
            return res.status(404).json({ mensaje: "Tarea no encontrada" });
        }
        res.status(200).json(tarea);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: "Error al obtener la tarea desde el controlador",
        });
    }
};
export const eliminarTareaPorId = async (req, res) => {
    try {
        const { id } = req.query; // Obtén el ID de la tarea de los parámetros de la solicitud
        const resultado = await Tarea.deleteOne({ _id: id });

        if (resultado.deletedCount === 0) {
            return res.status(404).json({ mensaje: "Tarea no encontrada" });
        }

        res.status(200).json({ mensaje: "Tarea eliminada correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: "Error al eliminar la tarea desde el controlador",
        });
    }
};
