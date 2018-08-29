const mongoose = require('mongoose');
const { Schema } = mongoose;

const cart_itemSchema = new Schema({
  item_name: String,
  quantity: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
});

module.exports = cart_itemSchema;
