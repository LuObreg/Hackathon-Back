const express = require("express");
const router = express.Router();
const MascotaService = require("../services/mascotaService");
const RefugioController = require("../controllers/refugioController");
const RefugioService = require("../services/refugioService");
const RefugioInstance = new RefugioController(new RefugioService(),new MascotaService());

router.get("/", (req, res) => {
  RefugioInstance.getRefugio(req, res);
});

router.get("/:name", (req, res) => {
  RefugioInstance.getRefugioByName(req, res);
});

router.get("/id/:id", (req, res) => {
  RefugioInstance.getRefugioById(req, res);
});

router.post("/",(req, res) => {
  RefugioInstance.postRefugio(req, res);
});

module.exports = router;