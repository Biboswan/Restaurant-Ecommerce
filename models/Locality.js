const mongoose = require('mongoose');
const { Schema } = mongoose;

const localitySchema = new Schema({
  locality: String,
});

mongoose.model('localities', localitySchema);
