const Database = require("../../routes/Database");

const GetAllStores = async (req, res) => {
    try {
      const [rows, fields] = await Database.query('SELECT * FROM stores');
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
    GetAllStores
}