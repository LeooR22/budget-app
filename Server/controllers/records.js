const { response, request } = require("express");

const Record = require("../models/record");

const recordsGet = async (req = request, res = response) => {
  const { limite = 10, desde = 0, typeq = ["income", "expense"] } = req.query;
  //PRUEBAS added type:"????"

  const query = { type: typeq, estado: true };
  //

  const [total, records] = await Promise.all([
    Record.countDocuments(query),
    Record.find(query)
      .sort({ date: -1 })
      .skip(Number(desde))
      .limit(Number(limite)),
  ]);

  res.json({
    total,
    records,
  });
};

const recordsPost = async (req, res = response) => {
  const { concept, amount, date, type } = req.body;
  const record = new Record({ concept, amount, date, type });

  // Guardar en BD
  await record.save();

  res.json({
    record,
  });
};

const recordsPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, ...resto } = req.body;

  const record = await Record.findByIdAndUpdate(id, resto);

  res.json(record);
};

const recordsPatch = (req, res = response) => {
  res.json({
    msg: "patch API - recordsPatch",
  });
};

const recordsDelete = async (req, res = response) => {
  const { id } = req.params;

  // Fisicamente lo borramos
  // const record = await Record.findByIdAndDelete( id );

  const record = await Record.findByIdAndUpdate(id, { estado: false });

  res.json(record);
};

module.exports = {
  recordsGet,
  recordsPost,
  recordsPut,
  recordsPatch,
  recordsDelete,
};
