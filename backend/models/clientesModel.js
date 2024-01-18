const data = require("../../database/data.json");

exports.getClientes = () => {
  return data.clientes;
};
