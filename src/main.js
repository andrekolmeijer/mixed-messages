import { createElement, setForecast } from "./utilities/index.js";
import { applyStyles } from "./styles/applyStyles.js";

import { NavBar, PredictSection, ConsoleSection, Footer } from "./components/index.js";

function formatDocument() {

  NavBar();

  const container = createElement('div', 'id', 'container');
  const backdrop = createElement('div', 'id', 'backdrop');
  const main = createElement('main');

  document.getElementById('app').appendChild(container);
  document.getElementById('container').appendChild(backdrop);
  document.getElementById('container').appendChild(main);

  PredictSection();
  ConsoleSection();
  Footer();

  setForecast()
  applyStyles()
}

formatDocument()
