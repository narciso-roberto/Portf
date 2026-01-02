import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import AboutMe from './Componentes/AboutMe';
import Skills from './Componentes/Skills';
import Projects from './Componentes/Projects'
import Footer from './Componentes/Footer';

import "./geral.css";

const App = () => {


  return (
  <div className='listSection'>
    <Header/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Footer/>
  </div>);
}

export default App;