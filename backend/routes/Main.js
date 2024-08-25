const express = require('express');
const { AuthController } = require('../controllers/Main');

const router = express.Router();

router.get('/', AuthController  );

module.exports = router;
