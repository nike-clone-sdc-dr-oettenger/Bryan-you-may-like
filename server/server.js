// const newrelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const dbCRUD = require('../database/models/index.js');
const cors = require('cors');
const redis = require('redis');
const client = redis.createClient();
// const couch = require('node-couch')

// const db = require('../database/database.js');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));

let port = 8081;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

// get request for mysql
// app.get('/shoes', function (req, res) {
//   console.log('got a child request for mysql, son');
//   dbCRUD.getAllData(results => {
//     res.send(results);
//   })
// });

// get request for mysql using Redis
app.get('/shoes', function (req, res) {
  console.log('got a child request for mysql, son');
  return client.get((err, results) => {
    if (results) {
      console.log('RESULTS -->', results)
    } else {
      dbCRUD.getAllData(results => {
        client.set(JSON.stringify(results), redis.print)
        res.send(results);
      })
    }
  })
});

// get request for mongo
// app.get('/shoes', function (req, res) {
//   console.log('got a child request, son');
//   db.retrieve(res)
//   //res.end()
// });

// get request for couchdb
// app.get('/shoes', function (req, res) {
//   console.log('got a child request for couchdb, son');
//   couch.get(dbName, viewUrl).then((data, headers, status) => {
//     res.json(data.data.rows);
//   },
//   (err) => {
//     res.send(err);
//   })
// });


/*************ADDITIONAL ENDPOINTS*************** */

// POST
app.post('/shoes', (req, res) => {
  console.log('created a child request, son');
  dbCRUD.postOneData(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
      res.send('not saved');
    } else {
      res.status(201);
      res.send('saved it!')
    }
  });
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
  dbCRUD.putTheData(columnName, value);
});

// DELETE
app.delete('/shoes', (req, res) => {
  console.log('got a delete request, son');
  dbCRUD.deleteTheData(res);
});