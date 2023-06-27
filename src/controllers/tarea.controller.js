import Tarea from "../models/tareas";

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
