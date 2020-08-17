const ShortUrl = require('../models/shortUrl.js');
const validateUrl = require('../utils/validateUrl.js');
const hashId = require('../utils/hashId.js');

module.exports = function (req, res) {
  // Validate the supplied URL meets expected
  // pattern
  const url = validateUrl(req.body.url);
  if (!url) res.json({ error: 'invalid url'});
  else {
    // Generate a unique ID
    const code = hashId(url);
    // Instantiate a new ShortUrl
    const shortUrl = new ShortUrl({ url, code });
    // Store the URL and ID in the database
    // and call the callback once done
    shortUrl.save((error, data) => {
      const { url, code } = data;
      res.json(error ? { error } : { url, code });
    });
  }
}
