import { createElement, createForecast, wrapText } from "./utilities/index.js";
import { useCopyToClipboard } from "./wrappers/useCopyToClipboard.js";
import { applyStyles } from "./styles/applyStyles.js";
import { useDataStore } from "./stores/DataStore.js";

import {
  ArrowUpRight,
  RocketLaunch,
  CommandLine,
  ClipboardDocument,
  NodejsLight,
  GitHub,
  Twitter,
  LinkedIn
} from "./components/icons/index.js";

const copyToClipboard = useCopyToClipboard();
const { author } = useDataStore();

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

function formatForecast() {
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

function initialForecast() {
  formatForecast()

  let innerText = document.getElementById('output2').innerText;
  while (innerText.includes('clear') || innerText.includes('showers')) {
    formatForecast()
    innerText = document.getElementById('output2').innerText;
  }
}

function copyForecast() {
  const toCopy = document.getElementById('output1').innerText;
  const toCopy2 = document.getElementById('output2').innerText;

  copyToClipboard(toCopy + toCopy2);
}

function formatDocument() {
  const header = createElement('header');
  const nav = createElement('nav');
  const div = createElement('div', 'id', 'div');
  const a = createElement('a', 'href', '/');
  const div2 = createElement('div', 'id', 'div2');
  const ul = createElement('ul');
  const li = createElement('li');
  const a2 = createElement('a', 'href', 'https://github.com/andrekolmeijer/mixed-messages#readme');
  const ul2 = createElement('ul', 'id', 'ul2');
  const li2 = createElement('li', 'id', 'li2');
  const a3 = createElement('a', 'href', 'https://github.com/andrekolmeijer/mixed-messages', 'title', 'GitHub repository');
  const container = createElement('div', 'id', 'container');
  const backdrop = createElement('div', 'id', 'backdrop');
  const main = createElement('main');
  const section = createElement('section', 'id', 'section-one');
  const div3 = createElement('div', 'id', 'div3');
  const heading = createElement('h1');
  const paragraph = createElement('p');
  const div4 = createElement('div', 'id', 'div4');
  const button = createElement('a', 'id', 'button', 'type', 'button');
  const small = createElement('small');
  const small2 = createElement('small');
  const section2 = createElement('section', 'id', 'section-two');
  const div5 = createElement('div', 'id', 'div5');
  const console1 = createElement('div', 'id', 'console1');
  const span = createElement('span');
  const console2 = createElement('div', 'id', 'console2');
  const pre = createElement('pre', 'id', 'pre');
  const code = createElement('code');
  const span2 = createElement('span', 'id', 'output1');
  const span3 = createElement('span', 'id', 'output2');
  const div6 = createElement('div', 'id', 'div6');
  const button2 = createElement('a', 'id', 'button2', 'type', 'button');
  const paragraph2 = createElement('p');
  const footer = createElement('footer');
  const ul3 = createElement('ul', 'id', 'ul3');
  const li3 = createElement('li', 'id', 'li3');
  const a4 = createElement('a', 'href', 'https://nodejs.org');
  const div7 = createElement('div', 'id', 'div7');
  const a5 = createElement('a', 'href', 'https://andrekolmeijer.nl');
  const ul4 = createElement('ul', 'id', 'ul4');
  const li4 = createElement('li', 'id', 'li4');
  const a6 = createElement('a', 'href', 'https://github.com/andrekolmeijer', 'title', 'GitHub profile');
  const li5 = createElement('li', 'id', 'li5');
  const a7 = createElement('a', 'href', 'https://x.com/andrekolmeijer', 'title', 'X/Twitter profile');
  const li6 = createElement('li', 'id', 'li6');
  const a8 = createElement('a', 'href', 'https://linkedin.com/in/andrekolmeijer', 'title', 'LinkedIn profile');

  a.innerHTML = '<span>GPT</span> Weather';
  a2.innerHTML = `<span>About</span> ${ArrowUpRight}`;
  a3.innerHTML = `${GitHub}`;
  heading.textContent = 'Predict Today\'s Weather';
  paragraph.innerHTML = 'GPT Weather is a Node.js&reg; console app that generates random weather forecasts each time the program runs. The random pieces of data were generated by ChatGPT 3.5.';
  button.innerHTML = `Run GPT Weather ${RocketLaunch}`;
  small.innerHTML = 'Runs a script <span>modified</span> for the browser. Open the browser console to view and reload to run the original.';
  small2.innerHTML = 'Want to learn more? Visit the <a href="https://github.com/andrekolmeijer/mixed-messages">GitHub repo</a> for details.';
  span.innerHTML = `${CommandLine} Console`;
  button2.innerHTML = `${ClipboardDocument} Copy to clipboard`;
  paragraph2.innerHTML = 'Learn how the color changes by checking out the <a href="https://github.com/andrekolmeijer/mixed-messages/blob/master/src/main.js">source code</a>.';
  a4.innerHTML = `<span>Design by</span> ${NodejsLight}`;
  a5.innerHTML = `<span>${author.name}</span>`;
  a6.innerHTML = `<span>${GitHub}</span>`;
  a7.innerHTML = `<span>${Twitter}</span>`;
  a8.innerHTML = `<span>${LinkedIn}</span>`;

  document.getElementById('app').appendChild(header);
  document.querySelector('header').appendChild(nav);
  document.querySelector('nav').appendChild(div);
  document.getElementById('div').appendChild(a);
  document.querySelector('nav').appendChild(div2);
  document.getElementById('div2').appendChild(ul);
  document.querySelector('ul').appendChild(li);
  document.querySelector('li').appendChild(a2);
  document.getElementById('div2').appendChild(ul2);
  document.getElementById('ul2').appendChild(li2);
  document.getElementById('li2').appendChild(a3);
  document.getElementById('app').appendChild(container);
  document.getElementById('container').appendChild(backdrop);
  document.getElementById('container').appendChild(main);
  document.querySelector('main').appendChild(section);
  document.getElementById('section-one').appendChild(div3);
  document.getElementById('div3').appendChild(heading);
  document.getElementById('div3').appendChild(paragraph);
  document.getElementById('section-one').appendChild(div4);
  document.getElementById('div4').appendChild(button);
  document.getElementById('div4').appendChild(small);
  document.getElementById('div4').appendChild(small2);
  document.querySelector('main').appendChild(section2);
  document.getElementById('section-two').appendChild(div5);
  document.getElementById('div5').appendChild(console1);
  document.getElementById('console1').appendChild(span);
  document.getElementById('div5').appendChild(console2);
  document.getElementById('console2').appendChild(pre);
  document.getElementById('pre').appendChild(code);
  document.querySelector('code').appendChild(span2);
  document.querySelector('code').appendChild(span3);
  document.getElementById('console2').appendChild(div6);
  document.getElementById('div6').appendChild(button2);
  document.getElementById('section-two').appendChild(paragraph2);
  document.getElementById('app').appendChild(footer);
  document.querySelector('footer').appendChild(ul3);
  document.getElementById('ul3').appendChild(li3);
  document.getElementById('li3').appendChild(a4);
  document.querySelector('footer').appendChild(div7);
  document.getElementById('div7').appendChild(a5);
  document.getElementById('div7').appendChild(ul4);
  document.getElementById('ul4').appendChild(li4);
  document.getElementById('li4').appendChild(a6);
  document.getElementById('ul4').appendChild(li5);
  document.getElementById('li5').appendChild(a7);
  document.getElementById('ul4').appendChild(li6);
  document.getElementById('li6').appendChild(a8);

  button.onclick = formatForecast;
  button2.onclick = copyForecast;

  initialForecast()
  applyStyles()
}

formatDocument()
