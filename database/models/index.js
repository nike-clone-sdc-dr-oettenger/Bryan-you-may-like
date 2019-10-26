const mysqlDb = require('../mysql/index.js');
const faker = require('faker');

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
  },

  postOneData: () => {
    let queryString = 'INSERT INTO shoes (name, picture, price, type) VALUES (?, ?, ?, ?)';
    let queryArgs = ['testing'];
    
    queryArgs.push(faker.lorem.word());
    queryArgs.push(faker.image.imageUrl());
    queryArgs.push(randomPrice(1000));
    queryArgs.push(faker.lorem.word());

    mysqlDb.pool.query(queryString, queryArgs, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log('We saved a thing to mysql database!');
      }
    })
  },

  putTheData: (columnName, value) => {
    let queryString = `UPDATE shoes SET ? = ?`;
    let queryArgs = [];

    queryArgs.push(columnName);
    queryArgs.push(value);

    mysqlDb.pool.query(queryString, queryArgs, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log('We putted a data ---> ', results)
      }
    })
  },

  deleteTheData: () => {

  }
}