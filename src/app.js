const express = require('express');
const cors = require('cors');
const UserRoutes = require('./routes/users');
const AuthRoutes = require('./routes/auth');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT)
console.log('Server Listening to: ' + PORT)

app.use(UserRoutes);
app.use(AuthRoutes);
/*app.get('/', (req, res) => {
    res.redirect('views/index.html')
})*/

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'POST, PUT, GET, DELETE, OPTIONS, PATCH',
    allowedHeaders: 'Accept, Content-Type, Accept-Encoding, Content-Length, Authorization',
}))
