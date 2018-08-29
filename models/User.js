const mongoose = require('mongoose');
const { Schema } = mongoose;
const cart_Schema = require('./Cart');

const userSchema = new Schema({
  googleID: String,
  emailID: String,
  cart: cart_Schema,
});

mongoose.model('users', userSchema);
