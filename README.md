# BodegaEinter App

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **React 19** - A JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - A utility-first CSS framework
- **ESLint** - Linting utility for JavaScript and TypeScript

## 📦 Getting Started

### Prerequisites

- Node.js version 20.19+ or 22.12+ (currently using 20.17.0 - upgrade recommended)
- npm 11.1.0 or higher

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build

Build the project for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Lint

Run ESLint to check code quality:

```bash
npm run lint
```

## 🎨 Tailwind CSS

This project uses Tailwind CSS v4 with the new `@tailwindcss/postcss` plugin. The configuration is in `tailwind.config.js` and PostCSS is configured in `postcss.config.js`.

## 📝 Project Structure

```
BodegaEinterApp/
├── src/
│   ├── assets/       # Static assets
│   ├── App.tsx       # Main App component
│   ├── main.tsx      # Application entry point
│   └── index.css     # Global styles with Tailwind directives
├── public/           # Public static files
├── dist/             # Production build output
└── package.json      # Project dependencies and scripts
```

## ⚠️ Note

You are using Node.js 20.17.0. Vite requires Node.js version 20.19+ or 22.12+. Please upgrade your Node.js version for optimal performance and compatibility.

