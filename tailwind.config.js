/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx,tsx,ts}",
    "./components/**/*.{html,js,jsx,tsx,ts}",
    "./sections/**/*.{html,js,jsx,tsx,ts}",
    "./styles/**/*.{js,jsx,tsx,ts}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-black": "rgb(12 0 0)",
        "secondary-white": "#c7c7c7",
        "brand-grey": "#BCBEC0",
        "brand-red": "#C52127"
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)"
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
