const {Shoe} = require('../database/database.js');

test('Database should seed 100 records', (done) => {
  Shoe.find({}).then((data) => {
    expect(data.length).toBeGreaterThanOrEqual(99);
    done();
  })
});