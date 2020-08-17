/* const dns = require('dns');
dns.lookup(match, (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});*/
module.exports = (url) => {
  try {
    let urlObject = new URL(url);
    return { url: urlObject };
  } catch (err) {
    return { error: err.code };
  }
};
