/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pOrange: "#f39c0b",
        sOrange: "#e86f00",
        dOrange: "#d65609",
        pRed: "#fb7185",
        sRed: "#f43f5e",
        dRed: "#e11d48",
        pGreen: "#86efac",
        sGreen: "#22c55e",
        dGreen: "#15803d",
        dark: "#656565",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
};
