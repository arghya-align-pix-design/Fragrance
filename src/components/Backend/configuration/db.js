// config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const mongo="https://perfumes-atpy.onrender.com";

const connectDB = async () => {
  try {
    await mongoose.connect(mongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
