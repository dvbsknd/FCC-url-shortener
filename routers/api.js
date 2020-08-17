const express = require('express');
const router = express.Router();
const shortenUrl = require('../services/shortenUrl.js');

router.use(express.urlencoded({ extended: true }));

router.post('/shorturl/new', (req, res) => shortenUrl(req, res));

module.exports = router;
