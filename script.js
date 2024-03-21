const db = {
  cloudCoverage: ['clear skies with minimal cloud cover', 'partly cloudy with scattered clouds', 'mostly cloudy with occasional breaks of sunshine', 'overcast with thick cloud cover', 'cloudy with a chance of showers'],
  temperature: ['15°C with a cool breeze', '20°C with a mild breeze', '25°C with comfortable temperatures', '30°C with a heatwave warning', '35°C with scorching temperatures'],
  windSpeed: ['5 km/h winds with light breezes', '10 km/h winds with occasional gusts', '15 km/h winds with moderate breezes', '20 km/h winds with strong gusts', '25 km/h winds with sustained breezes']
};

function createForecast() {
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
        forecast.push(`${db[key][index]}.\n`)
        break;

      default:
        break;
    }
  }

  return forecast.join(' ');
}

function formatForecast() {

  /*
   '   __________  ______   _       __           __  __             '
   '  / ____/ __ \/_  __/  | |     / /__  ____ _/ /_/ /_  ___  _____'
   ' / / __/ /_/ / / /     | | /| / / _ \/ __ `/ __/ __ \/ _ \/ ___/'
   '/ /_/ / ____/ / /      | |/ |/ /  __/ /_/ / /_/ / / /  __/ /    '
   '\____/_/     /_/       |__/|__/\___/\__,_/\__/_/ /_/\___/_/     '
  */

  const asciiArt = `\n   __________  ______   _       __           __  __             \n  / ____/ __ \\/_  __/  | |     / /__  ____ _/ /_/ /_  ___  _____\n / / __/ /_/ / / /     | | /| / / _ \\/ __ \`/ __/ __ \\/ _ \\/ ___/\n/ /_/ / ____/ / /      | |/ |/ /  __/ /_/ / /_/ / / /  __/ /    \n\\____/_/     /_/       |__/|__/\\___/\\__,_/\\__/_/ /_/\\___/_/     \n\n`;
  const forecast = createForecast();

  return asciiArt + forecast;
}

console.log(formatForecast())
