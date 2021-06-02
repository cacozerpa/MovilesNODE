const {Router} = require('express');
const { createHabichuela, UpdateHabichuela, DeleteHabichuela} = require('../helpers/authproduct');
const router = Router();

router.post('/createprod', createHabichuela);
router.put('/prod/:id', UpdateHabichuela);
router.delete('/prod/:id', DeleteHabichuela);

module.exports = router;