const {Router} = require('express');
const { getHabichuelaById, getHabichuelas} = require('../helpers/product');
const router = Router();

router.get('/prod', getHabichuelas);
router.get('/prod/:id', getHabichuelaById);

module.exports = router;