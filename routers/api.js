const express = require('express');
const router = express.Router();
const createShortUrl = require('../controllers/shortUrl.js');

router.use(express.urlencoded({ extended: true }));
router.post('/shorturl/new', createShortUrl);

module.exports = router;
