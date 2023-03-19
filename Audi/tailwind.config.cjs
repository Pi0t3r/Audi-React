/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/src/utilities/img/AL090142_full.jpg')",
        "headerImageMain":
          "url('/src/utilities/img/nkVk9kpTURBXy9hZWRiODZiNGQ3ZGQ5ODA3NDYzZmNmYjYzMTcxMzkyNC5qcGeSlQPMpc0BPc0Eus0CqZMFzQSwzQKk3gACoTABoTEA.jpg')",
      },
    },
  },
  plugins: [],
};
