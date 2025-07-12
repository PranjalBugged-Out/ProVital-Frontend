# 🚀 React + TypeScript + Vite

A minimal, fast boilerplate to build modern React applications with **Vite**, **TypeScript**, and **Hot Module Replacement (HMR)**.

---

## 🌐 Live Demo

👉 **[Check out the deployed site](https://pro-vital-frontend-git-main-pranjalbugged-outs-projects.vercel.app/)**

---

## 📦 Tech Stack

- ⚡ **Vite** — Lightning-fast build tool and dev server
- ⚛️ **React** — Popular UI library for building interactive interfaces
- 🔒 **TypeScript** — Static typing for safer, scalable code
- ✅ **ESLint** — Enforces code quality and best practices
- ♻️ **HMR** — Hot Module Replacement for instant feedback during development

---

## 🛠️ Project Setup

**Install dependencies**

```bash
npm install
```

**Start development server**

```bash
npm run dev
```

**Build for production**

```bash
npm run build
```

**Preview production build**

```bash
npm run preview
```

---

## ✅ Recommended ESLint Configuration

Enable type-aware lint rules for a production-ready codebase:

```js
// eslint.config.js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // Or stricter rules:
    // ...tseslint.configs.strictTypeChecked,
    // Optional stylistic rules:
    // ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

### ➕ React-Specific Plugins

Add extra lint rules for React best practices:

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

---

## 📄 License

This project is licensed under your preferred license.  
Feel free to modify and use it for your own projects!

---

**Happy coding! 🚀✨**
