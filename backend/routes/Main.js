const express = require('express');
const { Dev } = require('../controllers/Main');

const router = express.Router();

router.get('/', Dev);

module.exports = router;
