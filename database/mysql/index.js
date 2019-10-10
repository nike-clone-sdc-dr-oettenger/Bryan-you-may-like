const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
  // host: '127.0.0.1',
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'youMayLike'
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error(err);
  }
  if (connection) {
    connection.release();
  }
  return;
})

pool.query = util.promisify(pool.query);

module.exports = {
  pool: pool
}
