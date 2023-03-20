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
  },
  plugins: [],
};
