/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "very-dark-gray": "hsl(0, 0%, 17%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
      fontFamily: {
        rubik: ["Rubik"],
      },
      backgroundImage: {
        "home-desktop": "url('./images/pattern-bg-desktop.png')",
        "home-mobile": "url('./images/pattern-bg-mobile.png')",
      },
    },
  },
  plugins: [],
};
