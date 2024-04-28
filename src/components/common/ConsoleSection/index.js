import { createElement } from "../../../utilities/createElement.js";
import { useDataStore } from "../../../stores/DataStore.js";

import Console from "../Console/index.js";

import styles from "./styles.js";

const { url } = useDataStore();

const ConsoleSection = () => {
  const section2 = createElement('section', 'id', 'section-two');
  const paragraph2 = createElement('p');

  paragraph2.innerHTML = `Learn how the color changes by checking out the <a href="${url['github-repo']}/blob/master/src/main.js">source code</a>.`;

  document.querySelector('main').appendChild(section2);

  Console();

  document.getElementById('section-two').appendChild(paragraph2);

  styles();
};

export default ConsoleSection;
