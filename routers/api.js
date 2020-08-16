const express = require('express');
const router = express.Router();
const shortenUrl = require('../services/shortenUrl.js');

router.use(express.urlencoded({ extended: true }));

router.post('/shorturl/new', (req, res) => {
  const { url, key, error } = shortenUrl(req.body.url);
  res.json(error ? { error } : { original_url: url, short_url: key });
});

module.exports = router;
