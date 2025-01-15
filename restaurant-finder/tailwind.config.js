/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '10vh': '10vh'
      },
      colors: {
        'food-yellow': '#F9BF63',
        'food-red':'#FF4646'
      },
      fontFamily: {
        'Caveat': '"Caveat", serif'
      },
      borderRadius: {
        '4xl':'2rem'
      },
    },
  },
  plugins: [],
}

