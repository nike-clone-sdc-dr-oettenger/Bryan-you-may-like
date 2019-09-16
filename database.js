const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Marcus:4815162342@youmaylike-necsu.mongodb.net/nikeshoes?retryWrites=true&w=majority&authSource=true', {useNewUrlParser: true});


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
  //console.log('save')
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

  return hemp.save(function(err, product) {
   // console.log('******* saved document *******')
  })
}

const retrieve = function(res) {
  Shoe.find(function(err, docs) {
    //console.log(docs)
  }).limit(10).then(function(results) {
    res.setHeader('access-control-allow-origin', '*')
    res.send(results);
  })
}

const clearDb = function(callback) {
  //console.log('delete many')
  Shoe.deleteMany({}, function() {
    callback();
  });
}

module.exports = {
  save: save,
  retrieve: retrieve,
  clearDb: clearDb
}