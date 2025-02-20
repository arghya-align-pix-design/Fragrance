import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Frontend/Home/Home.js';
import ProductPage from './components/Frontend/ProductPage/ProductPage.js';
import AuthPage from './components/Frontend/Auth/AuthPage.js';
// // "homepage": "https://arghya-align-pix-design.github.io/Fragrance",
function App() {
  return (
  <div >
      <Router basename="/">
      <Routes>
         Root route for displaying all products 
        <Route path="/" element={<Home />}/>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/product/:productId" element={<ProductPage />}/>
      </Routes>
      </Router> 
    {/*<Home/> */}
  </div>
  );
}

export default App;
