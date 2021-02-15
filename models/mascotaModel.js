const mongoose = require("mongoose");

const mascotaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  sexo: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  especie: {
    type: String,
    required: true,
  },
  refugio: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Mascota", mascotaSchema);
