const mongoose = require('mongoose');
const { Schema } = mongoose;
const cart_itemSchema = require('./Cart_item');

const cart_Schema = new Schema({
  items: [cart_itemSchema],
  count: { type: Number, default: 0 },
});

module.exports = cart_Schema;
