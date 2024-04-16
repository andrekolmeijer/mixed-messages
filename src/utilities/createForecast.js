import { useDataStore } from "../stores/DataStore.js";
const { db } = useDataStore();

export function createForecast() {
  const forecast = [];

  for (const key in db) {
    let index = Math.floor(Math.random() * db[key].length);

    switch (key) {
      case 'cloudCoverage':
        forecast.push(`Today's forecast is ${db[key][index]}.`)
        break;
      case 'temperature':
        forecast.push(`The temperature is ${db[key][index]} and`)
        break;
      case 'windSpeed':
        forecast.push(`${db[key][index]}.`)
        break;
      default:
        break;
    }
  }

  return forecast.join(' ');
}
