const db = require('../../routes/Database');

const Login = async (req, res) => {
    const { email, password } = req.body;
    console.log({ email, password })
  
    try {
      const [rows, fields] = await db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
      if (rows.length === 0) {
        return res.status(201).json({ message_eror: "USER_NOT_FOUND" });
      }

      req.session.userId = rows[0].id;

      res.status(200).json({ user: rows[0] });
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
  Login
}