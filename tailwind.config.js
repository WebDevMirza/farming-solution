/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      content: {
        clock: 'url("./src/assets/svgs/clock.svg")',
        arrowright: 'url("./src/assets/svgs/arrow-right.svg")',
      },
      colors: {
        black222: "#222222",
        appgreen: "#008000",
        appblue: "#1E87F0",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
