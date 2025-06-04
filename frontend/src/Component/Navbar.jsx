import React, { useState } from "react";
import "../styles/Navbar.css"; 
import Logo from '../assets/Logo.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  function GoToSignup () {
     navigate('/SignUp');
  }
  function GoToSignIn () {
     navigate('/SignIn');
  }
  function GoToHome () {
     navigate('/');
  }

  return (
    <nav id="navbar" className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li onClick={GoToHome} className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Services</li>
        <li className="nav-item">Contact</li>
      </ul>

      <div className="navbar-search-signin">
        <input
          type="text"
          className="navbar-search"
          placeholder="Search..."
        />
        <button onClick={GoToSignIn} className="btn signin-btn">Sign In</button>
        <button onClick={GoToSignup}  className="btn signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
