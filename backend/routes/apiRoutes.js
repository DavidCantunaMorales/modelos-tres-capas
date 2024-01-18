const express = require("express");
const empresaController = require("../controllers/empresaController");
const clientesController = require("../controllers/clientesController");

const router = express.Router();

router.get("/empresa", empresaController.getEmpresaInfo);
router.get("/clientes", clientesController.getClientes);

module.exports = router;
