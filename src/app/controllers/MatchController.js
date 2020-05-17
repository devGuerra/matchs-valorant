import Match from '../models/Match';
import Team from '../models/Team';
import Mapa from '../models/Mapa';

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
    try {
      const { players } = req.body;
      players.sort((a, b) => b.score - a.score);

      const leaderA = players[0];
      const leaderB = players[1];
      const teamA = await Team.create({ players: [leaderA], name: `Time A` });
      const teamB = await Team.create({ players: [leaderB], name: `Time B` });

      const teams = {
        unset: players.slice(2),
        teamA,
        teamB,
      };

      const maps = await Mapa.find();

      const newMatch = {
        matchType: 'unranked',
        status: 'lobby',
        maps,
        teams,
      };
      const match = await Match.create(newMatch);

      return res.json(match);
    } catch (error) {
      console.log(error);
    }
  }
  // update match
  async update(req, res) {
    const { token, playerId } = req.body;

    const player = await Match.findById(playerId);
    // const team = await Match.findById(token);

    // validar se a partida existe

    // const team = match.teams.find(team => team.token === token);

    return res.json({});
  }
}

export default new MatchController();
