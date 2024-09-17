/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["CustomFont", "sans-serif"],
      },
      colors: {
        primary: "#4ec39e", // green
        secondary: "#0073b9", // blue
        grayss: "#b2b2b2",
      },
      animation: {
        "glow-border": "glow-border 2s infinite",
      },
      keyframes: {
        "glow-border": {
          "0%, 100%": { boxShadow: "0px 0px 5px 5px #4ec39e" },
          "50%": { boxShadow: "0px 0px 10px 5px #0073b9" },
        },
      },
    },
  },

  plugins: [],
};
