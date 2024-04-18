/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "script.js", "login.html"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand"],
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [],
};
