const {Router} = require('express');
const router = Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage
});

router.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.status(200).send('Image Upload!')
});

module.exports = router;