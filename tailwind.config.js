/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      accent: {
        1: 'hsl(var(--color-accent1) / <alpha-value>)',
        2: 'hsl(var(--color-accent2) / <alpha-value>)',
      },
      primary: 'hsl(var(--color-primary) / <alpha-value>)',
      secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
    },
    extend: {},
  },
  plugins: [],
};
