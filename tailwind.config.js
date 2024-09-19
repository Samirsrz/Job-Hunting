/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#60a5fa", // skyblue
      },
      fontFamily: {
        "open-sans": '"Open Sans", sans-serif',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

