# Portfolio &middot; [![GitHub License](https://img.shields.io/github/license/its-abdou/portfolio?label=License)](https://github.com/its-abdou/portfolio/blob/main/LICENSE) ![GitHub Repo Views](https://gitviews.com/repo/its-abdou/portfolio.svg?style=flat&label-color=%23555&color=%23f59e0b)

A modern, minimal developer portfolio built with **Next.js 16**, showcasing my projects, experience, and journey as a Software Engineer passionate about AI, full-stack development, and scalable systems.

🌐 **Live Demo:** https://its-abdou.tech

> **Note:** The screenshots below will be replaced once the portfolio is deployed.

[![screenshot-dark](./public/readme/screenshot-dark.webp#gh-dark-mode-only)](https://its-abdou.tech#gh-dark-mode-only)
[![screenshot-light](./public/readme/screenshot-light.webp#gh-light-mode-only)](https://its-abdou.tech#gh-light-mode-only)

---

## ✨ Features

- Modern & responsive design
- Light / Dark mode
- Experience timeline
- Project showcase
- Certifications
- MDX-powered blog
- SEO optimized
- Open Graph image generation
- JSON-LD structured data
- Sitemap & robots.txt
- AI-ready (`llms.txt`)
- Progressive Web App (PWA)
- OpenPanel Analytics

---

## 🛠️ Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Motion
- MDX
- OpenPanel

---

## 🚀 Getting Started

### Prerequisites

- Node.js 22+
- pnpm
- Git

### Clone the repository

```bash
git clone https://github.com/its-abdou/portfolio.git

cd portfolio
```

### Install Portless

This project uses **Portless** for local HTTPS development.

```bash
npm install -g portless
```

### Install dependencies

```bash
pnpm install
```

### Configure environment variables

```bash
cp .env.example .env.local
```

Fill in the required values inside `.env.local`.

### Run the development server

```bash
pnpm dev
```

Open:

```
https://its-abdou.localhost
```

### Production build

```bash
pnpm build
pnpm start
```

---

## 📁 Project Structure

```text
src/
├── app/
├── components/
├── content/
├── data/
├── hooks/
├── lib/
├── styles/
└── types/
```

---

## 📄 License

Licensed under the [MIT License](./LICENSE).

Feel free to use this project as inspiration or as a starting point for your own portfolio. If you do, please replace all personal information, assets, and branding before publishing.
