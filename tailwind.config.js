module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#fffbf2",
          default: "#fff0e1 ",
          dark: "#FFAC93",
        },
        secondary: {
          light: "#fcf5eb",
          default: "#ffede5",
          dark: "#FFAC93",
        },
      },
    },
  },
  plugins: [],
};
