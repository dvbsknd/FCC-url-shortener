const validateUrl = require('./validateUrl.js');
const saveShortUrl = require('../models/shortUrl.js').saveShortUrl;

function shortenUrl(req, res) {
  const error = validateUrl(req.body.url);
  if (error) res.send({ error });
  else saveShortUrl(req.body.url, res);
}

module.exports = shortenUrl;
