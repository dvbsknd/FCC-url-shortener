const express = require('express');
const router = express.Router();
const createShortUrl = require('../controllers/shortUrl.js');
const getLongUrl = require('../controllers/longUrl.js');

router.use(express.urlencoded({ extended: true }));
router.post('/shorturl/new', createShortUrl);
router.get('/shorturl/:code', getLongUrl);

module.exports = router;
