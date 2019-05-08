var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout', {useNewUrlParser: true});

var userSchema = new mongoose.Schema({
  name: {type: String, require: true},
  email: {type: String, require: true},
  password: {type: String, require: true},
  addressLine1: {type: String},
  addressLine2: {type: String},
  city: {type: String},
  state: {type: String},
  zipCode: {type: Number},
  creditCardNum: {type: String},
  expiryDate: {type: String},
  CVV: {type: Number},
  billingZipCode: {type: Number},
});

var Users = mongoose.model('users', userSchema);

module.exports = Users;