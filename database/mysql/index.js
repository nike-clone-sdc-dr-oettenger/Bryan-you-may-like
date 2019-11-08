const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
  // host: '127.0.0.1',
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: 'ec2-13-52-247-174.us-west-1.compute.amazonaws.com',
  // host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'youMayLike',
  port: '3306'
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


