import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Frontend/Home/Home.js';
import ProductPage from './components/Frontend/ProductPage/ProductPage.js';
import AuthPage from './components/Frontend/Auth/AuthPage.js';
import Offers from './components/Frontend/Offers/Offers.js';
import Collections from './components/Frontend/Collections/Collections.js';
import Contact from './components/Frontend/ContactUs/Contact.js';
// import Form from './components/Frontend/simpleSS/simpleSS.js';
// import DisplayData from './components/Frontend/simpleSS/DisplaySS.js';
// // "homepage": "https://arghya-align-pix-design.github.io/Fragrance",
function App() {
  return (
  <div >
    {/* <div>
      <Form/>
    </div>
    <div>
      <DisplayData/>
    </div> */}
      <Router basename="/">
      <Routes>
         {/*Root route for displaying all products*/} 
        <Route path="/" element={<Home />}/>
        <Route path="/collections" element={<Collections />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/product/:productId" element={<ProductPage />}/>
      </Routes>
      </Router> 
  </div>
  );
}

export default App;