import React from 'react';
import Header from './Companent/Header/Header';
 import "./App.css"
import Hero from './Companent/Hero/Hero';
import Main from './Companent/Main/Main';
 
const App = () => {
  return (
    <div>
       <Header /> 
       <Hero/>
       <Main/>
    </div>
  );
};

export default App;