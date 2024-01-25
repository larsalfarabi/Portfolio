import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        md: "3rem",
        lg: "6.2rem",
      },
    },
    extend: {
      colors: {
        primary: "#303030",
        secondary: "#E5E7EB",
        accent: "#3B4344",
        base_col: "#404040",
        base_col_darker: "#151E31",
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        DM_sans: ["DM Sans", "sans-serif"],
        roboto_mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
