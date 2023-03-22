/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/src/utilities/img/logo.jpg')",
        headerImageMain: "url('/src/utilities/img/headerImage.jpg')",
        backgroundEle: "url('/src/utilities/img/electricbackground.jpg')",
        etron: "url('/src/utilities/img/mobi.jpg')",
      },
    },
    screens: {
      fold: "280px",
      small: "320px",
      node: "360px",
      iphone: "412px",
      md:"768px",
      nethub: "912px",
    },
  },
  plugins: [],
};
