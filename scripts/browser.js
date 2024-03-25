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
  document.querySelector('div').appendChild(preEl);
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
  document.querySelector('div').appendChild(preEl);
}

function formatDocument() {
  const mainEl = createElementHelper('main');
  document.body.insertBefore(mainEl, document.body.firstChild);

  const sectionEl = createElementHelper('section');
  document.querySelector('main').appendChild(sectionEl);

  const hEl = createElementHelper('h1', 'Mixed Messages');
  document.querySelector('section').appendChild(hEl);

  const divEl = createElementHelper('div');
  document.querySelector('section').appendChild(divEl);

  formatForecast()

  const allEl = document.querySelectorAll('*');
  allEl.forEach((el) => {
    el.style.boxSizing = 'border-box';
    el.style.margin = '0';
    el.style.padding = '0';
    el.style.minWidth = '0';
  });

  const htmlEl = document.querySelector('html');
  htmlEl.style.fontFamily = '"Roboto", sans-serif';

  hEl.style.textAlign = 'center';
  hEl.style.padding = '25px';
  hEl.style.fontSize = '30px';
  hEl.style.lineHeight = '36px';
  hEl.style.fontWeight = '700';

  divEl.style.margin = '0 auto';
  divEl.style.padding = '9px';
  divEl.style.color = '#C5C5C5';
  divEl.style.backgroundColor = '#1E1E1E';
  divEl.style.width = '1035px';
  divEl.style.height = '635px'
  divEl.style.borderRadius = '10px';
  divEl.style.boxShadow = '0 25px 50px -12px rgb(0 0 0 / 0.25)';

  const preEls = document.querySelectorAll('pre');
  preEls.forEach(preEl => {
    preEl.style.fontFamily = '"MonoLisa", sans-serif';
    preEl.style.fontSize = '12px'
  });
}

formatDocument()
