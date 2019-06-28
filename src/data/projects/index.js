const blossom = require('./blossom');
const generativeMusic = require('./generative-fm');
const corruptionLoops = require('./corruption-loops');

const ORDER_PROP_NAME = 'order';

module.exports = [blossom, generativeMusic, corruptionLoops].sort(
  (a, b) => a[ORDER_PROP_NAME] - b[ORDER_PROP_NAME]
);
