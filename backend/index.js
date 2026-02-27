// Importaciones:
import express from "express";

// Variables:
const app = express(); // Instancia de express
const port = process.env.PORT || 4000;

// Enrutamiento
app.get("/", (req, res) => {
    res.send("Hola mundo desde express.");
});

// Servidor:
app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto: ${port}`);
});



