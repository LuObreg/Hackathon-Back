const mongoose = require("mongoose");

const refugioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: Number,
    required: true,
  },
  url_donar: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  ciudad: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  mascotas: {
    type: Array,
    required: false,
  }
});

module.exports = mongoose.model("Refugio", refugioSchema);
