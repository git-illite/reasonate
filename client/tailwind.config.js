// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Reasonate blue
        accent: "#FACC15", // Yellow highlight
      },
    },
  },
  darkMode: "class", // enables dark mode via className
  plugins: [],
};
