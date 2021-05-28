const knex = require('knex');
const knexFile = require('./knexfile');

const db = knex(knexFile.developement);
module.exports = db;