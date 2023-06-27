import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import "./src/dataBase/dbConections";
import tareasRouter from "./src/routes/tareas.routes";

dotenv.config();

const app = express();

// crear puerto
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
    console.log("corriendo en port:", app.get("port"));
});

// middlewares: funciones q ejecutan una tarea antes de llegar a las rutas
app.use(cors()); // permite conecciones remotas
app.use(express.json()); //permite interpretar el formato json
app.use(express.urlencoded({ extended: true })); //permite en el objeto requiest string o array
app.use(morgan("dev")); // nos da informacion extra en la terminal

app.use("/apitarea", tareasRouter);
