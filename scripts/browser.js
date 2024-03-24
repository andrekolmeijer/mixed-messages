import { wrapText, createForecast } from "./shared.js";
import { createElementHelper } from "./helpers.js";

function createAsciiArt(condition) {

  /*
   '   __________  ______   _       __           __  __             '
   '  / ____/ __ \/_  __/  | |     / /__  ____ _/ /_/ /_  ___  _____'
   ' / / __/ /_/ / / /     | | /| / / _ \/ __ `/ __/ __ \/ _ \/ ___/'
   '/ /_/ / ____/ / /      | |/ |/ /  __/ /_/ / /_/ / / /  __/ /    '
   '\____/_/     /_/       |__/|__/\___/\__,_/\__/_/ /_/\___/_/     '
  */

  const asciiArt = `\n   __________  ______   _       __           __  __             \n  / ____/ __ \\/_  __/  | |     / /__  ____ _/ /_/ /_  ___  _____\n / / __/ /_/ / / /     | | /| / / _ \\/ __ \`/ __/ __ \\/ _ \\/ ___/\n/ /_/ / ____/ / /      | |/ |/ /  __/ /_/ / /_/ / / /  __/ /    \n\\____/_/     /_/       |__/|__/\\___/\\__,_/\\__/_/ /_/\\___/_/     \n\n`;
  const green = '#6A9955', yellow = '#D7BA7D', blue = '#569CD6';
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

  const preEl = createElementHelper('pre', asciiArt, 'style', `color: ${selectedColor}`)
  document.querySelector('main').appendChild(preEl);
}

function formatForecast() {
  const forecast = createForecast();
  const wrappedForecast = wrapText(forecast, 85);

  forecast.includes('clear')
  ? createAsciiArt('clear')
  : forecast.includes('showers')
  ? createAsciiArt('showers')
  : createAsciiArt()

  const preEl = createElementHelper('pre', wrappedForecast + '\n\n')
  document.querySelector('main').appendChild(preEl);
}

function formatDocument() {
  const mainEl = createElementHelper('main');
  document.body.insertBefore(mainEl, document.body.firstChild);
  mainEl.style.padding = '9px';

  formatForecast()
}

formatDocument()
