// Regex for URL validation from https://gist.github.com/dperini/729294
const regexp = /https?:\/\/.+\..+\/?./g;

module.exports = (url) => {
  const match = url.match(regexp);
  return match ? url : match;
};
