module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      paytone: ['"Paytone One"', 'sans-serif'],
      helvetica: ['"Helvetica Neue"', 'sans-serif'],
      azeret: ['"Azeret Mono"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#03438D',
        black: {
          100: '#000400',
        },
        gray: {
          100: '#808080',
          200: '#A8B0B9',
        },
      },
    },
  },
  plugins: [],
};
