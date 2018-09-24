module.exports = {
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    '@babel/syntax-dynamic-import',
    'transform-react-remove-prop-types',
  ],
};
