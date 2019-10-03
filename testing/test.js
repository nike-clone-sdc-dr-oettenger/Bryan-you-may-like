//3242
const db = require('../database/database.js');
const seed = require('../database/seed.js');
const request = require('request');


const shouldEqual100 = function(arr) {
  console.log('--- Should enter 100 items into db ---')
  if (arr.length === 100) {
    console.log('test passed, 100 elements entered');
  } else {
    console.log(`test failed, ${arr.length} elements entered`)
  }
}

const shouldHaveWorkingEndpoints = function() {
  console.log('--- Should have working endpoints ---')
  request({
    url: 'http://localhost:8081/shoes'
  }, function(err, res, body) {
    if (err) {
      console.log('your test failed, son');
    } else {
      console.log('test passed, endpoints work')
    }
  })
}

var shouldEnterStuff = function() {
  db.clearDb(function() {
    seed.seed(shouldEqual100);
  });
}

shouldEnterStuff();
shouldHaveWorkingEndpoints();