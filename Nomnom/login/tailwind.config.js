export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        zenloop: ['"Zen Loop"', 'cursive'], // 👈 ici on l'appelle "zenloop"
      },
    },
  },
  plugins: [],
}
