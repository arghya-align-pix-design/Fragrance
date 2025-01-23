// seedData.js
const mongoose = require('mongoose');
const Product = require('./models/products');
const Review = require('./models/reviews');
require('dotenv').config();
//const connectDB = require('./configuration/db');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = Array.from({ length: 50 }, (_, i) => ({
  name: `Perfume ${i + 1}`,
  description: `This is the description for perfume ${i + 1}.`,
  price: (Math.random() * 100).toFixed(2),
  images: ["/perfume1.jpg"],
  sizes: ['50ml', '100ml', '150ml'],
}));

async function seedData() {
  try {
    await Product.insertMany(products);
    console.log("Products seeded successfully");

    const reviews = products.map((product) => ({
      productId: product._id || new mongoose.Types.ObjectId(), // Ensure productId is an ObjectId
      reviewText: "This is a great perfume!",
      rating: Math.floor(Math.random() * 5) + 1,
    }));

    await Review.insertMany(reviews);
    console.log("Reviews seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedData();
