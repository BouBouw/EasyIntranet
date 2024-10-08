const express = require('express');
const { Login, Logout } = require('../../controllers/Auth/authController');

const router = express.Router();

router.post('/login', Login);
router.post('/logout', Logout);

module.exports = router;
