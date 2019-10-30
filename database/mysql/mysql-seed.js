const db = require('./index.js');
const faker = require('faker');

let totalCounter = 0;

function randomPrice(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// console.log(randomPrice(1000));

const seedShoes = async (numOfShoes) => {
  let startTime = new Date().toLocaleTimeString();
  console.log('Starting time', startTime)
  // querying 20 at at time
  
  const queryString = `INSERT INTO shoes (name, picture, price, type) VALUES (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?), (?, ?, ?, ?)`
  let queryArgs = [];

  for (let i = 0; i < numOfShoes; i++) {
    for (let j = 0; j < 20; j++) {
      queryArgs.push(faker.lorem.word());
      queryArgs.push(faker.image.imageUrl());
      queryArgs.push(randomPrice(1000));
      queryArgs.push(faker.lorem.word());
    }
  }

  while (totalCounter < 10000000) {
    try {
      await db.pool.query(queryString, queryArgs)
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
  // console.log(totalCounter);
  let endTime = new Date().toLocaleTimeString();
  console.log('Ending time', endTime)
  console.log('Total Counter: ', totalCounter);
  return process.exit();
};

seedShoes(10000)

// name: String,
// picture: String,
// id: Number,
// price: Number,
// type: String