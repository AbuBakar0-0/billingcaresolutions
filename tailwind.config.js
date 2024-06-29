/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['CustomFont', 'sans-serif'],
      },
      colors: {
        primary: '#4ec39e', // green
        secondary: '#0073b9', // blue
        },
        animation: {
          'glow-border': 'glow-border 1s infinite',
        },
        keyframes: {
          'glow-border': {
            '0%, 100%': { boxShadow: '0px 0px 10px 10px #4ec39e' },
            '50%': { boxShadow: '0px 0px 30px 10px #0073b9' },
          },
          
        },
      },
    },
    
    plugins: [],
  }