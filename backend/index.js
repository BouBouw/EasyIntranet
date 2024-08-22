const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/Main.js'))
app.use('/api/login', require('./routes/Auth/Users.js'));

app.use('/api/software', require('./routes/Softwares/GetCurrentComputer.js'))

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
