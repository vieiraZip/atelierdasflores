import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FloresCatalog from './components/FloresCatalog';
import CestasCatalog from './components/CestasCatalog';
import PresentesCatalog from './components/PresentesCatalog';
import CoroaCatalog from './components/CoroaCatalog';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flores" element={<FloresCatalog />} />
          <Route path="/cestas" element={<CestasCatalog />} />
          <Route path="/presentes" element={<PresentesCatalog />} />
          <Route path="/coroas" element={<CoroaCatalog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
