const express = require('express');
const { getOS, getCPU, getRAM, getDISKS, getGPU, getNET } = require('../../controllers/Softwares/SoftwareController');

const router = express.Router();

router.get('/os', getOS);
router.get('/cpu', getCPU);
router.get('/ram', getRAM);
router.get('/disks', getDISKS);
router.get('/gpu', getGPU);
router.get('/networks', getNET);

module.exports = router;
