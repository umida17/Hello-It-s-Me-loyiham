import React from 'react';
import "./Header.css";
import { useLanguage } from '../../LanguageContext/LanguageContext';

const Header = () => {
 const { t, setLanguage, language } = useLanguage()


  return (
    <div>
      <header className='header'>
        <div className="container">
          <div className="header-container">
              <h1 className='port'>Portfolio</h1>
              <div className="home">
                <a className='about' href="#">{t('home')}</a>
                <a className='about' href="#">{t('about')}</a>
                <a className='about' href="#">{t('services')}</a>
                <a className='about' href="#">{t('portfolio')}</a>
                <a className='about' href="#">{t('contact')}</a>
              </div>
              
               <div className="language-select">
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                  <option value="en">EN</option>
                  <option value="uz">UZ</option>
                  <option value="ru">RU</option>
                </select>
              </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;