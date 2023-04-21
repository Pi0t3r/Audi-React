/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerImageMain:
          "url(https://www.audi.pl/content/dam/nemo/pl/glowna/02-2023/Q8_FAM_1920x1920_v2.jpg?imwidth=1920)",
      },
    },
    screens: {
      fold: "280px",
      small: "320px",
      node: "360px",
      iphone: "412px",
      tablet: "552px",
      smd: "620px",
      mdmd: "731px",
      md: "768px",
      nethub: "912px",
      xl: "1174px",
      "2xl": "2000px",
    },
  },
  plugins: [],
};
