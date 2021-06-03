const multer = require('multer');

const storage = multer({
    dest:'./public/images'
});

const upload = (req, res) =>{
     storage.single('image');
     console.log(req.file);
     res.status(200).send('Image Upload!')
}

module.exports = {upload};