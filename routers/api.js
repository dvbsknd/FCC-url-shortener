const express = require('express');
const router = express.Router();

router.get("/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

router.post('/post', (req, res) => {
  let ipaddress = req.ip;
  let language = req.header('Accept-Language');
  let software = req.header('User-Agent');
  res.json({ ipaddress, language, software });
});

module.exports = router;
