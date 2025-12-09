/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        knbs: {
          50: '#fdf3ef',
          100: '#fbe7dd',
          200: '#f7cfbb',
          300: '#f3b799',
          400: '#e89467',
          500: '#b06443',
          600: '#8b4d34',
          700: '#6b3a28',
          800: '#4a271c',
          900: '#2a1510',
        }
      }
    }
  },
  plugins: []
};
