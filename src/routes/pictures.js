const {Router} = require('express');
const { upload } = require('../helpers/pictures');
const router = Router();

router.post('/upload', upload);

module.exports = router;