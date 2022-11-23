/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: { fontFamily: { montserrat: "Montserrat" } },
    colors: {
      gray: { "100": "#2b2b2b", "200": "#272727", "300": "#222" },
      white: "#fff",
      red: "#c61703",
      brown: "#b12010",
    },
    fontSize: {
      "7xs": "15px",
      "6xs": "18px",
      "5xs": "20px",
      "4xs": "23px",
      "3xs": "25px",
      "2xs": "28px",
      xs: "30px",
      sm: "32px",
      base: "35px",
      lg: "40px",
      xl: "45px",
      "2xl": "60px",
    },
    screens: {
      lg: { max: "1200px" },
      md: { max: "768px" },
      sm: { max: "428px" },
    },
  },
  corePlugins: { preflight: false },
};
