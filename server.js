const express = require('express');
const bodyParser = require('body-parser');
//const getRepos = require('/Users/marcus/Code/rpt15-fullstack-review/helpers/github.js');
//const saveToDB = require('/Users/marcus/Code/rpt15-fullstack-review/database/index.js');
//const seed = require('/Users/marcus/Code/you-may-like/seed.js');

let app = express();
app.use(bodyParser());

app.use(express.static(__dirname + '/../client/dist'));



let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.get('/shoes', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25
  console.log('got a get request, son');
  res.end()
});

// app.put('/shoes', function(req, res) {
//   console.log('i dont even care anymore bro');
//   seed.seed();
//   res.end()
// })