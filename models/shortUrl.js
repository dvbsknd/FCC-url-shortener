const mongoose = require('mongoose');
const hashId = require('../services/hashId.js').hashId;

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const shortUrlSchema = new mongoose.Schema({
  url: { type: String, required: '{PATH} is required.' },
  code: { type: String, required: true, unique: true, maxLength: 6 }
});

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);

exports.saveShortUrl = (url, res) => {

  // Generate a new code
  const code = hashId(url);
  // Check the code doesn't already exist
  // Instantiate the item to be saved
  const shortUrl = new ShortUrl( { url, code });
  // Save it and return the saved data
  shortUrl.save((err, data) => {
    if (err) console.error(err);
    console.log(data.url, 'saved');
    res.send(data);
  });
};

exports.getFullUrl = () => {};

exports.ShortUrlModel = ShortUrl;
