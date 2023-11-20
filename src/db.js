// src/db.js
const knex = require('knex');
const config = require('../knexfile'); // Adjust the path to knexfile.js as needed

// Assuming 'development' environment for this example
const db = knex(config.development);

module.exports = db;
