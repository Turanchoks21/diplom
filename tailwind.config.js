/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      "sm" : "640px",
      "md" : "768px",
      "lg" : "1024px",
      "xl" : "1280px",
      "2xl" : "1536px",
      "xxl" : "1920px",
    },
    extend: {
      colors: {
        "midnight-black": "#07021e", 
        "blue-purple": "#4f4dc3",
        "pale-yellow": "#efec88",
        "lavender-mist": "#f0edff",
      },
    },
    // 3840x2160 4k
    // 2048×1080 2k
  },
  plugins: [],
};
