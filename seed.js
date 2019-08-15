const faker = require('faker');
const saveToDb = require('/Users/marcus/Code/you-may-like/database.js');

//console.log(faker.image.animals());

//var testArr = [];

const seed = function() {
  for (let i = 0; i < 100; i ++) {
    var temp = {};
    temp.shoeId = i;
    temp.name = faker.commerce.productName();
    temp.price = faker.random.number();
    temp.picture = faker.image.nightlife();
    temp.type = faker.commerce.productMaterial();
    saveToDb.save(temp);
    //testArr.push(temp);
  }
}
// shoe Id
// name
// price
// picture
// gender

seed();
//console.groupCollapsed('***************************************************************** \n', testArr);