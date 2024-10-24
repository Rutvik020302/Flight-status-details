// Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar: React.FC = () => {
  // State to manage the visibility of the navbar links
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the navbar links
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h1 className="navbar-title">Travelopia</h1>
        <button className="hamburger" onClick={toggleNavbar}>
          <span className={`line ${isOpen ? 'open' : ''}`}></span>
          <span className={`line ${isOpen ? 'open' : ''}`}></span>
          <span className={`line ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li>
          <a href="https://www.travelopia.com/about-us/" target="_blank" rel="noopener noreferrer">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
