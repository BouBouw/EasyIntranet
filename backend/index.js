const express = require('express');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const dotenv = require('dotenv');
const cors = require('cors');
const Database = require('./routes/Database.js');

dotenv.config();

const app = express();

const sessionStore = new MySQLStore({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}, Database)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'XXX-XXX',
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    secure: false, // Mettre à true en production avec HTTPS
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 // 1 jour
}
}));

app.use('/', require('./routes/Main.js'))
app.use('/auth', require('./routes/Auth/Auth.js'));

app.use('/api/users', require('./routes/Auth/Users.js'));

app.use('/api/stores', require('./routes/Stores/Stores.js'))

app.use('/api/software', require('./routes/Softwares/GetCurrentComputer.js'))

app.use((req, res, next) => {
  console.log('Session:', req.session);
  next();
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
