/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages//*.{html,js,ts,tsx}", "./components//*.{html,js,ts,tsx}" ],
  theme: {
    extend: {},
    fontFamily:{
      'brand':['Abril Fatface', 'cursive'],
      'reading':['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}