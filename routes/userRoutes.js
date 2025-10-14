const express = require('express');
const router = express.Router();
const { registerUser, loginUser, deleteUser, getUsers, getUserbyId, updateUser } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/:id', deleteUser);
router.get('/', getUsers);
router.get('/:id', getUserbyId);
router.put('/:id', updateUser);

module.exports = router;