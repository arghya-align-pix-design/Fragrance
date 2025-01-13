// Home.js
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import ProductGrid from '../ProductGrid/ProductGrid';

function Home() {
  return (
    <div>
      <Navbar /> <br/>
      <Banner />
      <ProductGrid />
    </div>
  );
}

export default Home;
