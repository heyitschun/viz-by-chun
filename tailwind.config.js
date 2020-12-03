const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ["DM Mono", ...defaultTheme.fontFamily.mono]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
