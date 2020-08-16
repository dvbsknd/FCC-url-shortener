const express = require('express');
const router = express.Router();

router.post('/shorturl/new', (req, res) => {
  const original_url = 'www.google.com';
  const short_url = 1;
  res.json({ original_url, short_url });
});

module.exports = router;
