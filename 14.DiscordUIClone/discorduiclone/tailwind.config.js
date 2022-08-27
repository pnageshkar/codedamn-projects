
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        softGray: '#f6f6f6',
        softBlue: '#5865f2',
        ultraBlue: '#404eed',
        bkgBlack: '#23272a',

        darkCharcoal: '#2f3136',
        inpBlack: '#202225',
      
        softRed: '#ed4245',
        softGreen: '#3ba55d',
        softOrange: '#f26522',
        lghtBlue: '#00b0f4',
        ourBlue:'#0000e',
      
      },
      fontFamily: {
        sans: ['Whitney','Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Ginto Nord','Whitney','Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
  }

  
}

// https://blog.logrocket.com/how-to-use-custom-fonts-tailwind-css/