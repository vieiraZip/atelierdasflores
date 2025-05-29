import React, { useState, useEffect } from 'react';
import './App.css';
import banner1 from './assets/Entrega Grátis (Banner Clássico para Mercado Shops – Computador (grande)).png';
import banner2 from './assets/Cópia de Entrega Grátis (Banner Clássico para Mercado Shops – Computador (grande)).png';
import data from './data.json';

function App() {
  const [tab, setTab] = useState('buques');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const banners = [banner1, banner2];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
        setFadeClass('fade-in');
      }, 300); 
    }, 5000); 
    return () => clearInterval(interval);
  }, [banners.length]);

  const buques = data.filter(item => item.tipo === 'Buquê');

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1 className="main-title">Atelier das Flores</h1>
        <p className="main-subtitle">Flores que encantam, momentos que marcam. Arranjos exclusivos para todas as ocasiões.</p>
      </header>

      <section className="slider-section">
        <div className="slider">
          <img 
            src={banners[currentSlide]} 
            alt={`Banner ${currentSlide + 1}`} 
            className={`slider-banner ${fadeClass}`} 
          />
        </div>
      </section>

      <section className="tabs-section">
        <div className="tabs">
          <button className={tab === 'buques' ? 'tab active' : 'tab'} onClick={() => setTab('buques')}>Buquês</button>
          <button className={tab === 'cestas' ? 'tab active' : 'tab'} onClick={() => setTab('cestas')}>Cestas</button>
        </div>
        <div className="tab-content">
          {tab === 'buques' && (
            <div className="product-list">
              {buques.map((buque, index) => (
                <div key={index} className="product-item">
                  <img src={`./assets/${buque.imagem}`} alt={buque.nome} className="product-image" />
                  <h4 className="product-name">{buque.nome}</h4>
                  <p className="product-price">R$ {buque.preço}</p>
                </div>
              ))}
            </div>
          )}
          {tab === 'cestas' && <div>Conteúdo de Cestas (adicione seus produtos ou imagens aqui)</div>}
        </div>
      </section>

      <div className="contact-center">
        <a className="contact-btn" href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
          Fale Conosco
        </a>
      </div>

      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Atelier das Flores</h3>
            <p className="footer-address">Rua Anita Garibaldi, 961 - Joinville</p>
            <p className="footer-phone">Número: a colocar</p>
            <p className="footer-cnpj">CNPJ: (a colocar)</p>
          </div>
          <div className="footer-copyright">
            <span>© {new Date().getFullYear()} Atelier das Flores. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
