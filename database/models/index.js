const mysqlDb = require('../mysql/index.js');


module.exports = {
  getAllData: (callback) => {
    let queryString = `SELECT * FROM shoes`;
    mysqlDb.pool.query(queryString, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        callback(null, results);
      }
    })
  },

  getSomeData: (callback) => {
    let queryString = `SELECT * FROM shoes LIMIT 10`;

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