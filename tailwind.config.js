module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '768px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        'main': '#636363',
        'blue_1': '#17A7E0',
        'gray_1':"#E9E9E9"

      },
      maxWidth: {
        'max-145': '9rem',
        'max-135': '8.438rem',
        'max-1128': '8.438rem',
      },
      fontSize: {
        'main': '0.938rem',
        'f1.4': '1.4rem',
        'f44': '2.75rem',
      },
      spacing: {
        28: '7rem',
        '15px': '0.938rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
