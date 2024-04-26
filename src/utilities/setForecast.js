import { formatForecast } from "./index.js";

export function setForecast() {
  formatForecast()

  let innerText = document.getElementById('output2').innerText;
  while (innerText.includes('clear') || innerText.includes('showers')) {
    formatForecast()
    innerText = document.getElementById('output2').innerText;
  }
}
