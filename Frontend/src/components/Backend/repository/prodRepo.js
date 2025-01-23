// productRepo.js

const Product = require('../models/products');
//const Reviews= require('../models/reviews');

const getAllProducts = async () => {
    // const collection= connectDB.collection('products');

  try {
    const products = await Product.find();
    return  products;
  } catch (error) {
    throw new Error('Error fetching products from database');
  }
};

module.exports = { getAllProducts };
