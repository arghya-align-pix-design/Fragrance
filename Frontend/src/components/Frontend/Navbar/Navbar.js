import React from 'react';
import './Navbar.css';

/*Explanation of Component Names
navbar: The main container of the navbar.
navbar__logo: For the brand logo/title on the left side.
navbar__links: Container for all the navbar links.
navbar__item: Each list item in the navbar links.
navbar__link: The link styles inside each navbar item.
navbar__button: For the Sign In button on the right side. */
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        Perfume Shop
      </div>
      <ul className="navbar__links">
        <li className="navbar__item"><a href="#home" className="navbar__link">Home</a></li>
        <li className="navbar__item"><a href="#collections" className="navbar__link">Collections</a></li>
        <li className="navbar__item"><a href="#offers" className="navbar__link">Offers</a></li>
        <li className="navbar__item"><a href="#contact" className="navbar__link">Contact</a></li>
      </ul>
      <button className="navbar__button">Sign In</button>
    </nav>
  );
}

export default Navbar;
