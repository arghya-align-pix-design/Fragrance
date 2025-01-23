import React, { useEffect, useState } from 'react';
import { motion } from "motion/react";
import { useParams, useLocation } from 'react-router-dom';
import './ProductPage.css';

function ProductPage() {
  const { productId } = useParams(); // Extract product ID from URL
  const location = useLocation();
  const productFromState = location.state?.product; // Access passed state here

  const [product, setProduct] = useState(productFromState || null); // Initialize with state if available
  const [price,setPrice]=useState(product.price);
  const [size,setSize]=useState(product.size);
  const [loading, setLoading] = useState(!productFromState); // Skip loading if data is in state
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only fetch if product data is not available from state
    if (!productFromState) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://localhost:4100/api/products/${productId}`);  //perfumes-atpy.onrender.com
          if (!response.ok) {
            throw new Error('Failed to fetch product details');
          }
          const data = await response.json();
          setProduct(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [productId, productFromState]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-page">
      <div className="product-images">
        {product.images?.map((image, index) => (
          <img src={`${process.env.PUBLIC_URL}/${image}`} alt={`Product ${index + 1}`} key={index} />
        ))}
      </div>
      
      <div className="product-details">
        <h2>{product.name}</h2>
        <p className="price">${price}</p>
        <p className="description">{product.description}</p>
        
        <div className="sizes">
          <h5>Available Sizes:</h5>
          <ul>
            {product.sizes?.map((size, index) => (
              <li key={index}><button onClick={()=>{
                 setPrice((1.8*price).toFixed(2));
              }}>{size}</button></li>
            ))}
          </ul>
        </div>

        <button className="share-btn">Share on Social Media</button>
      </div>

      <div className="reviews">
        <h5>Customer Reviews</h5>
        {product.reviews?.map((review) => (
          <div key={review.id} className="review">
            <strong>{review.user}</strong>
            <p>Rating: {review.rating} / 5</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;