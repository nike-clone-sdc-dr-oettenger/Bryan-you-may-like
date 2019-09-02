//sda
const faker = require('faker');
const saveToDb = require('./database.js');

//console.log(faker.image.animals());

//var testArr = [];

const seed = function(callback) {
  var promiseArr = []
  for (let i = 0; i < 100; i ++) {
    var temp = {};
    temp.shoeId = i;
    temp.name = faker.commerce.productName();
    temp.price = faker.random.number();
    
    temp.type = faker.commerce.productMaterial();
    promiseArr.push(saveToDb.save(temp));
    //testArr.push(temp);
  }
  Promise.all(promiseArr).then(function(values) {
    //console.log('********************************************** \n', values.length);
    if (callback) {
      callback(values);
    }
    
  })
}
// shoe Id
// name
// price
// picture
// gender

//seed();

module.exports = {
  seed: seed
}
//console.groupCollapsed('***************************************************************** \n', testArr);