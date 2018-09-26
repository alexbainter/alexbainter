module.exports = esmodules => ({
  presets: [
    [
      '@babel/env',
      {
        targets: {
          esmodules,
        },
      },
    ],
    '@babel/react',
  ],
  plugins: [
    '@babel/syntax-dynamic-import',
    'transform-react-remove-prop-types',
  ],
  env: {
    production: {
      presets: [['minify', { builtIns: false }]],
    },
  },
});
