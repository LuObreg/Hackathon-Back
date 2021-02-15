const RefugioModel = require("../models/refugioModel");

class RefugioService {
  getRefugio(page, limit) {
    const query = RefugioModel.find().skip(page).limit(limit).exec();
    return query;
  }
  getRefugioById(id) {
    const query = RefugioModel.find({ _id: id }).exec();
    return query;
  }
  getRefugioByName(refugio) {
    const query = RefugioModel.find({nombre : refugio}).exec();
    return query;
  }
  postRefugio(Refugio) {
    const newRefugio = new RefugioModel(Refugio);
    return newRefugio.save();
  }
}

module.exports = RefugioService;
