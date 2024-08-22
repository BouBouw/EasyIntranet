const express = require('express');
const { getOS, getCPU } = require('../../controllers/Softwares/SoftwareController');

const router = express.Router();

router.get('/os', getOS);
router.get('/cpu', getCPU);

module.exports = router;
