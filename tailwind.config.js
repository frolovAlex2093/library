module.exports = {
  content: [
    './src/components/**/*.jsx',
    './src/pages/**/*.jsx',
    './src/**/*.jsx',
    './src/index.html'
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          Dancing: ['Dancing Script', 'cursive']
        }
      }
    }
  },
  plugins: [require('daisyui')]
};
