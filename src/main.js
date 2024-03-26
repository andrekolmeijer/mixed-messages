import { wrapText, createForecast } from "./scripts/sharedFunctions.js";
import { createElementHelper } from "./scripts/helperFunctions.js";
import { applyStyles } from "./scripts/styles.js";

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
  document.getElementById('console').appendChild(preEl);
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
  document.getElementById('console').appendChild(preEl);
}

function formatDocument() {
  const mainEl = createElementHelper('main');
  const sectionEl = createElementHelper('section');
  const hEl = createElementHelper('h1', 'Mixed Messages');
  const divEl = createElementHelper('div', '', 'id', 'console');

  document.getElementById('app').appendChild(mainEl);
  document.querySelector('main').appendChild(sectionEl);
  document.querySelector('section').appendChild(hEl);
  document.querySelector('section').appendChild(divEl);

  formatForecast()
  applyStyles()
}

formatDocument()
