/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#D2E3C8",
        "secondary": "#4F6F52"
      },
      fontFamily:{
        dancingScript: ['DancingScript', 'sans-serif']
      }
    },
  },
  plugins: [],
}

