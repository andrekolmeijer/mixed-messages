import { createForecast } from "./util/createForecast.js";
import { wrapText } from "./util/wrapText.js";
import { useCopyToClipboard } from "./util/utils.js";
import { createElement } from "./util/createElement.js";
import { applyStyles } from "./styles/applyStyles.js";

const copyToClipboard = useCopyToClipboard();

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
  const a8 = createElement('a', 'href', 'https://linkedin.com/in/andrekolmeijer', 'title', 'Linkedin profile');

  a.innerHTML = '<span>GPT</span> Weather';
  a2.innerHTML = '<span>About</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="NavItem_icon__GHTPH"><path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd"></path></svg>';
  a3.innerHTML = '<svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.25C5.16562 1.25 1.25 5.16562 1.25 10C1.25 13.8719 3.75469 17.1422 7.23281 18.3016C7.67031 18.3781 7.83437 18.1156 7.83437 17.8859C7.83437 17.6781 7.82344 16.9891 7.82344 16.2563C5.625 16.6609 5.05625 15.7203 4.88125 15.2281C4.78281 14.9766 4.35625 14.2 3.98438 13.9922C3.67812 13.8281 3.24063 13.4234 3.97344 13.4125C4.6625 13.4016 5.15469 14.0469 5.31875 14.3094C6.10625 15.6328 7.36406 15.2609 7.86719 15.0312C7.94375 14.4625 8.17344 14.0797 8.425 13.8609C6.47813 13.6422 4.44375 12.8875 4.44375 9.54062C4.44375 8.58906 4.78281 7.80156 5.34062 7.18906C5.25313 6.97031 4.94687 6.07344 5.42812 4.87031C5.42812 4.87031 6.16094 4.64063 7.83437 5.76719C8.53438 5.57031 9.27813 5.47187 10.0219 5.47187C10.7656 5.47187 11.5094 5.57031 12.2094 5.76719C13.8828 4.62969 14.6156 4.87031 14.6156 4.87031C15.0969 6.07344 14.7906 6.97031 14.7031 7.18906C15.2609 7.80156 15.6 8.57812 15.6 9.54062C15.6 12.8984 13.5547 13.6422 11.6078 13.8609C11.925 14.1344 12.1984 14.6594 12.1984 15.4797C12.1984 16.65 12.1875 17.5906 12.1875 17.8859C12.1875 18.1156 12.3516 18.3891 12.7891 18.3016C14.5261 17.7152 16.0355 16.5988 17.1048 15.1096C18.1741 13.6204 18.7495 11.8333 18.75 10C18.75 5.16562 14.8344 1.25 10 1.25Z"></path></svg>';
  heading.textContent = 'Predict Today\'s Weather';
  paragraph.innerHTML = 'GPT Weather is a Node.js&reg; console app that generates random weather forecasts each time the program runs. The random pieces of data were generated by ChatGPT 3.5.';
  button.innerHTML = 'Run GPT Weather <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg>';
  small.innerHTML = 'Runs a script <span>modified</span> for the browser. Open the browser console to view and reload to run the original.';
  small2.innerHTML = 'Want to learn more? Visit the <a href="https://github.com/andrekolmeijer/mixed-messages">GitHub repo</a> for details.';
  span.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" /></svg> Console';
  button2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" /></svg> Copy to clipboard';
  paragraph2.innerHTML = 'Learn how the color changes by checking out the <a href="https://github.com/andrekolmeijer/mixed-messages/blob/master/src/main.js">source code</a>.';
  a4.innerHTML = '<span>Design from Nodejs.org</span>';
  a5.innerHTML = '<span>André Kolmeijer</span>';
  a6.innerHTML = '<span><svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.25C5.16562 1.25 1.25 5.16562 1.25 10C1.25 13.8719 3.75469 17.1422 7.23281 18.3016C7.67031 18.3781 7.83437 18.1156 7.83437 17.8859C7.83437 17.6781 7.82344 16.9891 7.82344 16.2563C5.625 16.6609 5.05625 15.7203 4.88125 15.2281C4.78281 14.9766 4.35625 14.2 3.98438 13.9922C3.67812 13.8281 3.24063 13.4234 3.97344 13.4125C4.6625 13.4016 5.15469 14.0469 5.31875 14.3094C6.10625 15.6328 7.36406 15.2609 7.86719 15.0312C7.94375 14.4625 8.17344 14.0797 8.425 13.8609C6.47813 13.6422 4.44375 12.8875 4.44375 9.54062C4.44375 8.58906 4.78281 7.80156 5.34062 7.18906C5.25313 6.97031 4.94687 6.07344 5.42812 4.87031C5.42812 4.87031 6.16094 4.64063 7.83437 5.76719C8.53438 5.57031 9.27813 5.47187 10.0219 5.47187C10.7656 5.47187 11.5094 5.57031 12.2094 5.76719C13.8828 4.62969 14.6156 4.87031 14.6156 4.87031C15.0969 6.07344 14.7906 6.97031 14.7031 7.18906C15.2609 7.80156 15.6 8.57812 15.6 9.54062C15.6 12.8984 13.5547 13.6422 11.6078 13.8609C11.925 14.1344 12.1984 14.6594 12.1984 15.4797C12.1984 16.65 12.1875 17.5906 12.1875 17.8859C12.1875 18.1156 12.3516 18.3891 12.7891 18.3016C14.5261 17.7152 16.0355 16.5988 17.1048 15.1096C18.1741 13.6204 18.7495 11.8333 18.75 10C18.75 5.16562 14.8344 1.25 10 1.25Z"></path></svg></span>';
  a7.innerHTML = '<span><svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="https://twitter.com/nodejs"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg></span>';
  a8.innerHTML = '<span><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="https://www.linkedin.com/company/node-js"><g id="Social Icon"><rect id="bg" width="20" height="20" rx="10" fill="#1275B1"></rect><g id="linked_in"><path d="M7.58468 5.49444C7.58468 6.16198 7.00608 6.70312 6.29234 6.70312C5.5786 6.70312 5 6.16198 5 5.49444C5 4.82691 5.5786 4.28577 6.29234 4.28577C7.00608 4.28577 7.58468 4.82691 7.58468 5.49444Z" fill="white"></path><path d="M5.17673 7.59155H7.38586V14.2858H5.17673V7.59155Z" fill="white"></path><path d="M10.9426 7.59155H8.73343V14.2858H10.9426C10.9426 14.2858 10.9426 12.1783 10.9426 10.8607C10.9426 10.0698 11.2126 9.27544 12.2901 9.27544C13.5079 9.27544 13.5005 10.3104 13.4949 11.1123C13.4874 12.1604 13.5052 13.2299 13.5052 14.2858H15.7143V10.7527C15.6956 8.49675 15.1077 7.45725 13.1738 7.45725C12.0253 7.45725 11.3134 7.97867 10.9426 8.4504V7.59155Z" fill="white"></path></g></g></svg></span>';

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
