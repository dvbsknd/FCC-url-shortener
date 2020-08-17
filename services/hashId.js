exports.hashId = () => {
  const lowercase = [...Array(26)].map((_, i) => String.fromCharCode(i + 97)).join('');
  const uppercase = [...Array(26)].map((_, i) => String.fromCharCode(i + 65)).join('');
  const numbers   = [...Array(10)].map((_, i) => String.fromCharCode(i + 48)).join('');
  const options   = lowercase.concat(uppercase).concat(numbers);
  return [...Array(6)].map(() => options[Math.floor(Math.random() * options.length)]).join('');
};
