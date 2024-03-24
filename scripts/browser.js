import { wrapText, createForecast } from "./shared.js";

function createAsciiArt(condition) {

  /*
   '   __________  ______   _       __           __  __             '
   '  / ____/ __ \/_  __/  | |     / /__  ____ _/ /_/ /_  ___  _____'
   ' / / __/ /_/ / / /     | | /| / / _ \/ __ `/ __/ __ \/ _ \/ ___/'
   '/ /_/ / ____/ / /      | |/ |/ /  __/ /_/ / /_/ / / /  __/ /    '
   '\____/_/     /_/       |__/|__/\___/\__,_/\__/_/ /_/\___/_/     '
  */

  const asciiArt = `\n   __________  ______   _       __           __  __             \n  / ____/ __ \\/_  __/  | |     / /__  ____ _/ /_/ /_  ___  _____\n / / __/ /_/ / / /     | | /| / / _ \\/ __ \`/ __/ __ \\/ _ \\/ ___/\n/ /_/ / ____/ / /      | |/ |/ /  __/ /_/ / /_/ / / /  __/ /    \n\\____/_/     /_/       |__/|__/\\___/\\__,_/\\__/_/ /_/\\___/_/     \n\n`;
  const green = '#00FF00', yellow = '#FFFF00', blue = '#0000FF';
  // const resetColor = '\x1b[0m';
  let selectedColor = '';

  switch (condition) {
    case 'clear':
      selectedColor = yellow;
      break;
    case 'showers':
      selectedColor = blue;
      break;
    default:
      selectedColor = green;
      break;
  }

  // return selectedColor + asciiArt + resetColor;
  return asciiArt;
}

function formatForecast() {
  const forecast = createForecast();
  const wrappedForecast = wrapText(forecast, 85);
  let asciiArt = '';

  forecast.includes('clear')
  ? asciiArt = createAsciiArt('clear')
  : forecast.includes('showers')
  ? asciiArt = createAsciiArt('showers')
  : asciiArt = createAsciiArt()

  document.getElementById('cmd').innerText = asciiArt + wrappedForecast + '\n';
}

formatForecast()
