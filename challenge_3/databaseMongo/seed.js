const db = require('./index');
const seedData = require('./seedData.json');

const seeder = (data) => {
  db.create(data)
    .then(() => console.log('seeded'))
    .catch(err => console.log(err));
}

seeder(seedData);