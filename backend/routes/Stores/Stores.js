const express = require('express');
const { GetAllStores } = require('../../controllers/Stores/storesController');

const router = express.Router();

router.get('/all', GetAllStores);

module.exports = router;
