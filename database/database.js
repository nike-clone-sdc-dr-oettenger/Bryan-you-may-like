const mongoose = require('mongoose');
const mysqlApi = require('../database/models/index.js');



// mongoose.connect('mongodb+srv://Marcus:4815162342@youmaylike-necsu.mongodb.net/nikeshoes?retryWrites=true&w=majority&authSource=true', {useNewUrlParser: true});
mongoose.connect('mongodb://localhost/shoes', {useNewUrlParser: true});


let shoeSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  picture: String,
  id: Number,
  price: Number,
  type: String
});

//repoSchema.path('name').index({unique: true});

let Shoe = mongoose.model('Shoe', shoeSchema);

let save = (shoe) => {

  var hemp = new Shoe({
    name: shoe.name,
    price: shoe.price,
    picture: shoe.picture,
    type: shoe.type,
    id: shoe.shoeId
  })

  return hemp.save(function(err, product) {
   // console.log('******* saved document *******')
  })
}

// GET for Mongo
const retrieve = function(res) {
  Shoe.find(function(err, docs) {
    //console.log(docs)
  }).limit(10).then(function(results) {
    res.setHeader('access-control-allow-origin', '*')
    res.send(results);
  })
}

// GET for mysql
const retrieveMysql = function(res) {
  mysqlApi.getSomeData((results) => {
    res.send(results);
  })
}

// POST
const createShoe = (shoe, callback) => {
  let newShoe = new Shoe(shoe);

  // postgresQuery.post.psqlPost()
  // curl -d "name=shoe&price=5&picture=string&type=cotton&id=999" -X POST http://localhost:8081/shoes

  newShoe.save(err => {
    if (err) {
      console.error(err);
    } else {
      callback(null);
    }
  })
}

// PUT
const updateShoe = (shoe) => {
  Shoe.findOneAndUpdate({
    name: shoe.name,
    picture: shoe.picture,
    type: shoe.type
  },
  {
    id: shoe.id,
    price: shoe.price
  }, (err) => {
    if (err) {
      console.error(err);
    } else {
      // callback(null);
      console.log('updated shoe')
    }
  })
}

// DELETE
// const deleteShoe = (shoeId, callback) => {
//   Shoe.deleteOne({ id: shoeId }, (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       callback(null)
//     }
//   })
// }

const deleteShoe = (shoe, callback) => {
  Shoe.findOneAndUpdate({
    name: '',
    picture: '',
    type: ''
  },
  {
    id: null,
    price: null
  }, (err) => {
    if (err) {
      console.error(err);
    } else {
      // callback(null);
      console.log('deleted shoe')
    }
  })
}


const clearDb = function(callback) {
  //console.log('delete many')
  Shoe.deleteMany({}, function() {
    callback();
  });
}

module.exports = {
  Shoe: Shoe,
  save: save,
  retrieve: retrieve,
  retrieveMysql: retrieveMysql,
  createShoe: createShoe,
  updateShoe: updateShoe,
  deleteShoe: deleteShoe,
  clearDb: clearDb
}

// postgres command for creating table
// CREATE TABLE shoes (ID SERIAL PRIMARY KEY, name VARCHAR(250), picture VARCHAR(250), id int, price int, type VARCHAR(250))

// name: String,
// picture: String,
// id: Number,
// price: Number,
// type: String