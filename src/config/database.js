const connect_db =
  'mongodb+srv://apiValorant:1234@knots-ijcqm.gcp.mongodb.net/test?retryWrites=true&w=majority';
const db_opt = {
  poolSize: 5,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = { connect_db, db_opt };
