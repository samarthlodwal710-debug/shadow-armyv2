/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        shadow: {
          950: "#08080a",
          900: "#0e0e11",
          850: "#141418",
          800: "#1c1c22",
          700: "#2a2a34",
          600: "#3f3f4e",
        },
      },
    },
  },
  plugins: [],
};
