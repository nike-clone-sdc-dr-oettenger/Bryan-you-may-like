const {Pool} = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: true
});

const psqlPost = (shoe, callback) => {
  const values = [shoe.name, shoe.picture, shoe.id, shoe.price, shoe.type];
  const queryString = 'INSERT INTO shoes (name, picture, id, price, type) values(shoe, img, 1, $5, metal)'

  pool.query(queryString, values)
  .then(res => {
    callback(res);
  })
  .catch(err => {
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