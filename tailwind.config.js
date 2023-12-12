/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {

      backgroundImage: {
        'sea': 'url(../img/sea-bg.png)',
        'deep': 'url(../img/medusa.png)'

      },

      keyframes: {
        bubbles: {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '50%': { opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(-80vh)' }
        }
      },

      animation: {
        bubbles: 'bubbles 6s linear infinite'
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },

      colors: {
        'prime-black': '#141a1a',
        'color-text': '#fff',
        'deep-blue': '#00040b'
      },

      screens: {
        // Telas adaptaveis para a NAV
        'mobnav': { 'max': '768px' }, // telas do nav para mobile
        'mobnav2': { 'max': '1049px' },
        'mobnav3': { 'min': '1050px' },
        'desknav': { 'min': '769px' }, // telas do nav para desktop em diante

        // telas adaptaveis para BANNER
        'deskbanner': { 'max': '1200px' }, // telas do nav para desktop em diante

        'small': { 'max': '639px' },
        'mobile': { 'min': '640px', 'max': '767px' },
        'tablet': { 'min': '768px', 'max': '1280px' },
        'desktop': { 'min': '1281px', 'max': '1536px' },
        'large': { 'min': '1537px', 'max': '2500px' }

      },

      spacing: {
        '5percent': '5%',
        '10percent': '10%',
        '20percent': '20%',
        '30percent': '30%',
        '40percent': '40%',
        '50percent': '50%',
        '60percent': '60%',
        '70percent': '70%',
        '80percent': '80%',
        '90percent': '90%',
      }

    },
  },
  plugins: [


  ],
}

