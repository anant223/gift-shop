/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  prefix: "",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['"Cairo"', "sans-serif"], // Cairo font
      },
      
    },
  },
  plugins: [],
};
