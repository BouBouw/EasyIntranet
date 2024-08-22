const db = require('../../routes/Database');

// Récupérer tous les utilisateurs
const getAllUsers = async (req, res) => {
  try {
    const [rows, fields] = await db.query('SELECT * FROM users');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer un utilisateur par ID
const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const [rows, fields] = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Créer un nouvel utilisateur
const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const [result] = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    res.status(201).json({ id: result.insertId, name, email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
