const nano = require('nano')('http://localhost:5984');
const faker = require('faker');

const youmaylikeDatabase = nano.db.use('youmaylike');

function randomPrice(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// console.log(randomPrice(1000));

const seedShoes = async (numOfShoes) => {
  if (numOfShoes < 50) {
    const shoeArray = [];

    // for (let i = 0; i < numOfShoes; i++) {
    for (let j = 0; j < 20; j++) {
      shoeArray.push({
        id: j,
        name: faker.lorem.word(),
        picture: faker.image.imageUrl(),
        price: randomPrice(1000),
        type: faker.lorem.word()
      });
    }
    await youmaylikeDatabase.bulk({ docs: shoeArray }).then(() => {
      numOfShoes++;
      seedShoes(numOfShoes);
      console.log('bulking data succeeded', numOfShoes)
    }).catch((err) => {
      console.error(err);
    })
  }
};


// const seedShoes = async (numOfShoes) => {
//   // querying 20 at at time
//   let queryArgs = [];

//   for (let i = 0; i < numOfShoes; i++) {
//     for (let j = 0; j < 20; j++) {
//       queryArgs.push(faker.lorem.word());
//       queryArgs.push(faker.image.imageUrl());
//       queryArgs.push(randomPrice(1000));
//       queryArgs.push(faker.lorem.word());
//     }
//   }

//   while (totalCounter < 1000) {
//     try {
//       await youmaylikeDatabase.bulk({ docs: queryArgs})
//         .then(() => {
//           totalCounter = totalCounter + 20;
//         })
//         .catch ((err) => {
//           console.error(err);
//         })
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   // console.log(totalCounter);
//   return process.exit();
// };

seedShoes(0)