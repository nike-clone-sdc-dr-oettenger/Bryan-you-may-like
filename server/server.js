const express = require('express');
const bodyParser = require('body-parser');
const postgresQuery = require('../database/postgresQuery.js');

const db = require('../database/database.js');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../client/dist'));

let port = 8081;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.get('/shoes', function (req, res) {
  console.log('got a child request, son');
  db.retrieve(res)
  //res.end()
});

// POST
app.post('/shoes', (req, res) => {
  console.log('created a child request, son');
  db.createShoe(res);
});

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