const express = require('express');
const { getAllUsers, getUserById, createUser } = require('../../controllers/Auth/userController');

const router = express.Router();

router.get('/all', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);

module.exports = router;
