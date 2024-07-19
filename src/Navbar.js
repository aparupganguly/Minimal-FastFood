import React from 'react';
import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className ="navbarContainer">
        <div className="logo">
            FM
        </div>
        <div className="navLinks">
            <p>request new</p>
            <p>rate the site</p>
        </div>
    </div>
  )
}

export default Navbar