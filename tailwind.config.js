/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black222: "#222222",
        appgreen: "#008000",
        appdarkgreen: "#01340E",
        appblue: "#1E87F0",
        appblackish: "#5F675D",
        appgray: "#C4C4C4",
        apporange: "#F26E21",
        apporangehover: "#d45004",
        appbgfooter: "#111111",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
