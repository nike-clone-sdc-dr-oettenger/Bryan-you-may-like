const mysqlDb = require('../mysql/index.js');

module.exports = {
  getOneData: (callback) => {
    let queryString = `SELECT * FROM shoes LIMIT 1`;
    mysqlDb.pool.query(queryString, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        callback(null, results);
      }
    })
  },

  getAllData: (callback) => {
    let queryString = `SELECT * FROM shoes LIMIT 100`;

    mysqlDb.pool.query(queryString, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        // console.log(results);
        callback(null, results);
      }
    })
  }
}