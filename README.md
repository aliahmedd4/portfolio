# Ali Hassan — Portfolio Website

> Personal portfolio built with **Node.js + Express** showcasing projects, skills, and background as a CS student and developer.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat-square&logo=ejs&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## Live Demo

🌐 **[ali-hassan.dev](https://ali-hassan.dev)**

---

## Preview

```
┌─────────────────────────────────────────────┐
│  Ali.dev          Projects  Skills  Contact  │
├─────────────────────────────────────────────┤
│                                             │
│   Hi, I'm Ali Hassan                        │
│   Python Developer · Data Scientist         │
│   Full-Stack Engineer                       │
│                                             │
│   [ View Projects ]  [ Contact Me ]         │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Features

- **10 projects** across ML, data science, cryptography, web dev, and game dev
- **Fully responsive** — CSS Grid + Flexbox, no frameworks
- **Smooth animations** — fade-in on scroll via IntersectionObserver
- **Resume download** — direct PDF served via `/resume` route
- **Dark navy theme** — premium design with custom scrollbar and hover effects
- **Zero frontend frameworks** — pure HTML/CSS/JS + EJS templates

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Templating | EJS |
| Styling | Pure CSS3 (no Tailwind, no Bootstrap) |
| Scripting | Vanilla JavaScript |
| Dev Tool | Nodemon |

---

## Project Structure

```
portfolio/
├── server.js              # Express server entry point
├── package.json
├── .env                   # PORT config
├── data/
│   └── data.js            # All content — projects, skills, languages
├── views/
│   ├── partials/
│   │   ├── header.ejs     # Sticky navbar
│   │   └── footer.ejs
│   ├── index.ejs          # Hero / home page
│   ├── projects.ejs       # All projects grid
│   ├── skills.ejs         # Skills grouped by category
│   ├── contact.ejs        # Contact page
│   └── 404.ejs            # Custom 404 page
└── public/
    ├── css/
    │   └── style.css      # All styles
    ├── js/
    │   └── main.js        # Scroll animations, nav highlight
    └── resume.pdf         # Downloadable resume
```

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Create .env file
echo "PORT=3000" > .env

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

```bash
npm start       # production
npm run dev     # development with nodemon (auto-restart)
```

---

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `GET /` | Home | Hero section with intro and CTAs |
| `GET /projects` | Projects | All 10 project cards with tech tags |
| `GET /skills` | Skills | Skills grouped by category |
| `GET /contact` | Contact | Contact info and mailto link |
| `GET /resume` | — | Downloads resume PDF directly |

---

## Projects Featured

| # | Project | Category |
|---|---------|----------|
| 1 | AI-Powered Internship Finder | AI · Full-Stack |
| 2 | Metabolic Syndrome Risk Classifier | Machine Learning |
| 3 | Unsupervised Clustering Model | ML · Unsupervised |
| 4 | Football Player Performance Analysis | Data Analysis |
| 5 | HR Database System | Database · Web |
| 6 | MapReduce Document Processor | Python · Distributed |
| 7 | DES Encryption Implementation | Security · Cryptography |
| 8 | RSA Encryption Implementation | Security · Cryptography |
| 9 | Jackroo – Strategy Board Game | Java · Game Dev |
| 10 | 3D Game – Unity Engine | C# · Game Dev |

---

## Customization

To update content, edit a **single file**:

```
data/data.js
```

This file controls everything rendered on the site — projects, skills, personal info, and languages. No need to touch any EJS templates for content updates.

---

## Deployment

### Railway (recommended)

```bash
# 1. Push to GitHub
git add .
git commit -m "initial commit"
git push origin main

# 2. Go to railway.app → New Project → Deploy from GitHub
# 3. Select your repo — Railway auto-detects Node.js
# 4. Add environment variable: PORT = 3000
# 5. Done — live URL provided instantly
```

### Render

1. Connect GitHub repo at [render.com](https://render.com)
2. Build command: `npm install`
3. Start command: `npm start`
4. Auto-deploys on every push to `main`

---

## Environment Variables

```env
PORT=3000
```

---

## Author

**Ali Ahmed Mohamed Hassan**
CS Student @ German International University (GIU) · Cairo, Egypt

- 📧 ali4.hassan6@gmail.com
- 🌐 [ali-hassan.dev](https://ali-hassan.dev)
- 📞 +20 1013837800

---

## License

MIT — free to use and adapt.
