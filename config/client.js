const path = require('path');
const clientDir = path.resolve('client');
const clientSrcDir = path.resolve(clientDir, 'src');
const clientDistDir = path.resolve(clientDir, 'dist');
const appEntry = path.resolve(clientSrcDir, 'index.jsx');
const defaultHTML = path.resolve(clientDir, 'index.html');

module.exports = {
  clientDir,
  clientSrcDir,
  clientDistDir,
  appEntry,
  defaultHTML,
};
