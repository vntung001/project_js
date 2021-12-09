module.exports = {
  purge: [
    './src/*.js',
    './src/**/*.js',
    ],
    mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    display: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
