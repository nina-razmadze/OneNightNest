module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#fffbf2",
          default: "#FFE6CD",
          dark: "#FFAC93",
        },
        secondary: {
          light: "#FFE6CD",
          default: "#FFAC93",
          dark: "#FFA980",
        },
      },
    },
  },
  plugins: [],
};
