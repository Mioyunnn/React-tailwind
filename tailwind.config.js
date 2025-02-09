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
        'food-darkgreen': '#1E5230',
        'food-green':'#0F7B1F',
        'food-slightgreen':'#91AE65',
        'food-bitgreen':'#D2E4AA',
        'food-white':'#F0F8FF'
      },
      fontFamily: {
        'Caveat': '"Caveat", serif'
      },
      borderRadius: {
        '4xl':'2rem'
      },
      boxShadow: {
        'card':'0 1px 6px rgba(0, 0, 0, 0.2)'
      },
      animation: {
        'arrowing':'arrow 2s linear infinite'
      },
      keyframes: {
        'arrow': {
          '0%, 100%': {
            transform: 'translateX(10%)',
            opacity: '0.3'
          },
          '33%': {
            transform: 'translateX(32%)',
            opacity: '0.8'
          },
          '66%': {
            transform: 'translateX(50%)',
            opacity: '1'
          }
        }
      },
      rotate: {
        '360': '360deg'
      }
    },
  },
  plugins: [],
}

