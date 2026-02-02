import React, { useState } from 'react';
import './Events.css';

const Events = () => {
  const [showBaptismForm, setShowBaptismForm] = useState(false);
  const [baptismData, setBaptismData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleBaptismSubmit = (e) => {
    e.preventDefault();
    const message = `Olá! Gostaria de me inscrever para o batismo.\n\nNome: ${baptismData.name}\nTelefone: ${baptismData.phone}\nE-mail: ${baptismData.email}`;
    const whatsappUrl = `https://wa.me/5547999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const events = [
    {
      id: 1,
      title: 'Primeiros Passos',
      date: '',
      day: 'Todas',
      month: 'Segundas',
      time: 'Segunda-feira, 20h00',
      location: 'Igreja Mevam Camboriú',
      description: 'Junte-se a nós para uma noite especial em estudo da palavra, Entendo os primeiros passos de um cristão.',
      type: 'Primeiros passos'
    },
    {
      id: 2,
      title: 'Culto de Domingo',
      date: '',
      day: 'Todos',
      month: 'Domingos',
      time: 'Domingo, 19h',
      location: 'Igreja Mevam Camboriú',
      description: 'Nosso culto principal de domingo com louvor, pregação e momento de comunhão. Traga toda a família!',
      type: 'culto'
    },
    {
      id: 3,
      title: 'Batismo',
      day: 'Sem',
      month: 'Data oficial',
      time: 'Domingo, 19h',
      location: 'Igreja Mevam Camboriú',
      description: 'Cerimônia de batismo nas águas. Um momento especial de decisão e testemunho público da fé em Jesus Cristo.',
      type: 'batismo',
      special: true
    },
    {
      id: 4,
      title: 'Grupo de Oração',
      day: 'Todas',
      month: 'Segundas',
      time: 'Segunda-feira, 21h',
      location: 'Igreja Mevam Camboriú',
      description: 'Encontro de intercessão e oração. Venha buscar a presença de Deus e orar pelas necessidades da igreja e comunidade.',
      type: 'oracao'
    },
    {
      id: 5,
      title: 'Célula de Jovens',
      day: 'Todas',
      month: 'Sextas',
      time: 'Sexta-feira, 20h',
      location: 'GCC',
      description: 'Encontro dos jovens com louvor, estudos bíblicos e comunhão. Um espaço para crescer na fé e fazer amizades.',
      type: 'celula'
    }
  ];

  return (
    <div className="events-page">
      {/* Hero */}
      <section className="events-hero">
        <div className="container">
          <h1 className="page-title1">Eventos & Batismos</h1>
          <p className="page-subtitle">
            Participe dos nossos encontros e faça parte da família Mevam
          </p>
        </div>
      </section>

      {/* Baptism Section */}
      <section className="section baptism-section">
        <div className="container">
          <div className="baptism-content">
            <div className="baptism-info">
              <h2>Batismo nas Águas</h2>
              <p className="lead-text">
                O batismo é um passo importante na vida de todo cristão, um testemunho 
                público da sua fé e decisão de seguir a Jesus Cristo.
              </p>
              <blockquote className="bible-quote">
                "Portanto ide, fazei discípulos de todas as nações, batizando-os em nome 
                do Pai, e do Filho, e do Espírito Santo."
                <cite>— Mateus 28:19</cite>
              </blockquote>
              <p>
                Se você já entregou sua vida a Jesus e deseja dar esse passo de obediência, 
                preencha o formulário ao lado e nossa equipe entrará em contato.
              </p>
            </div>

            <div className="baptism-form-container">
              {!showBaptismForm ? (
                <div className="baptism-cta">
                  <div className="cta-icon">💧</div>
                  <h3>Quero Me Batizar</h3>
                  <p>Dê o próximo passo na sua jornada de fé</p>
                  <button 
                    className="btn btn-accent"
                    onClick={() => setShowBaptismForm(true)}
                  >
                    Fazer Inscrição
                  </button>
                </div>
              ) : (
                <form className="baptism-form" onSubmit={handleBaptismSubmit}>
                  <h3>Inscrição para Batismo</h3>
                  <div className="form-group">
                    <label className="form-label">Nome Completo</label>
                    <input
                      type="text"
                      className="form-input"
                      value={baptismData.name}
                      onChange={(e) => setBaptismData({...baptismData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Telefone / WhatsApp</label>
                    <input
                      type="tel"
                      className="form-input"
                      value={baptismData.phone}
                      onChange={(e) => setBaptismData({...baptismData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input
                      type="email"
                      className="form-input"
                      value={baptismData.email}
                      onChange={(e) => setBaptismData({...baptismData, email: e.target.value})}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                    Enviar Inscrição via WhatsApp
                  </button>
                  <button 
                    type="button"
                    className="btn btn-secondary"
                    style={{width: '100%', marginTop: '1rem'}}
                    onClick={() => setShowBaptismForm(false)}
                  >
                    Voltar
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="section events-list-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Próximos Eventos</h2>
            <p className="section-subtitle">
              Confira nossa programação e participe
            </p>
          </div>

          <div className="events-list">
            {events.map((event) => (
              <div key={event.id} className={`event-item ${event.special ? 'special' : ''}`}>
                <div className="event-date-badge">
                  <span className="date-day">{event.day}</span>
                  <span className="date-month">{event.month}</span>
                </div>
                
                <div className="event-details">
                  <div className="event-header">
                    <h3>{event.title}</h3>
                    {event.special && <span className="special-badge">Especial</span>}
                  </div>
                  <div className="event-meta">
                    <span className="meta-item">
                      <span className="meta-icon">⏰</span> {event.time}
                    </span>
                    <span className="meta-item">
                      <span className="meta-icon">📍</span> {event.location}
                    </span>
                  </div>
                  <p className="event-description">{event.description}</p>
                  
                  {event.type === 'batismo' && (
                    <button 
                      className="btn btn-accent"
                      onClick={() => {
                        setShowBaptismForm(true);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      Inscrever-se
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Schedule */}
      <section className="section schedule-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Programação Regular</h2>
            <p className="section-subtitle">
              Nossos cultos e atividades semanais
            </p>
          </div>

          <div className="schedule-grid">
            <div className="schedule-card">
              <div className="schedule-day">Segunda-feira</div>
              <div className="schedule-time">20h</div>
              <h4>Primeiros Passos</h4>
              <p>Leitura da palavra, Estudo Bíblico </p>
            </div>

            <div className="schedule-card">
              <div className="schedule-day">Domingo</div>
              <div className="schedule-time">19h</div>
              <h4>Culto Principal</h4>
              <p>Culto com toda a família e ministração</p>
            </div>

            <div className="schedule-card">
              <div className="schedule-day">Segunda-feira</div>
              <div className="schedule-time">21h</div>
              <h4>Grupo de Oração</h4>
              <p>Intercessão e busca da presença de Deus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
