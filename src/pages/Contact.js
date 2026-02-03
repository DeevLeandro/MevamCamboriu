import React from 'react';
import './Contact.css';

const Contact = () => {
  const whatsappUrl = 'https://wa.me/5542988103932';
  
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title1">Contato</h1>
          <p className="page-subtitle">
            Estamos aqui para você. Entre em contato conosco!
          </p>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Venha Nos Visitar</h2>
              <p className="lead-text">
                Nossa igreja está de portas abertas para recebê-lo. Será uma alegria 
                tê-lo conosco em nossos cultos e atividades.
              </p>

              <div className="info-cards">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-details">
                    <h4>Endereço</h4>
                    <p>
                      Av. Santa Catarina, 400<br />
                      Centro, Camboriú - SC<br />
                      CEP 88340-000
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">⏰</div>
                  <div className="info-details">
                    <h4>Horários de Culto</h4>
                    <p>
                      <strong>Segunda-feira:</strong> 20h<br />
                      <strong>Domingo:</strong> 19h<br />
                      <strong>Segunda-feira:</strong> 21h (Oração)
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📱</div>
                  <div className="info-details">
                    <h4>Telefone / WhatsApp</h4>
                    <p>(42) 98810-3932</p>
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-accent"
                      style={{ marginTop: '1rem', display: 'inline-flex' }}
                    >
                      💬 Falar no WhatsApp
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-details">
                    <h4>E-mail</h4>
                    <p>contato@mevamcamboriu.com.br</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h3>Siga-nos nas Redes Sociais</h3>
                <div className="social-links-large">
                  <a 
                    href="https://www.instagram.com/mevamcamboriu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link instagram"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>

                  <a 
                    href="https://www.youtube.com/@mevam.global" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link youtube"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="map-container">
              <div className="map-placeholder">
                    <img 
                    src="/images/Mapafinal.jpg" 
                    alt="mapa igreja" 
                    className=".map-image"
                    />
              </div>
              <a 
                href="https://www.google.com/maps/place/Igreja+Mevam+Cambori%C3%BA/@-27.0144012,-48.6689756,15z/data=!4m10!1m2!2m1!1smevam+camboriu!3m6!1s0x94d8b5c4f3b52a03:0xf65aea3df7866ee4!8m2!3d-27.0144012!4d-48.6509512!15sCg5tZXZhbSBjYW1ib3JpdZIBDWdvc3BlbF9jaHVyY2jgAQA!16s%2Fg%2F11cmzzrvnq?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ marginTop: '1.5rem', display: 'inline-flex' }}
              >
                📍 Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
