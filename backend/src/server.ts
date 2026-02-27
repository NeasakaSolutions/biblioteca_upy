// Importaciones:
import express from "express";
import router from "./router";

// INstancia del servidor:
const app = express();

// Usa el router para todas las rutas
app.use("/", router);

// Utilizar el archivo en cualquier otra parte del codigo
export default app;

