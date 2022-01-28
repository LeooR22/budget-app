// const Role = require("../models/role");
// const Usuario = require("../models/usuario");
const Record = require("../models/record");

// const esRoleValido = async (rol = "") => {
//   const existeRol = await Role.findOne({ rol });
//   if (!existeRol) {
//     throw new Error(`El rol ${rol} no está registrado en la BD`);
//   }
// };

const existeRecordPorId = async (id) => {
  // Verificar si el correo existe
  const existeRecord = await Record.findById(id);
  if (!existeRecord) {
    throw new Error(`El id no existe ${id}`);
  }
};

module.exports = {
  // esRoleValido,
  // emailExiste,
  existeRecordPorId,
};
