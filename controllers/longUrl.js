const ShortUrl = require('../models/shortUrl.js');

module.exports = function (req, res) {
  const code = req.params.code;
  ShortUrl.findOne({ code }, (error, data) => {
    if (error) res.json({ database_error: error });
    else {
      const { url } = data;
      res.redirect(url);
    }
  });
}
