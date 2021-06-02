const {Router} = require('express');
const router = Router();

const {getUsers, getUserById, LogIn} = require('../helpers/users');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/login', LogIn);

module.exports = router;