import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const verses = [
    {
      text: "Ide por todo o mundo e pregai o evangelho a toda criatura.",
      reference: "Marcos 16:15"
    },
    {
      text: "Porque onde estiverem dois ou três reunidos em meu nome, ali estou no meio deles.",
      reference: "Mateus 18:20"
    },
    {
      text: "Mas buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.",
      reference: "Mateus 6:33"
    },
    {
      text: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.",
      reference: "Provérbios 3:5"
    }
  ];

  const [currentVerse, setCurrentVerse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % verses.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [verses.length]);

  return (
    <div className="home">
      {/* Hero Section com Logo e Imagem do Pastor */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-image-container">
            <img 
              src="/images/Principal.jpg" 
              alt="Pastor pregando a palavra" 
              className="hero-pastor-image"
            />
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-gradient-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-logo-container">
            <img 
              src="/images/Logo.jfif" 
              alt="Logo Mevam Camboriú" 
              className="hero-logo"
            />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              Bem-vindo à Mevam Camboriú
            </h1>
            <div className="verse-carousel">
              <p className="verse-text">{verses[currentVerse].text}</p>
              <p className="verse-reference">— {verses[currentVerse].reference}</p>
            </div>
            <div className="hero-actions">
              <Link to="/oracao" className="btn btn-primary">
                <span>🙏</span> Pedido de Oração
              </Link>
              <Link to="/contribuir" className="btn btn-accent">
                <span>❤️</span> Contribuir
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section welcome-section">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-image">
             <div className="image-placeholder">
               <img 
                 src="/images/Logo.jfif" 
                alt="Logo Mevam Camboriú" 
                className="welcome-logo"
                />
             </div>
             </div>
            <div className="welcome-text">
              <h2 className="section-title">Uma Casa de Adoração e Comunhão</h2>
              <p>
                A Igreja Mevam Camboriú é um lugar onde você encontrará amor, acolhimento e 
                propósito. Somos uma família unida pela fé em Jesus Cristo, comprometida em 
                viver e compartilhar o evangelho através de ações concretas de amor e serviço.
              </p>
              <p>
                Aqui, cada pessoa é importante e tem um lugar especial. Seja você um visitante 
                pela primeira vez ou alguém buscando uma igreja para chamar de casa, você será 
                recebido com alegria e carinho.
              </p>
              <blockquote className="bible-quote">
                "Eis que porei em Sião uma pedra, pedra já provada, pedra preciosa de esquina, 
                que está bem firme e fundada." <cite>— Isaías 28:16</cite>
              </blockquote>
              <Link to="/sobre" className="btn btn-secondary">Conheça Nossa História</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section quick-actions-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Como Podemos Ajudá-lo?</h2>
            <p className="section-subtitle">
              Estamos aqui para apoiá-lo em sua jornada de fé
            </p>
          </div>
          <div className="quick-actions">
            <Link to="/oracao" className="action-card">
              <div className="action-icon">🙏</div>
              <h3>Pedido de Oração</h3>
              <p>Compartilhe suas necessidades e ore conosco</p>
            </Link>

            <Link to="/eventos" className="action-card">
              <div className="action-icon">📅</div>
              <h3>Eventos</h3>
              <p>Participe de nossos cultos e atividades</p>
            </Link>

            <Link to="/agenda-pastoral" className="action-card">
              <div className="action-icon">🤝</div>
              <h3>Falar com um Pastor</h3>
              <p>Agende um momento para conversar</p>
            </Link>

            <Link to="/contribuir" className="action-card">
              <div className="action-icon">❤️</div>
              <h3>Contribuir</h3>
              <p>Faça parte da missão com seu dízimo ou oferta</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="section events-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Próximos Eventos</h2>
            <p className="section-subtitle">
              Participe dos nossos encontros e celebrações
            </p>
          </div>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">
                <span className="day">Todas</span>
                <span className="month">Segundas</span>
              </div>
              <div className="event-info">
                <h3>Primeiros Passos</h3>
                <p className="event-time">⏰ Segunda-feira, 20h</p>
                <p className="event-description">
                  Leitura da palavra, Estudo Bíblico.
                </p>
                <Link to="/eventos" className="btn btn-secondary btn-sm">Ver Detalhes</Link>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date">
                <span className="day">Todos</span>
                <span className="month">Domingos</span>
              </div>
              <div className="event-info">
                <h3>Culto Domingo</h3>
                <p className="event-time">⏰ Domingo, 19h</p>
                <p className="event-description">
                  Culto dominical com pregação da Palavra e comunhão
                </p>
                <Link to="/eventos" className="btn btn-secondary btn-sm">Ver Detalhes</Link>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date">
                <span className="day">Sem data</span>
                <span className="month">Oficial</span>
              </div>
              <div className="event-info">
                <h3>Batismo</h3>
                <p className="event-time">⏰ Sem data oficial</p>
                <p className="event-description">
                  Cerimônia de batismo nas águas - Inscrições abertas
                </p>
                <Link to="/eventos" className="btn btn-accent btn-sm">Inscrever-se</Link>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/eventos" className="btn btn-primary">Ver Todos os Eventos</Link>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Venha Nos Visitar!</h2>
            <p>
              Nossa igreja está de portas abertas para recebê-lo. Venha conhecer nossa 
              comunidade e experimentar o amor de Deus em um ambiente acolhedor.
            </p>
            <div className="cta-info">
              <div className="cta-item">
                <span className="cta-icon">📍</span>
                <div>
                  <strong>Localização</strong>
                  <p>Av. Santa Catarina, 400 - Centro, Camboriú - SC, 88340-000</p>
                </div>
              </div>
              <div className="cta-item">
                <span className="cta-icon">⏰</span>
                <div>
                  <strong>Horários</strong>
                  <p>Domingo 19h</p>
                </div>
              </div>
            </div>
            <Link to="/contato" className="btn btn-accent">Entre em Contato</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;