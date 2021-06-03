const pool = require('../utils/pool');
const queries = require('../utils/queries')

const createHabichuela = async (req, res) => {
    const {name, price, description} = req.body;

    try{
    await pool.query('BEGIN');
    const response = await pool.query(queries.CREATE_PRODUCT, [name, price, description]);
    console.log(response);
    res.status(200).send('Habichuela Created!');
    await pool.query('COMMIT');
    }catch(err){
        pool.query('ROLLBACK');
        res.status(500).send('Server Error!')
        throw err;
    }
}

const UpdateHabichuela = async (req, res) => {
    try{
    await pool.query('BEGIN');
    const id = req.params.id;
    const {name, price, description} = req.body;

    const response = await pool.query(queries.UPDATE_PRODUCT, [name, price, description, id]);
    console.log(response);
    res.status(200).send('Habichuela ' + id + ' Updated!');
    await pool.query('COMMIT');

    }catch(err){
        await pool.query('ROLLBACK');
        res.status(500).send('Server Error!')
        throw err;
    }
}

const DeleteHabichuela = async (req, res) => {
    try{
        await pool.query('BEGIN');
        const id = req.params.id;

        const response = await pool.query(queries.DELETE_PRODUCT, [id]);
        console.log(response);
        res.status(200).send('Habichuela ' + id + ' Eliminated!');
        await pool.query('COMMIT');
    }catch(err){
        await pool.query('ROLLBACK');
        res.status(500).send('Server Error!')
        throw err;
    }
}

module.exports = {
    createHabichuela, 
    UpdateHabichuela,
    DeleteHabichuela
}