const db = require('../databaseMySQL/models');

module.exports = {
  getAll: (req, res) => {
    db.findAll({})
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('ERROR in Get All'));
  },
  post: (req, res) => {
    const { name, email, password, addressLine1, addressLine2, city, state, zipCode, creditCardNum, expiryDate, CVV, billingZipCode } = req.body;
    db.create({ name, email, password, addressLine1, addressLine2, city, state, zipCode, creditCardNum, expiryDate, CVV, billingZipCode })
      .then(() => res.status(201).send('Posted One'))
      .catch(err => res.status(404).send('ERROR in Post'))
  },
  deleteAll: (req, res) => {
    db.destroy({ where : {} })
      .then(() => res.status(202).send('Deleted All'))
      .catch(err => res.status(404).send('ERROR in Delete All'))
  },
  getOne: (req, res) => {
    const { email } = req.params
    console.log(req.params)
    db.findAll({ where : { email } })
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('ERROR in Get One'));
  },
  updateOne: (req, res) => {
    const { name, email, password, addressLine1, addressLine2, city, state, zipCode, creditCardNum, expiryDate, CVV, billingZipCode } = req.body;
    db.update({ name, email, password, addressLine1, addressLine2, city, state, zipCode, creditCardNum, expiryDate, CVV, billingZipCode }, { where : { email: req.params.email }})
      .then(() => res.status(201).send('Updated One'))
      .catch(err => res.status(404).send('ERROR in Update'))
  },
  deleteOne: (req, res) => {
    const { email } = req.params;
    db.destroy({ where : { email } })
      .then(() => res.status(202).send('Deleted One'))
      .catch(err => res.status(404).send('ERROR in Delete One'))
  },
}