// Importaciones:
import { Router } from "express";

// Instancia del router:
const router = Router();

router.post("/auth/register", (req, res) => {
    console.log(req.body)
});

// Exportar archivo:
export default router;

