import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

// Importar imagens de ramalhetes
import img6rosas from '../assets/6rosas.jpg';
import imgLuxury from '../assets/luxury.jpg';
import imgRosa from '../assets/rosa.jpg';
import imgTriogirassois from '../assets/triogirassois.jpg';
import imgMix from '../assets/mix.jpg';
import imgRamalheteDocampo from '../assets/ramalhetedocampo.jpg';
import imgAlegriaBlue from '../assets/alegriablue.jpg';

function RamalhetesCatalog() {
  // Filtrar apenas produtos do tipo "Ramalhete"
  const ramalhetes = data.filter(item => item.tipo === 'Ramalhete');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Reset scroll ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mapeamento das imagens
  const imageMap = {
    '6rosas.jpg': img6rosas,
    'luxury.jpg': imgLuxury,
    'rosa.jpg': imgRosa,
    'triogirassois.jpg': imgTriogirassois,
    'mix.jpg': imgMix,
    'ramalhetedocampo.jpg': imgRamalheteDocampo,
    'alegriablue.jpg': imgAlegriaBlue,
  };

  const whatsappMessage = "Olá! Gostaria de fazer um pedido pelo catálogo de ramalhetes.";
  const whatsappUrl = `https://wa.me/+55479881507030?text=${encodeURIComponent(whatsappMessage)}`;

  const openModal = (produto) => {
    setSelectedProduct(produto);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="catalog-page">
      <div className="catalog-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">→</span>
            <span className="breadcrumb-current">Ramalhetes</span>
          </nav>
          <h1 className="catalog-title">Catálogo de Ramalhetes</h1>
          <p className="catalog-subtitle">Ramalhetes delicados e charmosos para ocasiões especiais</p>
          <div className="catalog-message">
            <p><strong>Chame no WhatsApp para ver o catálogo completo!</strong></p>
          </div>
        </div>
      </div>

      <div className="catalog-content">
        <div className="container">
          <div className="products-catalog-grid-compact">
            {ramalhetes.map((produto, index) => (
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
                    {produto.Descricao || 'Ramalhete especial feito com carinho e delicadeza.'}
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
              <h2>Precisa de um ramalhete personalizado?</h2>
              <p>Criamos ramalhetes únicos e delicados de acordo com suas preferências e ocasião especial!</p>
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
                  {selectedProduct.Descricao || 'Ramalhete especial feito com carinho e delicadeza.'}
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
    </div>
  );
}

export default RamalhetesCatalog; 