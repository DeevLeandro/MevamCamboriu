import React, { useState } from 'react';
import './PastoralMeeting.css';

const PastoralMeeting = () => {
  const [selectedPastor, setSelectedPastor] = useState('');
  const [meetingData, setMeetingData] = useState({
    name: '',
    reason: '',
    date: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const pastorPhone = selectedPastor === 'rogerio' ? '5547984577358' : '5547996988111';
    const pastorName = selectedPastor === 'rogerio' ? 'Pastor Rogério' : 'Pastora Cristiane';
    
    const message = `🤝 Solicitação de Agenda Pastoral\n\nPastor(a): ${pastorName}\nNome: ${meetingData.name}\n\nMotivo do Encontro:\n${meetingData.reason}\n\nData Sugerida: ${meetingData.date}`;
    
    const whatsappUrl = `https://wa.me/${pastorPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset
    setMeetingData({ name: '', reason: '', date: '' });
  };

  return (
    <div className="pastoral-page">
      <section className="pastoral-hero">
        <div className="container">
          <h1 className="page-title">Agenda Pastoral</h1>
          <p className="page-subtitle">
            Agende um momento para conversar com nossos pastores
          </p>
        </div>
      </section>

      <section className="section pastoral-content">
        <div className="container">
          <div className="pastoral-grid">
            <div className="pastoral-info">
              <h2>Estamos Aqui Para Você</h2>
              <p className="lead-text">
                Nossos pastores estão disponíveis para aconselhamento, oração e apoio 
                espiritual. Seja para compartilhar uma alegria, buscar orientação ou 
                passar por momentos difíceis, estamos prontos para ouvir e caminhar ao seu lado.
              </p>

              <div className="pastor-cards">
                <div className="pastor-card">
                   <div className="hero-logo-container1">
                    <img 
                    src="/images/prRogerio.jpg" 
                    alt="pastor Rogerio" 
                    className="hero-logo1"
                    />
                    </div>
                    <h3>Pastor Rogério</h3>
                  <p>Aconselhamento pastoral, direção espiritual e oração</p>
                </div>

                <div className="pastor-card">
                   <div className="hero-logo-container1">
                    <img 
                     src="/images/prCris.jpg" 
                     alt="pastor Rogerio" 
                    className="hero-logo1"
                    />
                 </div>
                  <h3>Pastora Cristiane</h3>
                  <p>Cuidado familiar, intercessão e ensino bíblico</p>
                </div>
              </div>
            </div>

            <div className="meeting-form-container">
              <div className="form-card">
                <h2>Agendar Encontro</h2>
                
                {!selectedPastor ? (
                  <div className="pastor-selection">
                    <p>Selecione com qual pastor você gostaria de conversar:</p>
                    <div className="pastor-buttons">
                      <button 
                        className="pastor-btn"
                        onClick={() => setSelectedPastor('rogerio')}
                      >
                        <span className="pastor-icon">👨‍💼</span>
                        Pastor Rogério
                      </button>
                      <button 
                        className="pastor-btn"
                        onClick={() => setSelectedPastor('cristiane')}
                      >
                        <span className="pastor-icon">👩‍💼</span>
                        Pastora Cristiane
                      </button>
                    </div>
                  </div>
                ) : (
                  <form className="meeting-form" onSubmit={handleSubmit}>
                    <div className="selected-pastor">
                      <span>Conversando com: </span>
                      <strong>{selectedPastor === 'rogerio' ? 'Pastor Rogério' : 'Pastora Cristiane'}</strong>
                      <button 
                        type="button" 
                        className="change-pastor"
                        onClick={() => setSelectedPastor('')}
                      >
                        Trocar
                      </button>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Seu Nome</label>
                      <input
                        type="text "
                        className="form-input"
                        value={meetingData.name}
                        id='nome'
                        name='nome'
                        onChange={(e) => setMeetingData({...meetingData, name: e.target.value})}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Motivo do Encontro</label>
                      <textarea
                        className="form-textarea"
                        rows="5"
                        placeholder="Descreva brevemente sobre o que você gostaria de conversar..."
                        value={meetingData.reason}
                        onChange={(e) => setMeetingData({...meetingData, reason: e.target.value})}
                        required
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Data Sugerida</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Ex: Próxima terça-feira à tarde"
                        value={meetingData.date}
                        onChange={(e) => setMeetingData({...meetingData, date: e.target.value})}
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                      Enviar Solicitação via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PastoralMeeting;
