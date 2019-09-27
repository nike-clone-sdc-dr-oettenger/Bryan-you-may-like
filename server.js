//erte
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./database.js');


let app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./public'));



let port = 8081;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.get('/shoes', function (req, res) {
  
  console.log('got a child request, son');
  db.retrieve(res)
  //res.end()
});

// app.put('/shoes', function(req, res) {
//   console.log('i dont even care anymore bro');
//   seed.seed();
//   res.end()
// })i need tis for a commit