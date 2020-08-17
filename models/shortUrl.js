const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(error => console.log(error));

const shortUrlSchema = new mongoose.Schema({
  url: { type: String, required: '{PATH} is required.' },
  code: { type: String, required: true, unique: true, maxLength: 6 }
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);
