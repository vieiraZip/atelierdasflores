import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

function Header() {
  const location = useLocation();
  
  const scrollToInformacoes = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // Se não estiver na home, navegar primeiro
      window.location.href = '/#informacoes';
      return;
    }
    
    const informacoesSection = document.querySelector('.info-section');
    if (informacoesSection) {
      informacoesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className="compact-header">
      <div className="header-content">
        <div className="header-left">
          <Link to="/">
            <img src={logo} alt="Logo" className="header-logo" />
          </Link>
          <Link to="/">
            <h1 className="header-title">Atelier das Flores</h1>
          </Link>
        </div>
        <nav className="header-nav">
          <Link 
            to="/" 
            className={`nav-btn ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/flores" 
            className={`nav-btn ${location.pathname === '/flores' ? 'active' : ''}`}
          >
            Flores
          </Link>
          <Link 
            to="/cestas" 
            className={`nav-btn ${location.pathname === '/cestas' ? 'active' : ''}`}
          >
            Cestas
          </Link>
          <Link 
            to="/ramalhetes" 
            className={`nav-btn ${location.pathname === '/ramalhetes' ? 'active' : ''}`}
          >
            Ramalhetes
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header; 