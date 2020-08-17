const dns = require('dns');

module.exports = (url, callback) => {
  try {
    let urlObject = new URL(url);
    dns.lookup(urlObject.host, (err, address, family) => {
      console.log('Found address: %j family: IPv%s', address, family);
      callback(null, url);
    });
  } catch (err) {
    callback(err);
  }
};
