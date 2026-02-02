import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title1">Nossa História</h1>
          <p className="page-subtitle">
            Uma jornada de fé, amor e transformação em Camboriú
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>A Igreja Mevam Camboriú</h2>
              <p>
                A Igreja Mevam Camboriú nasceu do desejo sincero de criar um espaço onde 
                pessoas pudessem experimentar o amor genuíno de Deus e encontrar uma família 
                espiritual acolhedora. Nossa história é marcada por milagres, superação e, 
                acima de tudo, pela fidelidade de Deus em cada etapa do caminho.
              </p>
              <p>
                Desde o início, temos sido guiados pela visão de sermos uma igreja que não 
                apenas prega o evangelho, mas que o vive através de ações práticas de amor, 
                justiça e compaixão. Cada membro da nossa comunidade é parte essencial dessa 
                história viva que continua a ser escrita todos os dias.
              </p>
              <blockquote className="bible-quote">
                "Porque ninguém pode pôr outro fundamento além do que já está posto, 
                o qual é Jesus Cristo."
                <cite>— 1 Coríntios 3:11</cite>
              </blockquote>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
              <img 
                src="/images/Logo.jfif" 
                alt="Logo Mevam Camboriú" 
                className="welcome-logo"
              />
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section mvv-section">
        <div className="container">
          <div className="mvv-grid">
            <div className="mvv-card">
              <div className="mvv-icon">🎯</div>
              <h3>Nossa Missão</h3>
              <p>
                Proclamar o evangelho de Jesus Cristo com amor e verdade, edificando vidas 
                através da palavra de Deus, do discipulado e do serviço à comunidade, 
                transformando corações e impactando gerações.
              </p>
            </div>

            <div className="mvv-card">
              <div className="mvv-icon">🔭</div>
              <h3>Nossa Visão</h3>
              <p>
                Ser uma igreja referência em Camboriú, conhecida por seu amor genuíno, 
                adoração vibrante e compromisso com a transformação social, alcançando 
                milhares de vidas para o Reino de Deus.
              </p>
            </div>

            <div className="mvv-card">
              <div className="mvv-icon">💎</div>
              <h3>Nossos Valores</h3>
              <ul className="values-list">
                <li><strong>Amor:</strong> A essência de tudo o que fazemos</li>
                <li><strong>Integridade:</strong> Vivendo a verdade em todas as áreas</li>
                <li><strong>Comunhão:</strong> Unidos como família em Cristo</li>
                <li><strong>Excelência:</strong> Fazendo tudo para a glória de Deus</li>
                <li><strong>Serviço:</strong> Abençoando outros com nossos dons</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="section beliefs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nossas Crenças</h2>
            <p className="section-subtitle">
              Fundamentados na Palavra de Deus
            </p>
          </div>
          <div className="beliefs-grid">
            <div className="belief-item">
              <span className="belief-number">01</span>
              <h4>A Bíblia Sagrada</h4>
              <p>
                Cremos que a Bíblia é a Palavra inspirada de Deus, nossa única regra de 
                fé e prática, inerrante e suficiente para nos guiar em toda verdade.
              </p>
            </div>

            <div className="belief-item">
              <span className="belief-number">02</span>
              <h4>A Trindade</h4>
              <p>
                Cremos em um só Deus, eternamente existente em três pessoas: Pai, Filho 
                e Espírito Santo, coiguais em poder e glória.
              </p>
            </div>

            <div className="belief-item">
              <span className="belief-number">03</span>
              <h4>Jesus Cristo</h4>
              <p>
                Cremos em Jesus Cristo, concebido pelo Espírito Santo, nascido da virgem 
                Maria, verdadeiro Deus e verdadeiro homem, nosso único Salvador.
              </p>
            </div>

            <div className="belief-item">
              <span className="belief-number">04</span>
              <h4>Salvação</h4>
              <p>
                Cremos que a salvação é pela graça de Deus através da fé em Jesus Cristo, 
                não por obras, mas manifestada através de uma vida transformada.
              </p>
            </div>

            <div className="belief-item">
              <span className="belief-number">05</span>
              <h4>O Espírito Santo</h4>
              <p>
                Cremos no Espírito Santo que habita em todos os crentes, capacitando-os 
                para uma vida santa e um ministério eficaz no Reino de Deus.
              </p>
            </div>

            <div className="belief-item">
              <span className="belief-number">06</span>
              <h4>A Igreja</h4>
              <p>
                Cremos na Igreja como corpo de Cristo, uma comunidade de crentes chamados 
                para adorar, crescer, servir e testemunhar ao mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section leadership-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nossa Liderança</h2>
            <p className="section-subtitle">
              Pastores dedicados ao cuidado do rebanho
            </p>
          </div>
          <div className="leaders-grid">
            <div className="leader-card">
              <div className="hero-logo-container1">
               <img 
              src="/images/prRogerio.jpg" 
              alt="pastor Rogerio" 
              className="hero-logo1"
               />
              </div>
              <h3>Pastor Rogério</h3>
              <p className="leader-role">Pastor Presidente</p>
              <p className="leader-description">
                Servo de Deus comprometido com a pregação da Palavra e o cuidado pastoral 
                da igreja. Disponível para aconselhamento e oração.
              </p>
            </div>

            <div className="leader-card">
              <div className="hero-logo-container1">
               <img 
              src="/images/prCris.jpg" 
              alt="pastor Rogerio" 
              className="hero-logo1"
               />
              </div>
              <h3>Pastora Cristiane</h3>
              <p className="leader-role">Pastora</p>
              <p className="leader-description">
                Dedicada ao ministério de intercessão, ensino e cuidado das famílias. 
                Sempre pronta para ouvir e apoiar em momentos de necessidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section about-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Faça Parte da Nossa Família</h2>
            <p>
              Se você está buscando uma igreja onde possa crescer espiritualmente, 
              servir a Deus e fazer diferença na vida de outras pessoas, a Mevam Camboriú 
              é o lugar certo para você.
            </p>
            <div className="cta-buttons">
              <a href="/contato" className="btn btn-primary">Entre em Contato</a>
              <a href="/eventos" className="btn btn-secondary">Conheça Nossos Eventos</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
