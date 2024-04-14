import { createForecast } from "../util/createForecast.js";
import { wrapText } from "../util/wrapText.js";

function createAsciiArt(condition) {

  /*
   '   __________  ______   _       __           __  __             '
   '  / ____/ __ \/_  __/  | |     / /__  ____ _/ /_/ /_  ___  _____'
   ' / / __/ /_/ / / /     | | /| / / _ \/ __ `/ __/ __ \/ _ \/ ___/'
   '/ /_/ / ____/ / /      | |/ |/ /  __/ /_/ / /_/ / / /  __/ /    '
   '\____/_/     /_/       |__/|__/\___/\__,_/\__/_/ /_/\___/_/     '
  */

  const asciiArt = `   __________  ______   _       __           __  __             \n  / ____/ __ \\/_  __/  | |     / /__  ____ _/ /_/ /_  ___  _____\n / / __/ /_/ / / /     | | /| / / _ \\/ __ \`/ __/ __ \\/ _ \\/ ___/\n/ /_/ / ____/ / /      | |/ |/ /  __/ /_/ / /_/ / / /  __/ /    \n\\____/_/     /_/       |__/|__/\\___/\\__,_/\\__/_/ /_/\\___/_/     \n\n`;
  const green = '\x1b[32m', yellow = '\x1b[33m', blue = '\x1b[34m';
  const resetColor = '\x1b[0m';
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

  return selectedColor + asciiArt + resetColor;
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

  console.log(asciiArt + wrappedForecast + '\n')
}

formatForecast()
