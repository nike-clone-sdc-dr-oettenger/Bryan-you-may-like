const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
  // host: '127.0.0.1',
  // connectionLimit: 1000,
  // connectTimeout: 60 * 60 * 1000,
  // acquireTimeout: 60 * 60 * 1000,
  // timeout: 60 * 60 * 1000,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'youMayLike',
  // port: '8081'
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Connection to database was closed')
    }
  }
  if (connection) {
    connection.release();
    return;
  }
});

pool.query('SET GLOBAL connect_timeout=30000')

pool.query = util.promisify(pool.query);

module.exports = {
  pool: pool
}

// if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//   console.error('Database connection was closed.')
// }
// if (err.code === 'ER_CON_COUNT_ERROR') {
//   console.error('Database has too many connections.')
// }
// if (err.code === 'ECONNREFUSED') {
//   console.error('Database connection was refused.')
// }

