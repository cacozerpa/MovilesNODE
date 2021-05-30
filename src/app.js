const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static('./public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT)
console.log('Server Listening to: ' + PORT)

app.get('/', (req, res) => {
    res.redirect('views/index.html')
})

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'POST, PUT, GET, DELETE, OPTIONS, PATCH',
    allowedHeaders: 'Accept, Content-Type, Accept-Encoding, Content-Length, Authorization',
}))
