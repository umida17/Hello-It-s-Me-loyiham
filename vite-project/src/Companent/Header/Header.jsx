import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className='header'>
        <div className="container">
          <div className="header-container">
              <h1 className='port'>Portfolio</h1>
              <div className="home">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>
              </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;