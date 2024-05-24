/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "midnight-black": "#1a1c22", //light
        "violet-purple": "#8b45ef", // light
        "pale-yellow": "#efec88", // light
        "mint-blue": "#e2fffd", // dark
        "hot-pink": "#dc3d9d", //dark
        "neon-green": "#a8ed00", //dark
      },
    },
  },
  plugins: [],
};
