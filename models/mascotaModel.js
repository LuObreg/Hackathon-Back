const mongoose = require("mongoose");

const mascotaSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  sexo: {
    type: Number,
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
  refugio_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Refugio",
    required: true,
  }
});

module.exports = mongoose.model("Mascota", mascotaSchema);
