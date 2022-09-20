/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { 
      backgroundImage: (theme) => ({
        home: "url('./images/background.png')",
        
      }),
    },
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
}
