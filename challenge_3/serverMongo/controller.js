const db = require('../databaseMongo')

// Controller handling database requrest
module.exports = {
  getAll: (req, res) => {
    db.find({})
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('Error in GET ALL'))
  },
  createOne: (req, res) => {
    const { name, email, password, addressLine1, addressLine2, city, state, zipCode, creditCardNum, expiryDate, CVV, billingZipCode } = req.body;
    db.create({ name, email, password, addressLine1, addressLine2, city, state, zipCode, creditCardNum, expiryDate, CVV, billingZipCode })
      .then(() => res.status(201).send('Created One'))
      .catch(err => res.status(404).send('Error in GET ALL'))
  },
  deleteAll: (req, res) => {
    db.deleteMany({})
    .then(() => res.status(202).send('Deleted All'))
    .catch(err => res.status(404).send('Error in DELETED ALL'))
  },
  getOne: (req, res) => {
    const { email } = req.params;
    db.findOne({ email })
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('Error in GET ONE'))
  },
  updateOne: (req, res) => {
    const { name, password, addressLine1, addressLine2, city, state, zipCode, creditCardNum, expiryDate, CVV, billingZipCode } = req.body;
    const { email } = req.params
    db.updateOne({ email }, { name, email, password, addressLine1, addressLine2, city, state, zipCode, creditCardNum, expiryDate, CVV, billingZipCode })
      .then(() => res.status(203).send('Updated One'))
      .catch(err => res.status(404).send('Error in UPDATE ONE'))
  },
  deleteOne: (req, res) => {
    const { email } = req.params;
    db.deleteOne({ email })
      .then(() => res.status(202).send('Deleted One'))
      .catch(err => res.status(404).send('Error in DELETE ONE'))
  },
}