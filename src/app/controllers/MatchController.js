import Match from '../models/Match';

class MatchController {
  // list match
  async index(req, res) {
    try {
      const { id } = req.params;
      const match = await Match.findById(id);
      return res.json(match);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  // list one match
  async show(req, res) {
    const { id } = req.params;

    return res.json({ message: `match id ${id}` });
  }
  // creact match
  async store(req, res) {
    const { membros, maps } = req.body;

    // check players length
    membros.length !== 10 &&
      res.status(403).json({ error: 'Number players invalid.' });
    // Check receive maps array
    !maps && res.status(403).json({ error: 'Maps not provited.' });

    const newMatch = {
      players: membros,
      teams: [
        {
          name: 'teamA',
          lineUp: [membros[0]],
        },
        {
          name: 'teamB',
          lineUp: [membros[1]],
        },
      ],
      maps,
    };

    const match = await Match.create(newMatch);
    console.log(newMatch);
    return res.json(match);
  }
  // update match
  async update(req, res) {
    const { token, playerId } = req.body;
    console.log(token, playerId);

    const player = await Match.findById(playerId);
    console.log(player);
    // const team = await Match.findById(token);

    // validar se a partida existe

    // const team = match.teams.find(team => team.token === token);

    return res.json({});
  }
}

export default new MatchController();
