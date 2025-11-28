# OurHouse-Lab DevHub - Centro de Desenvolvimento

Hub de desenvolvimento moderno e futurista para equipes de desenvolvimento e DevOps.

## 🚀 Funcionalidades

### 🎨 Design Futurista
- Tema escuro com acentos cyber (azul #00d4ff e verde #00ff88)
- Efeitos visuais modernos (glow, hover, animações)
- Robô futurista estilo Tesla como ilustração principal
- Grid cyber e gradientes tecnológicos

### 🛠️ Ferramentas Organizadas
- **Dev Tools**: GitLab, DAS, n8n, VS Code Server
- **DevOps Tools**: Grafana, Prometheus, Kubernetes, Docker Registry
- Cards interativos com status online e links funcionais

### 💬 Mural Colaborativo
- Sistema de postagens tipo rede social
- Likes e comentários interativos
- Modal para criar novas postagens
- Avatars personalizados para cada usuário

### 📚 Centro de Aprendizado
- Upload de materiais (PDF, vídeo, imagem)
- Sistema de downloads com contadores
- Organização por autor e tipo
- Modal completo para upload de arquivos

### 👥 Gestão de Equipe
- Visualização de membros online
- Status em tempo real
- Interface limpa e moderna

### 🔍 Recursos Adicionais
- Barra de busca funcional
- Sistema de notificações
- Navegação por abas responsiva
- Animações e transições suaves

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework frontend
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **Lucide React** - Ícones
- **JavaScript/JSX** - Linguagem de programação

## 📦 Instalação

1. Extraia o arquivo ZIP
2. Navegue até o diretório do projeto:
   ```bash
   cd ourhouse-lab-devhub
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra o navegador em `http://localhost:5173`

## 🏗️ Build para Produção

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

## 📁 Estrutura do Projeto

```
ourhouse-lab-devhub/
├── src/
│   ├── components/
│   │   ├── ui/           # Componentes UI básicos
│   │   ├── HeroSection.jsx
│   │   ├── NewPostModal.jsx
│   │   └── UploadModal.jsx
│   ├── assets/
│   │   └── robot-hero.png
│   ├── App.jsx           # Componente principal
│   ├── App.css          # Estilos personalizados
│   └── main.jsx         # Ponto de entrada
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Personalização

### Cores do Tema
As cores principais podem ser alteradas no arquivo `src/App.css`:
- `--primary`: #00d4ff (azul cyber)
- `--accent`: #00ff88 (verde neon)
- `--background`: #0a0a0a (preto)

### Ferramentas
Para adicionar novas ferramentas, edite os arrays `devTools` e `devopsTools` no arquivo `src/App.jsx`.

## 📱 Responsividade

O hub é totalmente responsivo e funciona perfeitamente em:
- Desktop (1920px+)
- Tablet (768px - 1919px)
- Mobile (320px - 767px)

## 🔧 Configuração de URLs

Atualize as URLs das ferramentas no arquivo `src/App.jsx` para apontar para seus serviços reais:

```javascript
const devTools = [
  {
    name: 'GitLab',
    url: 'https://seu-gitlab.com', // Substitua pela URL real
    // ...
  }
]
```

## 📄 Licença

Este projeto foi desenvolvido para uso interno da OurHouse-Lab.

---

**OurHouse-Lab DevHub** - Centralizando o desenvolvimento com estilo futurista! 🤖✨
