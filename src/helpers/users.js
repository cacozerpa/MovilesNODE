const pool = require('../utils/pool');
const queries = require('../utils/queries');

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

module.exports = {
    getUsers,
    getUserById
}