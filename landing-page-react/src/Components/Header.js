import React, { useState } from 'react';
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h>News Hub</h>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {isOpen ? (
          <IoCloseSharp className="menu-icon1" onClick={toggleMenu} /> 
        ) : (
          <IoMenuSharp className="menu-icon" onClick={toggleMenu} />
        )}
      </nav>
      <nav className="navbar2">
        <ul className="nav-links2">
          <li><a href="#">Show all</a></li>
          <li><a href="#">Latest news</a></li>
          <li><a href="#">Top news</a></li>
          <li><a href="#">Most views</a></li>
        </ul>
    
        <form className="search-form2">
          <input type="text" placeholder="Search for news"/>
          <button type="submit">Search</button>
        </form>
      </nav>
    </>
  );
};

export default Header;
