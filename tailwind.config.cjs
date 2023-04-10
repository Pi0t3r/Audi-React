/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerImageMain:
          "url(https://www.audi.pl/content/dam/nemo/pl/glowna/02-2023/Q8_FAM_1440x1920_v2.jpg?imwidth=768)",
        backgroundEle:
          "url(https://www.audi.pl/content/dam/nemo/pl/glowna/02-2023/Activesphere_748x2500.jpg?imwidth=374)",
        etron:
          "url(https://www.audi.pl/content/dam/nemo/pl/glowna/02-2023/etronGT_748x2500.jpg?imwidth=374)",
      },
    },
    screens: {
      fold: "280px",
      small: "320px",
      node: "360px",
      iphone: "412px",
      tablet: "552px",
      smd:"620px",
      mdmd:"731px",
      md: "768px",
      nethub: "912px",
      xl:"1174px",
    },
  },
  plugins: [],
};
