/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-bgcolor": "#326c9a",
        "page-bgcolor": "#ece9e4",
        "btn-bgcolor": "#e5e5e5",
      },
      zIndex: {
        100: "100",
        50: "50",
      },
    },
  },
  plugins: [],
};
