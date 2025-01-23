import React from 'react';
import { motion } from "framer-motion"; // Ensure it's framer-motion
import './ProductCard.css';
import { Link } from 'react-router-dom';

const hoverVariants = {
  from: { scale: 1 }, // Default scale
  hover: { 
    scale: 1.1,
    // Zoom effect
    transition: { type: "spring", stiffness: 300, damping: 100,
      duration: 0.5, repeat: Infinity, repeatType: "reverse",
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
        whileHover="hover"
      >
        <img
          src={`../../../../public/${product.images[0]}`}
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
