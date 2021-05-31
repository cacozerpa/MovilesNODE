const {Pool} = require('pg');
const env = require('dotenv').config();

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '12345',
    database: 'Moviles',
    port: '5432',
    max: 10,
    min: 1
  })

  module.exports = pool;