const validateUrl = require('./validateUrl.js');

function shortenUrl(url) {
  const error = validateUrl(url);
  return error ? { error } : { url, key: 1 };
}
module.exports = shortenUrl;
