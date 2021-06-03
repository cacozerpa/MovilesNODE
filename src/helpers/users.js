const pool = require('../utils/pool');
const queries = require('../utils/queries');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getUsers = async(req, res) => {
   const response = await pool.query(queries.GET_USERS);
   console.log('Showing Users!');
   res.status(200).json(response.rows);
}

const getUserById = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query(queries.GET_USERBYID, [id]);
    console.log('Showing User!');
    res.json(response.rows);
}

const LogIn = async (req, res) =>{
    const {username, password} = req.body;
    const salt = bcrypt.genSaltSync(12);
    const HashPass = bcrypt.hashSync(password, salt);
    const credentials = await pool.query(queries.LOGIN, [username, HashPass]);
    if(credentials != ""){
        const token = jwt.sign(username, process.env.SECRET || 'Habichuela');
        res.status(200).send('Welcome ' + username + ', We know you like habichuelas!');
    }else{
        res.status(400).send('User or Password Incorrect!')
    }

}

module.exports = {
    getUsers,
    getUserById,
    LogIn
}