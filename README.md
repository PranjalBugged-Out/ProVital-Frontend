# 🚀 React + TypeScript + Vite

A minimal, fast boilerplate to build modern React applications with Vite, TypeScript, and Hot Module Replacement (HMR).

## 🌐 Live Demo

Check out the deployed site here:  
👉 [pro-vital-frontend](https://pro-vital-frontend-git-main-pranjalbugged-outs-projects.vercel.app/)

## 📦 Tech Stack

- **Vite** — blazing-fast build tool
- **React** — UI library
- **TypeScript** — static typing
- **ESLint** — linting for code quality
- **HMR** — instant updates without full reloads

## ✅ Recommended ESLint Setup

For production apps, enable type-aware lint rules for better safety:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // Or stricter:
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
