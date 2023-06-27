import { Schema, model } from "mongoose";

const tareaSchema = new Schema({
    title: {
        type: String,
        minLength: 2,
        maxLength: 100,
        unique: true,
        require: true,
    },
});

const Tarea = model("tarea", tareaSchema);
export default Tarea;
