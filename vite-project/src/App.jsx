import React from 'react';
import translations from "./Locals/Local.json";  
import Header from './Companent/Header/Header';
import "./App.css";

import Hero from './Companent/Hero/Hero';
import Main from './Companent/Main/Main';
import { LanguageProvider } from "./LanguageContext/LanguageContext.jsx";


const App = () => {
  return (
    <LanguageProvider>
      <div>
         <Header /> 
         <Hero />
         <Main />
      </div>
    </LanguageProvider>
  );
};

export default App;