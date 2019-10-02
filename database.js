const mongoose = require('mongoose');

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

// GET
const retrieve = function(res) {
  Shoe.find(function(err, docs) {
    //console.log(docs)
  }).limit(10).then(function(results) {
    res.setHeader('access-control-allow-origin', '*')
    res.send(results);
  })
}

// POST
const createShoe = (shoe, callback) => {
  let newShoe = new Shoe(shoe);
  newShoe.save(err => {
    if (err) {
      console.error(err);
    } else {
      callback(null);
    }
  })
}

// PUT
const updateShoe = (shoe, callback) => {
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
      callback(null);
    }
  })
}

// DELETE
const deleteShoe = (shoeId, callback) => {
  Shoe.deleteOne({ id: shoeId }, (err) => {
    if (err) {
      console.error(err);
    } else {
      callback(null)
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
  createShoe: createShoe,
  updateShoe: updateShoe,
  deleteShoe: deleteShoe,
  clearDb: clearDb
}