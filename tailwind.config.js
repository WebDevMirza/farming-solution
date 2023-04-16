/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black222: "#222222",
        appgreen: "#008000",
        appblue: "#1E87F0",
        appblackish: "#5F675D",
        appgray: "#C4C4C4",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
