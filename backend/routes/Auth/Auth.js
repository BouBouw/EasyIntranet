const express = require('express');
const { Login } = require('../../controllers/Auth/authController');

const router = express.Router();

router.post('/login', Login);

module.exports = router;
