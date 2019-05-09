const db = require('./index');
const Sequelize = require('sequelize');

const Users = db.define('users', {
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  addressLine1: { type: Sequelize.STRING },
  addressLine2: { type: Sequelize.STRING },
  city: { type: Sequelize.STRING },
  state: { type: Sequelize.STRING },
  zipCode: { type: Sequelize.INTEGER },
  creditCardNum: { type: Sequelize.STRING },
  expiryDate: { type: Sequelize.STRING },
  CVV: { type: Sequelize.INTEGER },
  billingZipCode: { type: Sequelize.INTEGER },
}, {
  timestamps: false
});

db.sync();

module.exports = Users;