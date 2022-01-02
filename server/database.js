const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: 'rootadmin321',
  port: 5432
});

module.exports = pool;