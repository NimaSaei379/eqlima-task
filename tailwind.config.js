/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#070d14",
        primary2: "#003566",
        primary3: "#001d3d",
        secondary1: "#ffd60a",
        secondary2: "#ffc300",
        text_primary: "#ffffff",
        text_secondary: "#e5e5e5",
      },
    },
  },
  plugins: [],
};
