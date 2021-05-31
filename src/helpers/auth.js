const bcrypt = require('bcrypt');
const pool = require('../utils/pool');
const queries = require('../utils/queries')

const CreateUser = async (req, res) =>{
    const { name, username, password} = req.body;
    
    try{
        await pool.query('BEGIN');
        const salt = bcrypt.genSaltSync(12);
        HashPass = bcrypt.hashSync(password, salt);
        const response = (await pool.query(queries.CREATE_USER, [name, username.toLowerCase(), HashPass]));
        console.log(response);
        res.send('User Created');
        await pool.query('COMMIT');
    }catch(err){
        await pool.query('ROLLBACK');
        throw err;
    }
    res.send('User Created')

}

module.exports ={
    CreateUser
}