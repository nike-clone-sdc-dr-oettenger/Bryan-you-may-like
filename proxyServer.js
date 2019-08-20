//erte
const nodemon = require('nodemon');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
//const getRepos = require('/Users/marcus/Code/rpt15-fullstack-review/helpers/github.js');
//const saveToDB = require('/Users/marcus/Code/rpt15-fullstack-review/database/index.js');
//const seed = require('/Users/marcus/Code/you-may-like/seed.js');
const db = require('/Users/marcus/Code/you-may-like/database.js');


let app = express();
app.use(bodyParser());

app.use(express.static('/Users/marcus/Code/you-may-like/public'));

let port = 6969;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});



app.get('/shoesYouLike', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25
  request({
    url: 'http://127.0.0.1:1128/shoes'
  })
  console.log('got a proxy request, son');
  res.end()
});

// app.put('/shoes', function(req, res) {
//   console.log('i dont even care anymore bro');
//   seed.seed();
//   res.end()
// })
nodemon({
  script: 'server.js',
  ext: 'js json'
});

nodemon.on('start', function () {
  console.log('server has started');
}).on('quit', function () {
  console.log('App has quit');
  process.exit();
}).on('restart', function (files) {
  console.log('App restarted due to: ', files);
});