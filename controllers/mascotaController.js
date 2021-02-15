class MascotaController {
  constructor(mascotaService) {
    this.mascotaService = mascotaService;
  }
    
  async getMascota(req, res) {
    const { page } = req.query;
    let offset = 0;
    let limit = 10;
    if (page) {
      try {
        offset = 3 * (page - 1);
        const mascota = await this.mascotaService.getMascota(offset, limit);
        res.status(200).json(mascota);
      } catch (e) {
        res.status(500).json("Error receiving");
      }
    } else {
      try {
        const mascota = await this.mascotaService.getMascota();
        res.status(200).json(mascota);
      } catch (e) {
        res.status(500).json(e);
      }
    }
  }

  async getMascotaByEspecie(req, res) {
    const { especie } = req.params;
    try {
      const mascota = await this.mascotaService.getMascotaByEspecie(especie);
      res.status(200).json(mascota);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getMascotaByStatus(req, res) {
    const { status } = req.params;
    try {
      const mascota = await this.mascotaService.getMascotaByStatus(status);
      res.status(200).json(mascota);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getMascotaByRefugio(req, res) {
    const { id } = req.params;
    console.log(id)
    try {
      const mascota = await this.mascotaService.getMascotaByRefugio(id);
      res.status(200).json(mascota);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = MascotaController;
