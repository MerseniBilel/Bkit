const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sora : ["Sora", ...defaultTheme.fontFamily.sans],
      },
      colors : {
        fuchsia : colors.fuchsia
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
