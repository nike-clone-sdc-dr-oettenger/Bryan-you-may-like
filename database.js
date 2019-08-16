const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nikeShoes');

//sdfsdf
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
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  var hemp = new Shoe({
    name: shoe.name,
    price: shoe.price,
    picture: shoe.picture,
    type: shoe.type,
    id: shoe.shoeId
  })

  hemp.save(function(err, product) {
    console.log('******* saved document *******')
  })
}

const retrieve = function() {
  Shoe.find(function(err, docs) {
    console.log(docs)
  })
}

const clearDb = function() {
  Shoe.deleteMany({});
}

module.exports = {
  save: save,
  retrieve: retrieve,
  clearDb: clearDb
}