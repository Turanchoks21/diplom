/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "midnight-black": "#07021e", //dark
        "violet-purple": "#8b45ef", // dark
        "pale-yellow": "#efec88", // dark
        "lavender-mist": "#f0edff",
      },     
    },
  },
  plugins: [],
};
