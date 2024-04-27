import { copyForecast, createElement } from "../../utilities/index.js";
import { useDataStore } from "../../stores/DataStore.js";
import { CommandLine, ClipboardDocument } from "../icons/index.js";

const { url } = useDataStore();

const ConsoleSection = () => {
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

  span.innerHTML = `${CommandLine} Console`;
  button2.innerHTML = `${ClipboardDocument} Copy to clipboard`;
  paragraph2.innerHTML = `Learn how the color changes by checking out the <a href="${url['github-repo']}/blob/master/src/main.js">source code</a>.`;

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

  button2.onclick = copyForecast;
};

export default ConsoleSection;
