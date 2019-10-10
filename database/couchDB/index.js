const nodeCouchDb = require('node-couchdb');

// couchDB
const couch = new nodeCouchDb({
  auth: {
    user:'admin',
    password:'password'
  }
});

// const dbName = 'youmaylike';
// const viewUrl = '_design/view3/_view/new-view'

// couch.listDatabases().then((dbs) => {
//   // console.log ('DBS ---> ',dbs);
// });

module.exports = db;