/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // 👈 Active le mode dark via une classe CSS
  theme: {
    extend: {
      colors: {
        primary: '#10B981',      // 💚 Teinte principale personnalisée (vert Tailwind par défaut)
        dark: '#0F172A',         // 🌒 Couleur de fond sombre
        light: '#F9FAFB'         // ☀️ Couleur claire
      },
      animation: {
    'fade-in': 'fadeIn 1.2s ease-out forwards',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  },
    },
  },
  plugins: [],
}
