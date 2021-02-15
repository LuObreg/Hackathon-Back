class RefugioController {
  constructor(refugioService, mascotaService) {
    this.refugioService = refugioService;
    this.mascotaService = mascotaService;
  }

  async getRefugio(req, res) {
    const { page } = req.query;
    let offset = 0;
    let limit = 10;
    if (page) {
      try {
        offset = 3 * (page - 1);
        const refugio = await this.refugioService.getRefugio(offset, limit);
        res.status(200).json(refugio);
      } catch (e) {
        res.status(500).json("Error receiving");
      }
    } else {
      try {
        const refugio = await this.refugioService.getRefugio();
        res.status(200).json(refugio);
      } catch (e) {
        res.status(500).json("Error receiving");
      }
    }
  }

  async getRefugioByName(req, res) {
    const { name } = req.params;

    try {
      const refugio = await this.refugioService.getRefugioByName(name);
      const mascota = await this.mascotaService.getMascotaByRefugio(refugio.name);
      
      const pet = mascota.map((pet) => {
        const data = {
          refugio: refugio[0]["nombre"],
          mascota: pet.nombre,
          sexo: pet.sexo,
          especie: pet.especie,
        };
        return data;
      });
      res.status(200).json(pet);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getRefugioById(req, res) {
    const { id } = req.params;
    try {
      const refugio = await this.refugioService.getRefugioById(id);
      res.status(200).json(refugio);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async postRefugio(req, res) {
    const {
      nombre,
      whatsapp,
      url_donar,
      direccion,
      ciudad,
      instagram,
      image,
    } = req.body;

    if (
      nombre &&
      whatsapp &&
      url_donar &&
      direccion &&
      ciudad &&
      instagram &&
      image
    ) {
      const refugio = {
        nombre: nombre,
        whatsapp: whatsapp,
        url_donar: url_donar,
        direccion: direccion,
        ciudad: ciudad,
        instagram: instagram,
        image: image,
      };
      try {
        await this.refugioService.postRefugio(refugio);
        res.status(200).json("Refugio agregado con exito!");
      } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrio un error al agregar un refugio!");
      }
    } else {
      res.status(400).json("Todos los campos son obligatorios");
    }
  }
}

module.exports = RefugioController;
