const clientesModel = require("../models/clientesModel");

exports.getClientes = (req, res) => {
  const clientes = clientesModel.getClientes();
  res.json(clientes);
};
