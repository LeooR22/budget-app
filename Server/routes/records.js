const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");
const { existeRecordPorId } = require("../helpers/db-validators");

const {
  recordsGet,
  recordsPut,
  recordsPost,
  recordsDelete,
  recordsPatch,
} = require("../controllers/records");

const router = Router();

router.get("/", recordsGet);

router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeRecordPorId),
    validarCampos,
  ],
  recordsPut
);

router.post(
  "/",
  [
    check("concept", "concept is required").not().isEmpty(),
    check("amount", "amount is required").not().isEmpty(),
    check("date", "date is required").not().isEmpty(),

    validarCampos,
  ],
  recordsPost
);

router.delete(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeRecordPorId),
    validarCampos,
  ],
  recordsDelete
);

router.patch("/", recordsPatch);

module.exports = router;
