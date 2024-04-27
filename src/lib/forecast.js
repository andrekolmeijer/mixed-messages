import { createForecast } from "../utilities/createForecast.js";
import { wrapText } from "../utilities/wrapText.js";

function createAsciiArt(condition) {

  /*
   '   __________  ______   _       __           __  __             '
   '  / ____/ __ \/_  __/  | |     / /__  ____ _/ /_/ /_  ___  _____'
   ' / / __/ /_/ / / /     | | /| / / _ \/ __ `/ __/ __ \/ _ \/ ___/'
   '/ /_/ / ____/ / /      | |/ |/ /  __/ /_/ / /_/ / / /  __/ /    '
   '\____/_/     /_/       |__/|__/\___/\__,_/\__/_/ /_/\___/_/     '
  */

  const asciiArt = `   __________  ______   _       __           __  __             \n  / ____/ __ \\/_  __/  | |     / /__  ____ _/ /_/ /_  ___  _____\n / / __/ /_/ / / /     | | /| / / _ \\/ __ \`/ __/ __ \\/ _ \\/ ___/\n/ /_/ / ____/ / /      | |/ |/ /  __/ /_/ / /_/ / / /  __/ /    \n\\____/_/     /_/       |__/|__/\\___/\\__,_/\\__/_/ /_/\\___/_/     \n\n`;
  const green = '#A3BE8C', yellow = '#EBCB8B', blue = '#81A1C1';
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

  const span = document.getElementById('output1');
  span.style.color = `${selectedColor}`;
  span.textContent = asciiArt;
}

export function forecast() {
  const forecast = createForecast();
  const wrappedForecast = wrapText(forecast, 85);

  forecast.includes('clear')
  ? createAsciiArt('clear')
  : forecast.includes('showers')
  ? createAsciiArt('showers')
  : createAsciiArt();

  const span = document.getElementById('output2');
  span.textContent = wrappedForecast;
}
