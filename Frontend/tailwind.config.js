/** @type {import('tailwindcss').Config} */
//export default {
   // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   // darkMode: "class",
  //  theme: {
   //     extend: {},
 //   },
  //  plugins: [require("daisyui")],

 //  };

 import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
      extend: {},
     },
  plugins: [daisyui],
};
