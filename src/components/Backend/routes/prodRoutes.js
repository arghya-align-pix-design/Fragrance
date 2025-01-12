// routes/productRoutes.js
const express = require('express');
//const Product = require('../models/products');
//const Review = require('../models/reviews');
const productController =require('../controller/productCont');
const router = express.Router();



router.get('/products', productController.getAllProducts);

module.exports = router;


//get specific item
// router.get('/products/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) return res.status(404).json({ error: "Product not found" });
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching product" });
//   }
// });


// // Get reviews for a product
// router.get('/products/:id/reviews', async (req, res) => {
//   try {
//     const reviews = await Review.find({ productId: req.params.id });
//     res.json(reviews);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching reviews' });
//   }
// });

//module.exports = router;
