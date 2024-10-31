/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainpageWhite: "#ffffff",
        mainpageDark:"#17181c",
        headerWhite: "#EEF0F3",
        headerDark: "#23262f"

      },
    },
  },
  plugins: [],
  darkMode:"class"
}