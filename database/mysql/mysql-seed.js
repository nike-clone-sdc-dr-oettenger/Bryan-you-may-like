const db = require('./index.js');
const faker = require('faker');

let totalCounter = 0;

function randomPrice(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const seedShoes = (numOfShoes) => {
  const queryString = `INSERT INTO shoes (name, picture, price, type) VALUES (?, ?, ?, ?)`

  let queryArgs = [];

  for (let i = 0; i < numOfShoes; i++) {
    queryArgs.push(faker.lorem.word());
    queryArgs.push(faker.image.imageUrl());
    queryArgs.push(randomPrice(10000));
    queryArgs.push(faker.lorem.word());
  }

  while (totalCounter < 10000) {
    try {
      db.pool.query(queryString, queryArgs)
        .then(() => {
          totalCounter = totalCounter + 20;
        })
        .catch ((err) => {
          console.error(err);
        })
    } catch (error) {
      console.log(error)
    }
  }
  console.log(totalCounter);
  return process.exit();
};

seedShoes(1)

// name: String,
// picture: String,
// id: Number,
// price: Number,
// type: String