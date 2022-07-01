
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      lightCyan: "hsl(193, 38%, 86%)", //Primary
      neonGreen: "hsl(150, 100%, 66%)", //Primary
      grayishBlue: "hsl(217, 19%, 38%)", //Neutral
      darkGrayishBlue: " hsl(217, 19%, 24%)", //Neutral
      darkBlue: "hsl(218, 23%, 16%)", //Neutral
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
}
