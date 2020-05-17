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
    const { id, token } = req.params;
    const { player } = req.body;
    const team = await Team.findById(id);

    team.token !== token &&
      res
        .status(403)
        .json({ error: 'Você não tem permissão parar selecionar o jogador.' });

    const newTeam = await Team.findOneAndUpdate(id, {
      players: [...players, player],
    });

    console.log(newTeam);
    return res.json(newTeam);
  }
}

export default new UserController();
