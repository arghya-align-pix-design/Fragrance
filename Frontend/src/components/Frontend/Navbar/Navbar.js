import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from "react-router-dom";

/*Explanation of Component Names
navbar: The main container of the navbar.
navbar__logo: For the brand logo/title on the left side.
navbar__links: Container for all the navbar links.
navbar__item: Each list item in the navbar links.
navbar__link: The link styles inside each navbar item.
navbar__button: For the Sign In button on the right side. */
function Navbar() {

  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button className="navbar__logo" onClick={() => navigate("/")}>
        Perfume Shop
      </button>
      <ul className="navbar__links">
        <li className="navbar__item"><button className="navbar__item" onClick={() => navigate("/")}>Home</button></li>
        <li className="navbar__item"><button  className="navbar__item" onClick={() => navigate("/collections")}> Collections </button></li>
        <li className="navbar__item"> <button  className="navbar__item" onClick={() => navigate("/offers")}> Offers </button></li>
        <li className="navbar__item"><button  className="navbar__item" onClick={() => navigate("/contact")}>Contact</button></li>
      </ul> 
      <button className="navbar__button"
      onClick={() => navigate("/auth")} >Sign Up/Sign In</button> {/*className="auth-button"*/}
    </nav>
  );
}

export default Navbar;
