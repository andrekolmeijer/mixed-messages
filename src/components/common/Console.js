import { createElement } from "../../utilities/index.js";
import { forecast } from "../../lib/forecast.js";
import { useCopyToClipboard } from "../../wrappers/index.js";

import { CommandLine, ClipboardDocument } from "../icons/index.js";

const copyToClipboard = useCopyToClipboard();

function setForecast() {
  forecast();

  let innerText = document.getElementById('output2').innerText;
  while (innerText.includes('clear') || innerText.includes('showers')) {
    forecast();
    innerText = document.getElementById('output2').innerText;
  }
}

function copyForecast() {
  const output1 = document.getElementById('output1').innerText;
  const output2 = document.getElementById('output2').innerText;

  copyToClipboard(output1 + output2);
}

const Console = () => {
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

  span.innerHTML = `${CommandLine} Console`;
  button2.innerHTML = `${ClipboardDocument} Copy to clipboard`;

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

  button2.onclick = copyForecast;

  setForecast();
};

export default Console;
