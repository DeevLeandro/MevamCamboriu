import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Flyers from './pages/Flyers';
import Prayer from './pages/Prayer';
import PastoralMeeting from './pages/PastoralMeeting';
import Contribution from './pages/Contribution';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para mudar estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <div className="App">
        {/* Header / Navbar */}
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <div className="container">
            <Link to="/" className="logo" onClick={closeMenu}>

              <span className="logo-text">Mevam Camboriú</span>
            </Link>

            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
              <Link to="/" onClick={closeMenu}>Início</Link>
              <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
              <Link to="/eventos" onClick={closeMenu}>Eventos</Link>
              <Link to="/avisos" onClick={closeMenu}>Avisos</Link>
              <Link to="/oracao" onClick={closeMenu}>Oração</Link>
              <Link to="/agenda-pastoral" onClick={closeMenu}>Agenda Pastoral</Link>
              <Link to="/contribuir" onClick={closeMenu}>Contribuir</Link>
              <Link to="/contato" onClick={closeMenu}>Contato</Link>
            </nav>

            <button 
              className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/eventos" element={<Events />} />
            <Route path="/avisos" element={<Flyers />} />
            <Route path="/oracao" element={<Prayer />} />
            <Route path="/agenda-pastoral" element={<PastoralMeeting />} />
            <Route path="/contribuir" element={<Contribution />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>Mevam Camboriú</h3>
                <p className="verse">"Porque onde estiverem dois ou três reunidos em meu nome, ali estou no meio deles." - Mateus 18:20</p>
              </div>

              <div className="footer-section">
                <h4>Navegação</h4>
                <ul>
                  <li><Link to="/">Início</Link></li>
                  <li><Link to="/sobre">Sobre</Link></li>
                  <li><Link to="/eventos">Eventos</Link></li>
                  <li><Link to="/contato">Contato</Link></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Conecte-se</h4>
                <div className="social-links">
                  <a href="https://www.instagram.com/mevamcamboriu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@mevam.global" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>&copy; 2026 Mevam Camboriú. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
