const data = require("../../database/data.json");

exports.getEmpresaInfo = () => {
  return data.empresa;
};
