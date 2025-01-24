import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCards/ProductCard"; // Import the ProductCard component
import "./ProductGrid.css";

function ProductGrid() {
  // Sample product data (replace with actual data)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://perfumes-atpy.onrender.com/api/products'); // Adjust the URL if needed
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
