import User from '../models/User';

class UserController {
  async index(req, res) {
    const { id } = req.params;
    const user = await User.find();
    return res.json(user);
  }
  // list one match
  async show(req, res) {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.json(user);
  }
  // creact match
  async store(req, res) {
    const { avatar, username, score } = req.body;

    const newUser = {
      username,
      avatar,
      score,
    };

    const match = await User.create(newUser);
    return res.json(match);
  }
  // update match
  async update(req, res) {
    const { id } = req.params;

    const user = await User.findById(id);

    return res.json(user);
  }
}

export default new UserController();
