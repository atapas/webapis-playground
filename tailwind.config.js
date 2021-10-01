const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      '4.5xl':'2.5rem',
      '18px':'18px',
      '25px':'25px',
      '30px':'30px',
    },
    colors  :{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      'prod':'#00ebff',
      'item':'#ec1c76',
      'box':'#666',
      'payments':'#ebebeb',
    },
    borderWidth: {
      '1':'1px',
     '3': '3px',
    },
    borderRadius: {
      '0.5em':'0.5em',
      '4px':'4px',
      '5px':'5px',
      '10px':'10px',
      '30px':'30px',
      'half':'50%',
    },
    extend:{
      spacing:{
        '300px':'300px',
        '100px':'100px',
        '4px':'4px',
        '5px':'5px',
        '10px':'10px',
        '13px':'13px',
        '75px':'75px',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  prefix: 'tw-',
};
