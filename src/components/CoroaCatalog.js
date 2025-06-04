import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import bannerCoroas from '../assets/bannercoroas.jpg';
import bannerCoroasMobile from '../assets/bannercoroasmobile.jpg';
import data from '../data.json';
import logo from '../assets/logo.jpeg';
import Footer from './Footer';

// Importar todas as imagens dos produtos
import img6rosas from '../assets/6rosas.jpg';
import imgLuxury from '../assets/luxury.jpg';
import imgRosa from '../assets/rosa.jpg';
import imgTriogirassois from '../assets/triogirassois.jpg';
import imgMix from '../assets/mix.jpg';
import imgCoroaAzul from '../assets/coroaazul.jpg';
import imgCoroaRosaBranca from '../assets/coroarosabranca.jpg';
import imgCoroaRosaVermelha from '../assets/coroarosavermelha.jpg';
import imgAlegriaBlue from '../assets/alegriablue.jpg';
import imgCoroaEspecial from '../assets/coroaespecial.jpg';

function CoroaCatalog() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Banners baseados no dispositivo
  const banners = isMobile ? [bannerCoroasMobile] : [bannerCoroas];

  // Filtrar apenas coroas
  const coroas = data.filter(item => item.tipo === 'Coroa');

  // Refs para scroll suave
  const informacoesRef = useRef(null);

  // Mapeamento das imagens
  const imageMap = {
    '6rosas.jpg': img6rosas,
    'luxury.jpg': imgLuxury,
    'rosa.jpg': imgRosa,
    'triogirassois.jpg': imgTriogirassois,
    'mix.jpg': imgMix,
    'coroaazul.jpg': imgCoroaAzul,
    'coroarosabranca.jpg': imgCoroaRosaBranca,
    'coroarosavermelha.jpg': imgCoroaRosaVermelha,
    'alegriablue.jpg': imgAlegriaBlue,
    'coroaespecial.jpg': imgCoroaEspecial,
  };

  const openModal = (produto) => {
    setSelectedProduct(produto);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        setFadeClass('fade-out');
        setTimeout(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
          setFadeClass('fade-in');
        }, 300); 
      }, 5000); 
      return () => clearInterval(interval);
    }
  }, [banners.length]);

  // Reset scroll ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappMessage = "Olá! Gostaria de fazer um pedido de coroa de flores.";
  const whatsappUrl = `https://wa.me/5547988150730?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="home-container">
      {/* Header simples apenas com logo */}
      <header className="compact-header">
        <div className="header-content">
          <div className="header-left">
            <Link to="/">
              <img src={logo} alt="Logo" className="header-logo" />
              <h1 className="header-title">Atelier das Flores</h1>
            </Link>
          </div>
        </div>
      </header>

      {/* Banner com espaçamento */}
      <section className="slider-section enhanced-banner">
        <div className="banner-container">
          <div className="slider">
            <img 
              src={banners[currentSlide]} 
              alt={`Banner ${currentSlide + 1}`} 
              className={`slider-banner ${fadeClass}`} 
            />
          </div>
        </div>
      </section>

      {/* Seção de Diferenciais */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-row">
            <div className="benefit-item-simple">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Entrega para toda Joinville</h3>
              <p>Levamos suas homenagens em toda a cidade com segurança e pontualidade</p>
            </div>
            
            <div className="benefit-item-simple">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Atendimento 24 horas</h3>
              <p>Estamos sempre disponíveis para momentos de urgência e necessidades especiais</p>
            </div>
            
            <div className="benefit-item-simple">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Atendimento respeitoso</h3>
              <p>Cuidado especial e discrição em momentos delicados</p>
            </div>
            
            <div className="benefit-item-simple">
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Arranjos de qualidade</h3>
              <p>Flores frescas e arranjos cuidadosamente elaborados para homenagens especiais</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo de Coroas */}
      <section className="catalog-page">
        <div className="catalog-header">
          <div className="container">
            <nav className="breadcrumb">
              <Link to="/" className="breadcrumb-link">Home</Link>
              <span className="breadcrumb-separator">→</span>
              <span className="breadcrumb-current">Coroas de Flores</span>
            </nav>
            <h1 className="catalog-title">Coroas de Flores</h1>
            <p className="catalog-subtitle">Homenagens confortantes e arranjos especiais para momentos de despedida</p>
            <div className="catalog-message">
              <p><strong>Chame no WhatsApp para ver o catálogo completo!</strong></p>
            </div>
          </div>
        </div>

        <div className="catalog-content">
          <div className="container">
            <div className="products-catalog-grid-compact">
              {coroas.map((produto, index) => (
                <div key={index} className="catalog-product-card-compact">
                  <div 
                    className="catalog-product-image-container-compact"
                    onClick={() => openModal(produto)}
                  >
                    <img 
                      src={imageMap[produto.imagem] || `./assets/${produto.imagem}`} 
                      alt={produto.nome} 
                      className="catalog-product-image-compact" 
                    />
                    <div className="product-overlay-compact">
                      <span className="view-details-btn">Ver Detalhes</span>
                    </div>
                  </div>
                  
                  <div className="catalog-product-info-compact">
                    <h3 className="catalog-product-name-compact">{produto.nome}</h3>
                    <p className="catalog-product-description-compact">
                      {produto.Descricao || 'Arranjo especial feito com carinho e respeito.'}
                    </p>
                    
                    <a 
                      href={`${whatsappUrl}&text=${encodeURIComponent(`Olá! Gostaria de encomendar: ${produto.nome}`)}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="catalog-order-btn-compact"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Encomendar
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="catalog-cta-section">
              <div className="cta-content">
                <h2>Precisa de um arranjo personalizado?</h2>
                <p>Criamos homenagens únicas e respeitosas de acordo com suas preferências. Atendimento discreto e cuidadoso.</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="main-cta-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Falar com Nossa Equipe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Informações */}
      <section className="info-section" id="informacoes" ref={informacoesRef}>
        <div className="container">
          <h2 className="section-title">Informações da Loja</h2>
          <div className="info-grid-modern">
            <div className="info-card-modern">
              <div className="info-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="info-title">Endereço</h3>
              <p className="info-description">Venha nos visitar em nossa loja física</p>
              <div className="info-details">
                <p>Rua Anita Garibaldi, 961</p>
                <p>Joinville - SC</p>
              </div>
            </div>
            
            <div className="info-card-modern">
              <div className="info-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className="info-title">Contatos</h3>
              <p className="info-description">Entre em contato para pedidos e dúvidas</p>
              <div className="info-details">
                <a href="tel:+5547881507030" className="info-link">WhatsApp: (47) 8815-0730</a>
                <a href="mailto:atelierdasflores.mkt@gmail.com" className="info-link">atelierdasflores.mkt@gmail.com</a>
              </div>
            </div>
            
            <div className="info-card-modern">
              <div className="info-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3 className="info-title">Redes Sociais</h3>
              <p className="info-description">Siga-nos e acompanhe nossas novidades</p>
              <div className="social-links-modern">
                <a href="https://www.instagram.com/atelierdasfloresjoinville?igsh=Nmtyc2FodnVlNmhl" target="_blank" rel="noopener noreferrer" className="social-btn-modern instagram-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
                <a href="https://wa.me/5547988150730" target="_blank" rel="noopener noreferrer" className="social-btn-modern whatsapp-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Pop-up */}
      {selectedProduct && (
        <div className="product-modal-overlay" onClick={closeModal}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="modal-content">
              <div className="modal-image-container">
                <img 
                  src={imageMap[selectedProduct.imagem] || `./assets/${selectedProduct.imagem}`} 
                  alt={selectedProduct.nome} 
                  className="modal-product-image" 
                />
              </div>
              
              <div className="modal-product-details">
                <h2 className="modal-product-name">{selectedProduct.nome}</h2>
                <p className="modal-product-type">{selectedProduct.tipo}</p>
                <p className="modal-product-description">
                  {selectedProduct.Descricao || 'Arranjo especial feito com carinho e respeito.'}
                </p>
                
                <a 
                  href={`${whatsappUrl}&text=${encodeURIComponent(`Olá! Gostaria de encomendar: ${selectedProduct.nome}`)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="modal-order-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Encomendar via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default CoroaCatalog; 