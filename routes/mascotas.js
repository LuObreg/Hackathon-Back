const express = require("express");
const router = express.Router();
const RefugioService = require("../services/refugioService")
const MascotaController = require("../controllers/mascotaController");
const MascotaService = require("../services/mascotaService");
const MascotaInstance = new MascotaController(new MascotaService(),new RefugioService());

router.get("/", (req, res) => {
  MascotaInstance.getMascota(req, res);
});

router.get("/especie/:especie", (req, res) => {
  MascotaInstance.getMascotaByEspecie(req, res);
});

router.get("/status/:status", (req, res) => {
  MascotaInstance.getMascotaByStatus(req, res);
});

router.get("/refugio/:id", (req, res) => {
  MascotaInstance.getMascotaByRefugio(req, res);
});

module.exports = router;