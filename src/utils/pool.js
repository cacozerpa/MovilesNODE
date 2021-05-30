const {Pool} = require('pg');
const env = require('dotenv').config();

const pool = new Pool({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    max: 10,
    min: 1
  })

  module.exports = pool;