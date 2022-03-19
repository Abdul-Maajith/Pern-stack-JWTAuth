// This helps to connect database with our server!
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "test",
    host: "localhost",
    port: 5432,
    database: "jwtauth"
});

module.exports = pool;