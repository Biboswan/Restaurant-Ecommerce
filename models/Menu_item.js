const mongoose = require('mongoose');
const { Schema } = mongoose;

const menu_itemSchema = new Schema({
  category: String,
  subcategory: String,
  item_name: String,
  price: Number,
  image_url: String,
  availability: { type: String, default: 'Yes' },
});

mongoose.model('menu', menu_itemSchema);
