const request = require('request');
const {Shoe} = require('../database/database.js');

const sampleShoe = {
  name: 'Cool Shoe',
  picture: 'http://lorempixel.com/400/200/',
  id: 1,
  price: 500,
  type: 'Cotton Candy'
}







// Route Tests

test('Post returns a successful message', (done) => {
  const options = {
    method: 'post',
    uri: 'http://localhost:8021/shoes',
    body: sampleShoe,
    json: true
  }
})