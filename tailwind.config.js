/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#275df5", // skyblue
      },
      fontFamily: {
        "open-sans": '"Open Sans", sans-serif',
      },
    },
  },
  plugins: [daisyui],
};

