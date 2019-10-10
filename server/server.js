const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database/database.js');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../client/dist'));

let port = 8081;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

// get request for mysql
// app.get('/shoes', function (req, res) {
//   console.log('got a child request, son');
//   db.retrieve(res)
//   //res.end()
// });

// get request for couchdb
app.get('/shoes', function (req, res) {
  console.log('got a child request for couchdb, son');
  couch.get(dbName, viewUrl).then((data, headers, status) => {
    res.json(data.data.rows);
  },
  (err) => {
    res.send(err);
  })
});


/*************ADDITIONAL ENDPOINTS*************** */

// POST
app.post('/shoes', (req, res) => {
  console.log('created a child request, son');
  // console.log(res)
  db.save(res);
});

// POST for couchDB
// app.post('/shoes', (req, res) => {
//   console.log('created a child request for couchdb, son');
//   // console.log(res)
//   db.save(res);
// });

// PUT
app.put('/shoes', (req, res) => {
  console.log('got an update request, son');
  db.updateShoe(res);
});

// DELETE
app.delete('/shoes', (req, res) => {
  console.log('got a delete request, son');
  db.deleteShoe(res);
});