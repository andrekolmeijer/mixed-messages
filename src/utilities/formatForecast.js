import { createAsciiArt, createForecast, wrapText } from "./index.js";

export function formatForecast() {
  const forecast = createForecast();
  const wrappedForecast = wrapText(forecast, 85);

  forecast.includes('clear')
  ? createAsciiArt('clear')
  : forecast.includes('showers')
  ? createAsciiArt('showers')
  : createAsciiArt()

  const span = document.getElementById('output2');
  span.textContent = wrappedForecast;
}
