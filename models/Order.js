const mongoose = require('mongoose');
const { Schema } = mongoose;
const cart_Schema = require('./Cart');

const orderSchema = new Schema({
  name: String,
  address: String,
  mobile_number: Number,
  cart: cart_Schema,
  total_pay: Number,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('orders', orderSchema);
