import React from 'react';
import './Flyers.css';

const Flyers = () => {
  // Flyers de exemplo - Em produção, viriam de um backend/CMS
  const flyers = [
    {
      id: 1,
      title: 'Culto de Celebração',
      date: '07 de Fevereiro, 2026',
      category: 'Culto',
      description: 'Venha celebrar conosco uma noite especial de louvor e adoração. Prepare seu coração para um encontro poderoso com Deus!',
      color: '#8B7355'
    },
    {
      id: 2,
      title: 'Batismo nas Águas',
      date: '16 de Fevereiro, 2026',
      category: 'Evento Especial',
      description: 'Inscrições abertas para o batismo. Um momento de decisão e testemunho público da sua fé em Jesus Cristo.',
      color: '#5A7C8E'
    },
    {
      id: 3,
      title: 'Grupo de Oração',
      date: 'Toda Quarta-feira',
      category: 'Oração',
      description: 'Encontro de intercessão e busca da presença de Deus. Venha orar conosco pelas necessidades da igreja e da comunidade.',
      color: '#C9A86A'
    },
    {
      id: 4,
      title: 'Célula de Jovens',
      date: 'Toda Sexta-feira',
      category: 'Juventude',
      description: 'Encontro dos jovens com louvor, estudos bíblicos e comunhão. Um espaço para crescer na fé e fazer amizades.',
      color: '#8B7355'
    },
    {
      id: 5,
      title: 'Campanha de Missões',
      date: 'Fevereiro 2026',
      category: 'Missões',
      description: 'Campanha especial de apoio aos missionários. Vamos juntos levar o evangelho até os confins da terra!',
      color: '#5A7C8E'
    },
    {
      id: 6,
      title: 'Escola Bíblica Dominical',
      date: 'Todos os Domingos',
      category: 'Ensino',
      description: 'Estudo profundo da Palavra de Deus para todas as idades. Cresça no conhecimento bíblico e na intimidade com Deus.',
      color: '#C9A86A'
    }
  ];

  return (
    <div className="flyers-page">
      <section className="flyers-hero">
        <div className="container">
          <h1 className="page-title1">Avisos da Igreja</h1>
          <p className="page-subtitle">
            Fique por dentro de tudo que acontece na Mevam Camboriú
          </p>
        </div>
      </section>

      <section className="section flyers-content">
        <div className="container">
          <div className="flyers-grid">
            {flyers.map((flyer) => (
              <div key={flyer.id} className="flyer-card">
                <div className="flyer-image" style={{ background: `linear-gradient(135deg, ${flyer.color} 0%, ${flyer.color}dd 100%)` }}>
                  <svg width="100%" height="100%" viewBox="0 0 400 300">
                    <defs>
                      <pattern id={`pattern${flyer.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="2" fill="white" opacity="0.2"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pattern${flyer.id})`}/>
                    
                    {/* Decorative cross */}
                    <g transform="translate(200, 150)" opacity="0.3">
                      <line x1="0" y1="-60" x2="0" y2="60" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                      <line x1="-40" y1="0" x2="40" y2="0" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                      <circle cx="0" cy="0" r="80" fill="none" stroke="white" strokeWidth="4"/>
                    </g>
                    
                    {/* Category badge */}
                    <rect x="20" y="20" width="120" height="35" rx="17.5" fill="white" opacity="0.9"/>
                    <text x="80" y="42" textAnchor="middle" fill={flyer.color} fontSize="14" fontWeight="600" fontFamily="sans-serif">
                      {flyer.category}
                    </text>
                  </svg>
                </div>
                
                <div className="flyer-content">
                  <div className="flyer-date">
                    <span className="date-icon">📅</span>
                    {flyer.date}
                  </div>
                  <h3 className="flyer-title">{flyer.title}</h3>
                  <p className="flyer-description">{flyer.description}</p>
                  
                  <div className="flyer-actions">
                    <button className="btn btn-secondary btn-sm">
                      Saiba Mais
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info box */}
          <div className="flyers-info-box">
            <h3>📢 Quer Publicar um Aviso?</h3>
            <p>
              Se você tem alguma informação importante para compartilhar com a igreja, 
              entre em contato com nossa secretaria ou fale com um dos pastores.
            </p>
            <a href="/contato" className="btn btn-primary">
              Entre em Contato
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flyers;
