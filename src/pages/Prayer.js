import React, { useState } from 'react';
import './Prayer.css';

const Prayer = () => {
  const [prayerData, setPrayerData] = useState({
    name: '',
    request: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `🙏 Pedido de Oração\n\nNome: ${prayerData.name}\n\nMotivo da Oração:\n${prayerData.request}`;
    const whatsappUrl = `https://wa.me/5547991912095?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setPrayerData({ name: '', request: '' });
  };

  return (
    <div className="prayer-page">
      {/* Hero */}
      <section className="prayer-hero">
        <div className="container">
            <span className="hero-icon">🙏</span>
            <h1 className="page-title1">Pedidos de Oração</h1>
            <p className="page-subtitle">
              "A oração de um justo é poderosa e eficaz" — Tiago 5:16
            </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section prayer-content-section">
        <div className="container">
          <div className="prayer-grid">
            {/* Left Side - Information */}
            <div className="prayer-info">
              <h2>Estamos Aqui Para Orar Por Você</h2>
              <p className="lead-text">
                A oração é um dos maiores privilégios que temos como filhos de Deus. 
                Através dela, nos conectamos com o Pai e apresentamos nossas necessidades, 
                alegrias e preocupações.
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="card-icon">💫</div>
                  <h3>Deus Ouve</h3>
                  <p>
                    Cada oração é importante para Deus. Ele conhece seu coração e está 
                    atento às suas necessidades.
                  </p>
                  <blockquote>
                    "Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e 
                    firmes que não sabes." <cite>— Jeremias 33:3</cite>
                  </blockquote>
                </div>

                <div className="info-card">
                  <div className="card-icon">🤝</div>
                  <h3>Juntos na Fé</h3>
                  <p>
                    Nossa equipe de intercessores está comprometida em levar suas 
                    necessidades diante de Deus em oração.
                  </p>
                  <blockquote>
                    "Confessai as vossas culpas uns aos outros, e orai uns pelos outros, 
                    para que sareis." <cite>— Tiago 5:16</cite>
                  </blockquote>
                </div>

                <div className="info-card">
                  <div className="card-icon">✨</div>
                  <h3>Fé e Esperança</h3>
                  <p>
                    Cremos que Deus age poderosamente através da oração. Ele é fiel e 
                    responde no tempo certo.
                  </p>
                  <blockquote>
                    "E tudo o que pedirdes na oração, crendo, o recebereis." 
                    <cite>— Mateus 21:22</cite>
                  </blockquote>
                </div>
              </div>

              <div className="prayer-types">
                <h3>Podemos Orar Por:</h3>
                <ul className="prayer-list">
                  <li><span>🏥</span> Saúde e cura</li>
                  <li><span>👨‍👩‍👧‍👦</span> Família e relacionamentos</li>
                  <li><span>💼</span> Trabalho e provisão financeira</li>
                  <li><span>📚</span> Estudos e decisões importantes</li>
                  <li><span>😌</span> Paz emocional e espiritual</li>
                  <li><span>❤️</span> Qualquer necessidade que você tenha</li>
                </ul>
              </div>
            </div>

            {/* Right Side - Prayer Form */}
            <div className="prayer-form-container">
              <div className="form-card">
                <div className="form-header">
                  <h2>Compartilhe Seu Pedido</h2>
                  <p>
                    Preencha o formulário abaixo e nossa equipe irá orar por você. 
                    Seu pedido será enviado de forma privada via WhatsApp.
                  </p>
                </div>

                <form className="prayer-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Seu Nome</label>
                    <input
                      type="text"
                      id='nome'
                      name='nome'
                      className="form-input"
                      placeholder="Como podemos chamar você?"
                      value={prayerData.name}
                      onChange={(e) => setPrayerData({...prayerData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Seu Pedido de Oração</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Compartilhe seu pedido de oração conosco. Seja específico, Deus conhece cada detalhe do seu coração..."
                      rows="8"
                      value={prayerData.request}
                      onChange={(e) => setPrayerData({...prayerData, request: e.target.value})}
                      required
                    ></textarea>
                    <small className="form-hint">
                      Seus dados serão tratados com total confidencialidade
                    </small>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large">
                    <span className="btn-icon">📲</span>
                    Enviar Pedido via WhatsApp
                  </button>

                  <p className="form-footer-text">
                    Ao enviar, você será redirecionado para o WhatsApp onde poderá 
                    conversar diretamente com nosso pastor responsável pelas orações.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section prayer-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Participe do Grupo de Oração</h2>
            <p>
              Toda Segunda-feira, às 21h, nos reunimos para orar juntos. 
              Venha experimentar o poder da oração em comunidade!
            </p>
            <a href="/eventos" className="btn btn-accent">Ver Programação</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prayer;
