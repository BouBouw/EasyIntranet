const Database = require("../routes/Database");

const Dev = async (req, res) => {
    console.log(req.sessionID)
    if (req.session.userId) {
        const query = 'SELECT * FROM users WHERE id = ?';
        
        Database.query(query, [req.session.userId], (err, results) => {
          if (err || results.length === 0) {
            return res.status(500).send('Erreur lors de la récupération des données utilisateur');
          }
          res.send(`Bienvenue, ${results[0].username}`);
        });
      } else {
        res.status(401).send('Non autorisé');
      }
};

module.exports = {
    Dev,
};