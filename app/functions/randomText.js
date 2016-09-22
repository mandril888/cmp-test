function randomText() {
  let text = '';
  const possible = ' abcude eoafighij kloman iuoepqr stuovw euxyiz ';
  const lengthRandomText = Math.floor(Math.random() * 100);
  for (let i = 0; i < lengthRandomText; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  const textFinal = text[0].toUpperCase() + text.slice(1);
  return textFinal;
}

module.exports = randomText;
