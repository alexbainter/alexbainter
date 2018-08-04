import fileExtension from 'file-extension';
import axios from 'axios';
import flatten from 'array-flatten';
import { memoize as mem } from 'lodash';

const acceptedFileTypes = ['js', 'html', 'scss', 'jsx'];

const makeFilterByType = match => ({ type }) => type === match;

const getContents = mem(
  (path = '') =>
    new Promise((resolve, reject) => {
      axios
        .get(
          `https://api.github.com/repos/metalex9/alexbainter/contents${path}`
        )
        .then(({ data }) => {
          const files = data
            .filter(makeFilterByType('file'))
            .filter(({ name }) =>
              acceptedFileTypes.includes(fileExtension(name))
            );
          const dirs = data.filter(makeFilterByType('dir'));
          Promise.all(dirs.map(dir => getContents(dir.path))).then(
            dirContents => {
              resolve(flatten(files.concat(dirContents)));
            }
          );
        });
    })
);

const downloadFile = mem(url => axios.get(url).then(({ data }) => data));

const getRandomSnippet = () =>
  getContents().then(files =>
    downloadFile(files[Math.floor(Math.random() * files.length)].download_url)
  );

export default getRandomSnippet;
