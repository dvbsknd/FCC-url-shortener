const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded());

router.post('/shorturl/new', (req, res) => {
  const original_url = req.body.url;
  const short_url = 1;
  res.json({ original_url, short_url });
});

module.exports = router;
