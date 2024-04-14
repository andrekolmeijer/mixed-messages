export function wrapText(text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (let word of words) {
    if ((currentLine + word).length > maxWidth) {
      lines.push(currentLine.trim());
      currentLine = '';
    }
    currentLine += word + ' ';
  }

  if (currentLine.trim() !== '') {
    lines.push(currentLine.trim());
  }

  return lines.join('\n');
}
