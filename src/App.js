import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Frontend/Home/Home.js';
import ProductPage from './components/Frontend/ProductPage/ProductPage.js';

function App() {
  return (
  <div >
      <Router basename="/perfume">
      <Routes>
         Root route for displaying all products 
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </Router> 
    {/*<Home/> */}


  
  </div>
        
  );
}

export default App;
