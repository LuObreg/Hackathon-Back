const MascotaModel = require("../models/mascotaModel");

class MascotaService {
  getMascota(page, limit) {
    const query = MascotaModel.find().skip(page).limit(limit).exec();
    return query;
  }
  getMascotaByRefugio(id) { 
    const query = MascotaModel.find({ refugio: id }).exec();
    return query;
  }

  getMascotaByEspecie(especie) {
    const query = MascotaModel.find({ especie: especie }).exec();
    return query;
  }
  getMascotaByStatus(status) {
    const query = MascotaModel.find({ status: status }).exec();
    return query;
  }
}
module.exports = MascotaService;
