const blossom = require('./blossom');
const generativeMusic = require('./generative-music');

const ORDER_PROP_NAME = 'order';

module.exports = [blossom, generativeMusic].sort(
  (a, b) => a[ORDER_PROP_NAME] - b[ORDER_PROP_NAME]
);
