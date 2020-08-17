// Regex for URL validation from https://gist.github.com/dperini/729294
const regexp = /https?:\/\/.+\..+\/?./g;

module.exports = (url) => {
  return url.match(regexp)[0];
};
