function randomText() {
  let text = '';
  const possible = '     abcdefghijklmnopqrstuvwxyzaaaaaeeeeeiiiiiooooouuuuu     ';
  const lengthRandomText = Math.floor(Math.random() * 100) + 10;
  for (let i = 0; i < lengthRandomText; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  const textFinal = text[0].toUpperCase() + text.slice(1);
  return textFinal;
}

module.exports = randomText;
