const {Router} = require('express');
const router = Router();

const {getUsers} = require('../helpers/users');

router.get('/users', getUsers);

module.exports = router;