# 🙏 Mevam Camboriú - Site da Igreja

Site oficial da Igreja Mevam Camboriú, desenvolvido em React.js com design moderno, acolhedor e responsivo.

## ✨ Funcionalidades

### 📱 Páginas Principais

1. **Home** - Página inicial com versículos rotativos, boas-vindas e eventos em destaque
2. **Sobre** - História, missão, visão, valores e liderança da igreja
3. **Eventos & Batismos** - Programação de eventos e inscrição para batismo
4. **Avisos** - Flyers e comunicados da igreja
5. **Pedidos de Oração** - Formulário para enviar pedidos via WhatsApp
6. **Agenda Pastoral** - Agendar encontros com pastores via WhatsApp
7. **Contribuir** - Página de dízimos, ofertas e doações via PIX
8. **Contato** - Informações de contato, horários e localização

### 🎨 Design

- **Visual moderno e acolhedor** com cores suaves e elegantes
- **Totalmente responsivo** (mobile-first)
- **Animações suaves** em hover, scroll e transições
- **Tipografia premium** (Crimson Pro, Cormorant Garamond, Montserrat)
- **Paleta de cores espiritual**: tons de bege, marrom, azul e dourado

### 🔧 Tecnologias

- **React.js** 18.2.0
- **React Router** 6.20.0 (navegação entre páginas)
- **CSS moderno** com variáveis e gradientes
- **Google Fonts** para tipografia premium
- **SVG** para ilustrações e ícones personalizados

## 🚀 Como Executar

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Instalação

```bash
# 1. Navegue até a pasta do projeto
cd mevam-camboriu

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm start

# 4. Abra no navegador
# O site será aberto automaticamente em http://localhost:3000
```

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Os arquivos estarão na pasta 'build/'
```

## 📂 Estrutura do Projeto

```
mevam-camboriu/
├── public/
│   └── index.html          # HTML base
├── src/
│   ├── pages/              # Páginas do site
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Events.jsx
│   │   ├── Events.css
│   │   ├── Prayer.jsx
│   │   ├── Prayer.css
│   │   ├── PastoralMeeting.jsx
│   │   ├── PastoralMeeting.css
│   │   ├── Contribution.jsx
│   │   ├── Contribution.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Flyers.jsx
│   │   └── Flyers.css
│   ├── App.jsx             # Componente principal
│   ├── App.css             # Estilos globais
│   ├── index.js            # Ponto de entrada
│   └── index.css           # Reset CSS
├── package.json
└── README.md
```

## 🔄 Integrações

### WhatsApp
Todos os formulários (oração, agenda pastoral, batismo) redirecionam para WhatsApp com mensagens pré-formatadas.

**Para configurar os números de WhatsApp:**
1. Abra os arquivos das páginas
2. Procure por `5547999999999` e substitua pelo número real
3. Formato: código do país + DDD + número (ex: 5547999999999)

### PIX
A página de Contribuição exibe uma chave PIX que pode ser copiada.

**Para configurar o PIX:**
1. Abra `src/pages/Contribution.jsx`
2. Encontre `const pixKey = 'mevan@camboriu.com.br'`
3. Substitua pela chave PIX real da igreja

## 🎨 Personalização

### Cores
As cores são definidas em `src/App.css` usando variáveis CSS:

```css
:root {
  --primary: #8B7355;      /* Marrom principal */
  --secondary: #5A7C8E;    /* Azul secundário */
  --accent: #C9A86A;       /* Dourado de destaque */
  /* ... outras cores */
}
```

### Versículos da Home
Edite o array `verses` em `src/pages/Home.jsx` para adicionar ou modificar versículos.

### Eventos
Edite o array `events` em `src/pages/Events.jsx` para adicionar novos eventos.

### Flyers
Edite o array `flyers` em `src/pages/Flyers.jsx` para adicionar novos avisos.

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Notebooks (1024px+)
- 🖥️ Desktops (1440px+)

## 🔮 Próximos Passos (Sugestões)

1. **Backend**: Integrar com Node.js/Express para gerenciar eventos e avisos
2. **CMS**: Adicionar painel administrativo para publicar conteúdo
3. **Blog**: Seção de artigos e estudos bíblicos
4. **Transmissão ao vivo**: Integrar YouTube/Facebook Live
5. **Galeria de fotos**: Álbum de eventos e celebrações
6. **Sistema de membros**: Login e área exclusiva
7. **App mobile**: Versão nativa para iOS/Android

## 📞 Suporte

Para dúvidas ou sugestões sobre o site:
- 📧 Email: contato@mevamcamboriu.com.br
- 📱 WhatsApp: (47) 99999-9999

---

**Desenvolvido com 💛 para a Igreja Mevam Camboriú**

"Ide por todo o mundo e pregai o evangelho a toda criatura." - Marcos 16:15
