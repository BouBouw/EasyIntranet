const Database = require("../routes/Database");

const AuthController = async (req, res) => {
  console.log(req.session)
  try {
    const [rows, fields] = await Database.query('SELECT * FROM users WHERE id = ?', [req.session.data]);
    if (rows.length === 0) {
      return res.status(201).send('Non autorisé');
    }
    res.status(200).json({ user: rows[0] });
  } catch(error) {
    console.log(error)
  }
};

module.exports = {
  AuthController,
};