module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackB: "#161f27",
        blackT: "#1e2934",
        charcoalP: "#273a4f",
        charcoalS: "#35495e",
        whiteB: "#e4edf6",
        whiteT: "#f1f4f9",
        greenP: "#22bf78",
        greenS: "#2fda8d",
      },
    },
    fontFamily: {
      sans: ["Roboto", "IBM Plex Sans", "sans-serif"],
    },
    
  },
  plugins: [],
};
