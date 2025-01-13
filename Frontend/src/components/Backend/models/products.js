// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  images: [String],
  sizes: [String],
});

module.exports = mongoose.model('products', productSchema);
