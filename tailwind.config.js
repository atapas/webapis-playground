/**
 * NOTE:
 * https://github.com/Acidic9/prettier-plugin-tailwind/issues/29
 */
module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      container: '82.5em',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  prefix: 'tw-',
};
