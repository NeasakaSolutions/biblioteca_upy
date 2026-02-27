// Importaciones:
import server from "./server";

// Variables:
const port = process.env.PORT || 4000;
// Servidor:
server.listen(port, () => {
    console.log(`Servidor funcionando en el puerto: ${port}`);
});



