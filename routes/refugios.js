const express = require("express");
const router = express.Router();
const RefugioController = require("../controllers/refugioController");
const RefugioService = require("../services/refugioService");
const RefugioInstance = new RefugioController(new RefugioService());

router.get("/", (req, res) => {
  RefugioInstance.getRefugio(req, res);
});

router.get("/:id", (req, res) => {
  RefugioInstance.getRefugioById(req, res);
});

router.post("/",(req, res) => {
  RefugioInstance.postRefugio(req, res);
});

module.exports = router;
