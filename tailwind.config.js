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



// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'bottom-to-top': 'bottomToTop 3s linear infinite',
//         'top-to-bottom': 'topToBottom 3s linear infinite',
//       },
//       keyframes: {
//         bottomToTop: {
//           '0%': { transform: 'translateY(100%)' },
//           '100%': { transform: 'translateY(-100%)' },
//         },
//         topToBottom: {
//           '0%': { transform: 'translateY(-100%)' },
//           '100%': { transform: 'translateY(100%)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
