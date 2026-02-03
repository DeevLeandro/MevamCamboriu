import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './Contribution.css';

const Contribution = () => {
  const [copiedPix, setCopiedPix] = useState(false);
  const pixKey = '45.406.988/0001-21'; // Chave PIX da igreja

  // Função para gerar o payload PIX corretamente
  const generatePixPayload = () => {
    // Remove caracteres não numéricos do CNPJ
    const cleanPixKey = pixKey.replace(/\D/g, '');
    
    // Configurações do PIX (limites importantes!)
    const merchantName = 'Ccvam Comunidade crista'; // Máximo 25 caracteres
    const merchantCity = 'SAO PAULO'; // Máximo 15 caracteres
    const txid = 'SITEMEVAM'; // Transaction ID (até 25 chars)
    
    // Função auxiliar para formatar campos EMV
    const formatEMV = (id, value) => {
      const length = value.length.toString().padStart(2, '0');
      return `${id}${length}${value}`;
    };

    // ID 26: Merchant Account Information (obrigatório)
    const merchantAccountInfo = 
      formatEMV('00', 'BR.GOV.BCB.PIX') + // GUI
      formatEMV('01', cleanPixKey); // Chave PIX
    
    const merchantAccountField = formatEMV('26', merchantAccountInfo);

    // ID 62: Additional Data Field Template
    const additionalDataField = formatEMV('05', txid); // Reference Label
    const additionalDataTemplate = formatEMV('62', additionalDataField);

    // Montagem do payload (SEM o CRC ainda)
    const payloadWithoutCRC = 
      formatEMV('00', '01') + // Payload Format Indicator
      formatEMV('01', '12') + // Point of Initiation Method (12 = estático reutilizável)
      merchantAccountField + // ID 26
      formatEMV('52', '0000') + // Merchant Category Code
      formatEMV('53', '986') + // Transaction Currency (986 = BRL)
      formatEMV('58', 'BR') + // Country Code
      formatEMV('59', merchantName) + // Merchant Name
      formatEMV('60', merchantCity) + // Merchant City
      additionalDataTemplate + // ID 62
      '6304'; // CRC placeholder

    // Calcula CRC16-CCITT
    const calculateCRC16 = (str) => {
      let crc = 0xFFFF;
      const polynomial = 0x1021;
      
      for (let i = 0; i < str.length; i++) {
        crc ^= (str.charCodeAt(i) << 8);
        
        for (let j = 0; j < 8; j++) {
          if (crc & 0x8000) {
            crc = (crc << 1) ^ polynomial;
          } else {
            crc = crc << 1;
          }
        }
      }
      
      crc = crc & 0xFFFF;
      return crc.toString(16).toUpperCase().padStart(4, '0');
    };

    const crc = calculateCRC16(payloadWithoutCRC);
    const finalPayload = payloadWithoutCRC + crc;
    
    console.log('PIX Payload gerado:', finalPayload);
    console.log('Tamanho:', finalPayload.length);
    
    return finalPayload;
  };

  const pixPayload = generatePixPayload();

  const copyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  // Função para copiar o código PIX completo
  const copyPixCode = () => {
    navigator.clipboard.writeText(pixPayload);
    alert('Código PIX copiado! Cole no campo "PIX Copia e Cola" do seu banco.');
  };

  return (
    <div className="contribution-page">
      <section className="contribution-hero">
        <div className="container">
          <span className="hero-icon">❤️</span>
          <h1 className="page-title1">Contribuir</h1>
          <p className="page-subtitle">
            "Cada um contribua segundo propôs no coração" — 2 Coríntios 9:7
          </p>
        </div>
      </section>

      <section className="section contribution-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Sua Contribuição Faz a Diferença</h2>
            <p className="lead-text">
              Através dos dízimos e ofertas, conseguimos manter as atividades da igreja, 
              apoiar missionários, realizar obras sociais e levar o evangelho a mais pessoas. 
              Cada contribuição é uma semente plantada no Reino de Deus.
            </p>
            <blockquote className="bible-quote">
              "Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha 
              casa, e depois fazei prova de mim, diz o Senhor dos Exércitos, se eu não vos 
              abrir as janelas do céu e não derramar sobre vós uma bênção tal, que dela vos 
              advenha a maior abastança."
              <cite>— Malaquias 3:10</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section contribution-types">
        <div className="container">
          <div className="types-grid">
            <div className="type-card">
              <div className="type-icon">📦</div>
              <h3>Dízimo</h3>
              <p>
                O dízimo é 10% da nossa renda, uma prática bíblica que demonstra 
                nossa gratidão a Deus e confiança em sua provisão. É uma forma de 
                honrar ao Senhor com nossos bens.
              </p>
              <blockquote>
                "Honra ao Senhor com os teus bens e com as primícias de toda a tua renda."
                <cite>— Provérbios 3:9</cite>
              </blockquote>
            </div>

            <div className="type-card">
              <div className="type-icon">🎁</div>
              <h3>Oferta</h3>
              <p>
                As ofertas são contribuições voluntárias além do dízimo, motivadas 
                por gratidão e amor. São doações especiais para apoiar projetos, 
                campanhas e necessidades específicas da igreja.
              </p>
              <blockquote>
                "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação."
                <cite>— 2 Coríntios 9:7</cite>
              </blockquote>
            </div>

            <div className="type-card">
              <div className="type-icon">🌍</div>
              <h3>Missões</h3>
              <p>
                Contribuições destinadas ao trabalho missionário, levando o evangelho 
                a outras regiões e nações. Apoiamos missionários e projetos de 
                evangelização ao redor do mundo.
              </p>
              <blockquote>
                "E como pregarão, se não forem enviados?"
                <cite>— Romanos 10:15</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="section pix-section">
        <div className="container">
          <div className="pix-container">
            <div className="pix-header">
              <h2>Contribua via PIX</h2>
              <p>Forma rápida, segura e prática de contribuir</p>
            </div>

            <div className="pix-content">
              <div className="pix-qr">
                {/* QR Code real e funcional */}
                <div className="qr-placeholder" style={{ 
                  backgroundColor: 'white', 
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(50, 43, 112, 0.1)'
                }}>
                  <QRCodeSVG 
                    value={pixPayload}
                    size={200}
                    level="M" // Nível médio é suficiente e recomendado para PIX
                    includeMargin={true}
                    fgColor="#000000" // Preto puro para melhor leitura
                    bgColor="#FFFFFF"
                  />
                </div>
                <p className="qr-label">Escaneie o QR Code acima com seu banco</p>
                
                {/* Botão para copiar código PIX */}
                <button 
                  onClick={copyPixCode}
                  style={{
                    marginTop: '15px',
                    padding: '10px 20px',
                    backgroundColor: '#55568b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  📋 Copiar Código PIX
                </button>
                <p style={{ 
                  fontSize: '12px', 
                  color: '#666666', 
                  marginTop: '5px',
                  fontStyle: 'italic'
                }}>
                  Use no campo "PIX Copia e Cola" do seu banco
                </p>
              </div>

              <div className="pix-details">
                <div className="pix-info-box">
                  <label>Chave PIX (CNPJ):</label>
                  <div className="pix-key-display">
                    <span className="pix-key">{pixKey}</span>
                    <button 
                      className={`copy-btn ${copiedPix ? 'copied' : ''}`}
                      onClick={copyPix}
                    >
                      {copiedPix ? '✓ Copiado!' : '📋 Copiar'}
                    </button>
                  </div>
                </div>

                <div className="pix-instructions">
                  <h4>Como contribuir:</h4>
                  <ol>
                    <li>Abra o aplicativo do seu banco</li>
                    <li>Escolha a opção <strong>PIX</strong></li>
                    <li>Escaneie o QR Code ou copie a chave PIX</li>
                    <li>Confirme o valor e efetue o pagamento</li>
                    <li>O comprovante virá com a identificação: <strong>"SITEMEVAM"</strong></li>
                  </ol>
                </div>

                <div className="pix-note">
                  <p>
                    <strong>Importante:</strong> Todas as contribuições são registradas e 
                    utilizadas com transparência para a obra de Deus. Que o Senhor abençoe 
                    sua generosidade!
                  </p>
                  <p style={{ marginTop: '10px', color: '#5a558b', fontWeight: 'bold' }}>
                    🔍 Identificação: Seu pagamento será identificado como "SITEMEVAM"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contribution;