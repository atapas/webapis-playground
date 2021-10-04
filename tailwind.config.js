module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      '1.5em': '1.5em',
      '2em': '2em',
      '4.5xl': '2.5rem',
      '18px': '18px',
      '25px': '25px',
      '30px': '30px',
    },
    borderWidth: {
      'none': '0',
      '1': '1px',
      '3': '3px',
    },
    maxWidth: {
      '500px': '500px',
      '400px': '400px' 
    },
    borderRadius: {
      'none': '0',
      '0.5em': '0.5em',
      '4px': '4px',
      '5px': '5px',
      '10px': '10px',
      '30px': '30px',
      'half': '50%',
    },
    extend: {
      colors: {
        'prod': '#00ebff',
        'item': '#ec1c76',
        'box': '#666',
        'payments': '#ebebeb',
        'demo': '#f4f4f4',
        'link': '#551A8B',
      },
      spacing: {
        '300px': '300px',
        '100px': '100px',
        '400px': '400px',
        '4px': '4px',
        '5px': '5px',
        '10px': '10px',
        '13px': '13px',
        '75px': '75px',
        '175px': '175px',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  prefix: 'tw-',
};
