function randomText() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const lengthRandomText = Math.floor(Math.random() * 100);
  for (let i = 0; i < lengthRandomText; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

module.exports = randomText;
