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
        res.status(200).send('User Created');
        await pool.query('COMMIT');
    }catch(err){
        await pool.query('ROLLBACK');
        throw err;
    }
    res.send('User Created')

}

const UpdateUser = async (req, res) => {
    try{
    await pool.query('BEGIN');
    const id = req.params.id;
    const {name, username} = req.body;
    const response = await pool.query(queries.UPDATE_USER, [name, username, id]);
    console.log(response);
    res.status(200).send('User ' + id + ' Updated');
    await pool.query('COMMIT');
    }catch(err){
        pool.query('ROLLBACK');
        throw err;
    }
}

const DeleteUser = async (req, res) => {
    try{
    const id = req.params.id;
    await pool.query('BEGIN');
    const response = await pool.query(queries.DELETE_USER, [id]);
    console.log(response);
    res.send('User ' + id + ' Deleted');
    await pool.query('COMMIT');
    }catch(err){
        await pool.query('ROLLBACK');
        throw err;
    }
}

module.exports ={
    CreateUser,
    UpdateUser,
    DeleteUser,
}