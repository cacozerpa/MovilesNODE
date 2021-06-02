const pool = require('../utils/pool');
const queries = require('../utils/queries');

const getHabichuelas = async (req, res) =>{

    const response = await pool.query(queries.GET_PRODUCTS);
    console.log('Showing Habichuelas!');
    res.status(200).json(response.rows);
}

const getHabichuelaById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query(queries.GET_PRODUCTBYID, [id]);
    console.log('Showing Habichuela!');
    res.status(200).json(response.rows);
}

module.exports = {
    getHabichuelaById,
    getHabichuelas
}