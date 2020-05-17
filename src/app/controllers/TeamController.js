import Team from '../models/Team';

class UserController {
  async index(req, res) {
    const team = await Team.find();
    return res.json(team);
  }
  // list one match
  async show(req, res) {
    const { id } = req.params;
    const team = await Team.findById(id);
    return res.json(team);
  }
  // creact match
  async store(req, res) {
    const { leader, name } = req.body;

    const newTeam = {
      leader,
      name,
    };
    const team = await Team.create(newTeam);
    return res.json(team);
  }
  // update match
  async update(req, res) {
    const { id } = req.params;
    const team = await Team.findById(id);
    return res.json(team);
  }
}

export default new UserController();
