/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100vw)" }, 
        },
      },
      animation: {
        scrollX: "scrollX 10s linear infinite",
      },
    },
  },
  plugins: [],
};
