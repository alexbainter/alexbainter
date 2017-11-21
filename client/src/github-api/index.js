import fileExtension from 'file-extension';
import axios from 'axios';
import flatten from 'array-flatten';
import mem from 'mem';

const acceptedFileTypes = ['js', 'html', 'scss'];

const makeFilterByType = match => ({ type }) => type === match;

const getContents = mem(async (path = '') => {
  const { data } = await axios.get(
    `https://api.github.com/repos/metalex9/alexbainter/contents${path}`
  );
  const files = data
    .filter(makeFilterByType('file'))
    .filter(({ name }) => acceptedFileTypes.includes(fileExtension(name)));
  const dirs = data.filter(makeFilterByType('dir'));
  const dirContents = await Promise.all(dirs.map(dir => getContents(dir.path)));
  return flatten(files.concat(dirContents));
});

const downloadFile = mem(url => axios.get(url).then(({ data }) => data));

const getRandomSnippet = () =>
  getContents()
    .then(files =>
      downloadFile(files[Math.floor(Math.random() * files.length)].download_url)
    )
    .then(({ data }) => data);

export { getRandomSnippet };
