/**
 * NOTE:
 * https://github.com/Acidic9/prettier-plugin-tailwind/issues/29
 */

module.exports = {
  // mode: process.env.NODE_ENV ? 'jit' : undefined,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    maxWidth: {
      container: '100rem',
      '500px': '500px',
      '400px': '400px',
    },
    extend: {
      colors: {
        prod: '#00ebff',
        item: '#ec1c76',
        box: '#666',
        payments: '#ebebeb',
        demo: '#f4f4f4',
        link: '#551A8B',
      },
    },
  },
  variants: {
    extend: {
      focus: ['active', 'focus', 'hover'],
      outline: ['active', 'focus', 'hover'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  prefix: 'tw-',
};
