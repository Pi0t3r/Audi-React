/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerImageMain: "url('/src/utilities/img/headerImage.jpg')",
        backgroundEle: "url('/src/utilities/img/sphere.jpg')",
        etron: "url('/src/utilities/img/e-tronDrive.jpg')",
      },
    },
    screens: {
      fold: "280px",
      small: "320px",
      node: "360px",
      iphone: "412px",
      tablet: "552px",
      md: "768px",
      nethub: "912px",
    },
  },
  plugins: [],
};
