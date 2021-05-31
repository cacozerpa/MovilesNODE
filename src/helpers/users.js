const pool = require('../utils/pool');
const queries = require('../utils/queries');

const getUsers = async(req, res) => {
   const response = await pool.query(queries.GET_USERS);
   console.log(response.rows);
   res.send('users');
}

module.exports = {
    getUsers
}