const Pool = require('pg').Pool;
// const faker = require('faker');

const pgOption = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
}

const pool = new Pool(pgOption)

const psqlPost = (shoe, callback) => {
  const values = [shoe.name, shoe.picture, shoe.id, shoe.price, shoe.type];
  const queryString = 'INSERT INTO shoes (name, picture, id, price, type) values($1, $2, $3, $4, $5)'

  pool.query(queryString, values)
  .then((res) => {
    callback(res);
  })
  .catch((err) => {
    callback(err);
  });
}

module.exports = {
  post: psqlPost
}


// name: String,
// picture: String,
// id: Number,
// price: Number,
// type: String

// const pgPool = new Pool({
//   database: 'shoes'
// });

// const createShoes = (num) => {
//   pgPool.connect()
//     .then(() => {

//       let shoeArray = [];
//       let arr1 = '';
//       let arr2 = '';
//       let arr3 = '';
//       let arr4 = '';
//       let arr5 = '';

//       for (var i = 0; i < num; i++) {
//         shoeArray.push(faker.lorem.words()); // name
//         shoeArray.push(faker.image.imageUrl()); // picture url
//         shoeArray.push(faker.random.number()); // id number
//         shoeArray.push(faker.random.number()); // price 
//         shoeArray.push(faker.lorem.words()); // type
        
//       }
//     })
//     return (
//       pgPool.query(`INSERT INTO shoes (name, picture, id, price, type) VALUES )`)
//     )
// }