import { createElement } from "../../../utilities/createElement.js";

import ConsoleSection from "../../common/ConsoleSection/index.js";
import PredictSection from "../../common/PredictSection/index.js";

import styles from "./styles.js";

const Main = () => {
  const container = createElement('div', 'id', 'container');
  const backdrop = createElement('div', 'id', 'backdrop');
  const main = createElement('main');

  document.getElementById('app').appendChild(container);
  document.getElementById('container').appendChild(backdrop);
  document.getElementById('container').appendChild(main);

  PredictSection();
  ConsoleSection();

  styles();
};

export default Main;
