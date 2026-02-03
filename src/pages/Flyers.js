import React from 'react';
import './Flyers.css';

// Importando imagens)
const images = {
  cultoDomingo: '/images/Principal2.jpg',
  mulheres: '/images/DiscipuladoMulheres.jpg',
  homens: '/images/DiscipuladoHomens.jpg',
  primeirosPassos: '/images/PrimeirosPassos.jpeg',
  oracao: '/images/Oracao.jpg'
};

const Flyers = () => {
  // Flyers
  const flyers = [
    {
      id: 1,
      title: 'Culto de Domingo',
      date: 'Todos os Domingos às 19h',
      category: 'Culto',
      description: 'Celebre conosco um momento especial de louvor, adoração e ensino da Palavra de Deus. Ambiente acolhedor para toda família.',
      image: images.cultoDomingo,
      color: '#8b7355'
    },
    {
      id: 2,
      title: 'Discipulado de Mulheres',
      date: 'Segundas-feiras às 19h30',
      category: 'Discipulado',
      description: 'Encontro para mulheres que buscam crescimento espiritual, apoio mútuo e fortalecimento na jornada da fé cristã.',
      image: images.mulheres,
      color: '#6a88c9'
    },
    {
      id: 3,
      title: 'Discipulado de Homens',
      date: 'Segundas-feiras às 19h30',
      category: 'Discipulado',
      description: 'Momento dedicado aos homens para estudo bíblico, partilha de experiências e edificação da vida cristã.',
      image: images.homens,
      color: '#4a6fa5'
    },
    {
      id: 4,
      title: 'Primeiros Passos',
      date: 'Terças-feiras às 20h',
      category: 'Ensino',
      description: 'Ideal para novos convertidos e interessados em conhecer os fundamentos básicos da fé e da vida cristã.',
      image: images.primeirosPassos,
      color: '#5d8b7f'
    },
    {
      id: 5,
      title: 'Grupo de Oração',
      date: 'Quartas-feiras às 19h',
      category: 'Oração',
      description: 'Junte-se a nós em um poderoso momento de intercessão pelas famílias, igreja e necessidades da comunidade.',
      image: images.oracao,
      color: '#9d6b9d'
    }
  ];

  return (
    <div className="flyers-page">
      <section className="flyers-hero">
        <div className="container">
          <h1 className="page-title1">Eventos e Avisos</h1>
          <p className="page-subtitle">
            Participe das atividades e faça parte da nossa comunidade na Mevam Camboriú
          </p>
        </div>
      </section>

      <section className="section flyers-content">
        <div className="container">
          <div className="flyers-grid">
            {flyers.map((flyer) => (
              <div key={flyer.id} className="flyer-card">
                {/* Container da imagem real */}
                <div className="flyer-image-container">
                  {/* Imagem principal */}
                  <img 
                    src={flyer.image} 
                    alt={flyer.title}
                    className="flyer-real-image"
                    onError={(e) => {
                      // Fallback se a imagem não carregar
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  
                  {/* Fallback SVG (apenas se imagem não carregar) */}
                  <div 
                    className="flyer-fallback-svg"
                    style={{ 
                      display: 'none',
                      background: `linear-gradient(135deg, ${flyer.color} 0%, ${flyer.color}dd 100%)`
                    }}
                  >
                    <svg width="100%" height="100%" viewBox="0 0 400 300">
                      <defs>
                        <pattern id={`pattern${flyer.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <circle cx="20" cy="20" r="2" fill="white" opacity="0.2"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#pattern${flyer.id})`}/>
                      
                      <g transform="translate(200, 150)" opacity="0.3">
                        <line x1="0" y1="-60" x2="0" y2="60" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                        <line x1="-40" y1="0" x2="40" y2="0" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                        <circle cx="0" cy="0" r="80" fill="none" stroke="white" strokeWidth="4"/>
                      </g>
                      
                      {/* Texto indicativo no fallback */}
                      <text 
                        x="200" 
                        y="160" 
                        textAnchor="middle" 
                        fill="white" 
                        fontSize="18" 
                        fontWeight="600"
                        fontFamily="'Montserrat', sans-serif"
                      >
                        {flyer.title}
                      </text>
                    </svg>
                  </div>
                  
                  {/* Badge de categoria sobreposta */}
                  <div className="category-badge">
                    {flyer.category}
                  </div>
                </div>
                
                <div className="flyer-content">
                  <div className="flyer-date">
                    <span className="date-icon">📅</span>
                    {flyer.date}
                  </div>
                  <h3 className="flyer-title">{flyer.title}</h3>
                  <p className="flyer-description">{flyer.description}</p>
                  
                  <div className="flyer-actions">
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info box */}
          <div className="flyers-info-box">
            <div className="info-box-icon">📢</div>
            <h3>Quer Divulgar um Evento?</h3>
            <p>
              Se você tem um evento ou aviso importante para compartilhar com a comunidade, 
              entre em contato com nossa secretaria. Estamos aqui para ajudar!
            </p>
            <a href="/contato" className="btn btn-primary">
              Entrar em Contato
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flyers;