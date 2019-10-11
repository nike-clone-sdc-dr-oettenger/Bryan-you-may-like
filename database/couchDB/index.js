const nano = require('nano')('http://localhost:5984');

nano.db.create('youmaylike').then(() => {
  console.log('created a database')
}).catch((err) => {
  console.error('There is an error ', err);
})

const youmaylike = nano.use('youmaylike');

module.exports = youmaylike;



// const nodeCouchDb = require('node-couchdb');

// // couchDB
// const couch = new nodeCouchDb({
//   auth: {
//     user:'admin',
//     password:'password'
//   }
// });

// const dbName = 'youmaylike';
// const viewUrl = '_design/view3/_view/new-view'

// couch.listDatabases().then((dbs) => {
//   // console.log ('DBS ---> ',dbs);
// });

// module.exports = db;