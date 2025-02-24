import React from 'react';
import { motion } from "framer-motion"; // Ensure it's framer-motion
import './ProductCard.css';
import { Link } from 'react-router-dom';

const hoverVariants = {
  from: { scale: 1.9 }, // Default scale
  hover: { 
    scale: 1.02,
    // boxShadow: "5px 10px 4px rgb(13, 4, 31)", // Add box shadow
    // Zoom effect
    transition: {
      type: "spring",
      stiffness: 250, damping: 180,
      duration: 1.0, repeat: Infinity, 
      repeatType: "reverse",
      ease: "easeInOut",
     } // Smooth hover
  },
};

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product._id}`} state={{ product }}>
      <motion.div
        className="product-card"
        variants={hoverVariants}
        whileHover={{
          scale: 1.05,
          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)", // Properly placed inside whileHover
          transition: { type: "spring", stiffness: 200, damping: 15 },
        }}
      >
        <img
          src={`./${product.images[0]}`}
          alt={product.name}
          className="product-card__image"
        />
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__price">${product.price}</p>
      </motion.div>
    </Link>
  );
}

export default ProductCard;
