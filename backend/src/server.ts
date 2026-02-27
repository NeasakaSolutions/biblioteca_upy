// Importaciones:
import express from "express";
import router from "./router";

// INstancia del servidor:
const app = express();

app.use(express.json()); // Leer dato de formularios
app.use("/", router); // Usa el router para todas las rutas

// Utilizar el archivo en cualquier otra parte del codigo
export default app;

