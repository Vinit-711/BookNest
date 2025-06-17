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
        scrollX: "scrollX 18s linear infinite",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        cursive: ['Cedarville Cursive', 'cursive'],
        dancing: ['Dancing Script', 'cursive'],
        edu: ['Edu NSW ACT Hand Pre', 'cursive'],
        roboto: ['Roboto Flex', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
