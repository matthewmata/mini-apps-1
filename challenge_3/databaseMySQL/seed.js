const db = require('./models');
const seedData = require('./seedData.json');

const seeder = (data) => {
  db.bulkCreate(data)
    .then(() => console.log('seeded'))
    .catch(err => console.log(err));
}

seeder(seedData);