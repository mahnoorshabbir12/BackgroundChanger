# 🎨 React Background Changer App

A simple and responsive React app that allows users to change the **background color** of the entire screen with a single click. Built using **React functional components** and **Tailwind CSS classes** with inline styling.

---

## 🌐 Live Demo

👉 [https://mahnoorshabbir-backgroundchanger.vercel.app/](https://mahnoorshabbir-backgroundchanger.vercel.app/)

---

## 🚀 Features

- 🟦 Click a button to instantly change the background color
- 🎯 Centered, responsive, and mobile-friendly layout
- ⚛️ Built with React `useState` hook for interactivity
- 🎨 Uses both Tailwind classes and inline styles for layout and colors
- 📱 Fixed position button panel at the bottom of the screen

---

## 🧠 How It Works

- Maintains a `color` state using `useState`
- The background color of the main `<div>` updates with `setColor`
- Each color button updates the `color` state via `onClick`

---

## 🛠 Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/) (for bundling, if applicable)
- Tailwind CSS utility classes (for layout styling)
- Inline CSS (for button and background colors)

---

## 📁 Project Structure

src/
├── App.jsx # Main component with color logic and layout
└── main.jsx # React entry point
