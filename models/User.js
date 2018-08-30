const mongoose = require('mongoose');
const { Schema } = mongoose;
const cart_Schema = require('./Cart');

const userSchema = new Schema({
  googleID: String,
  emailID: String,
  cart: { type: cart_Schema, default: { items: [], count: 0 } },
});

mongoose.model('users', userSchema);
