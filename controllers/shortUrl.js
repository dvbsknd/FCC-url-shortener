const ShortUrl = require('../models/shortUrl.js');
const validateUrl = require('../utils/validateUrl.js');
const hashId = require('../utils/hashId.js');

module.exports = function (req, res) {
  // Validate the supplied URL meets expected
  // pattern
  validateUrl(req.body.url, (error, url) => {
    if (error) res.json({ error });
    else {
      // Generate a unique ID
      const code = hashId(url);
      // Instantiate a new ShortUrl
      const shortUrl = new ShortUrl({ url, code });
      // Store the URL and ID in the database
      // and send the response once done/failed
      shortUrl.save((error, data) => {
        if (error) res.json({ database_error: error });
        else {
          const { url, code } = data;
          res.json({ url, code });
          console.log(`Created shortcode ${code} for ${url}`);
        }
      });
    }
  });
}
