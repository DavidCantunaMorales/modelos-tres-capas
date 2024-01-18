const empresaModel = require("../models/empresaModel");

exports.getEmpresaInfo = (req, res) => {
  const empresaInfo = empresaModel.getEmpresaInfo();
  res.json(empresaInfo);
};
