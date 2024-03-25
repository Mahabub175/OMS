/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        semibold: 700,
      },
      colors: {
        primary: "#FF8100",
        secondary: "#2563EB",
        pdf: "#F87171",
        excel: "#22C55E",
      },
    },
  },
  plugins: [],
};
