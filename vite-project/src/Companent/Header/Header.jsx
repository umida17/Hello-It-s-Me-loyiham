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
                <a className='about' href="#">Home</a>
                <a  className='about' href="#">About</a>
                <a  className='about' href="#">Services</a>
                <a  className='about' href="#">Portfolio</a>
                <a  className='about' href="#">Contact</a>
              </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;