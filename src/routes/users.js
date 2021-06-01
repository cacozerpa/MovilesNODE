const {Router} = require('express');
const router = Router();

const {getUsers, getUserById} = require('../helpers/users');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);

module.exports = router;