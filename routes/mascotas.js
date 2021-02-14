const express = require("express");
const router = express.Router();
const multer = require("multer");
const MascotaController = require("../controllers/mascotaController");
const MascotaService = require("../services/mascotaService");
const MascotaInstance = new MascotaController(new MascotaService());

router.get("/", (req, res) => {
    MascotaInstance.getMascota(req, res);
});
router.get("/:especie", (req, res) => {
MascotaInstance.getMascotaByEspecie(req, res);
});
router.get("/:status", (req, res) => {
    MascotaInstance.getMascotaByStatus(req, res);
});
router.get(":refugio_id", (req, res) => {
    MascotaInstance.getMascotaByRefugio(req, res);
});

module.exports = router;