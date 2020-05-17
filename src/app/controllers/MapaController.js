import Mapa from '../models/Mapa';

class MapaController {
  async index(req, res) {
    const { id } = req.params;
    const map = await Mapa.find();
    return res.json(map);
  }
  // list one match
  async show(req, res) {
    const { id } = req.params;
    const mapa = await Mapa.findById(id);
    return res.json(mapa);
  }
  // creact match
  async store(req, res) {
    const { name, selected, cover, layout } = req.body;

    const newMapa = {
      name,
      selected,
      cover,
      layout,
    };

    const mapa = await Mapa.create(newMapa);
    return res.json({ name, selected, cover, layout });
  }
  // update match
  async update(req, res) {
    const { id } = req.params;

    const user = await Mapa.findById(id);

    return res.json(user);
  }
}

export default new MapaController();
