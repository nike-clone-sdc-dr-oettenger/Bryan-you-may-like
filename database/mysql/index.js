const mysql = require('mysql');
const util = require('util');


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'youMayLike'
});

pool.getConnection((err, conn) => {
  if (err) {
    console.error(err);
  }
  connection.release();
  return;
})

pool.query = util.promisify(pool.query);

module.exports = {
  pool: pool
}
