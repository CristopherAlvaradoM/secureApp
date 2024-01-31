/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E1D6C6',
        secondary: '#99511D',
        complementary: '#E1E1E1',
        buttonPrimary: '#99511D',
      }
    },
  },
  plugins: [],
}

