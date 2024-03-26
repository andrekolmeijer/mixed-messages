const db = {
  cloudCoverage: ['clear skies with minimal cloud cover', 'partly cloudy with scattered clouds', 'mostly cloudy with occasional breaks of sunshine', 'overcast with thick cloud cover', 'cloudy with a chance of showers'],
  temperature: ['15°C with a cool breeze', '20°C with a mild breeze', '25°C with comfortable temperatures', '30°C with a heatwave warning', '35°C with scorching temperatures'],
  windSpeed: ['5 km/h winds with light breezes', '10 km/h winds with occasional gusts', '15 km/h winds with moderate breezes', '20 km/h winds with strong gusts', '25 km/h winds with sustained breezes']
};

export function wrapText(text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (let word of words) {
    if ((currentLine + word).length > maxWidth) {
      lines.push(currentLine.trim());
      currentLine = '';
    }
    currentLine += word + ' ';
  }

  if (currentLine.trim() !== '') {
    lines.push(currentLine.trim());
  }

  return lines.join('\n');
}

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
