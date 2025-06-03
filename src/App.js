import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FloresCatalog from './components/FloresCatalog';
import CestasCatalog from './components/CestasCatalog';
import RamalhetesCatalog from './components/RamalhetesCatalog';
import CoroaCatalog from './components/CoroaCatalog';

function App() {
  const location = useLocation();
  const isCoroasPage = location.pathname === '/coroas';

  return (
    <div className="App">
      {!isCoroasPage && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flores" element={<FloresCatalog />} />
          <Route path="/cestas" element={<CestasCatalog />} />
          <Route path="/ramalhetes" element={<RamalhetesCatalog />} />
          <Route path="/coroas" element={<CoroaCatalog />} />
        </Routes>
      </main>
      {!isCoroasPage && <Footer />}
    </div>
  );
}

export default App;
