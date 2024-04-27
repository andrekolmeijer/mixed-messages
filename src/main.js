import { setForecast } from "./utilities/index.js";
import { applyStyles } from "./styles/applyStyles.js";

import NavBar from "./components/containers/NavBar.js";
import Main from "./components/containers/Main.js";
import Footer from "./components/containers/Footer.js";

function formatDocument() {

  NavBar();
  Main();
  Footer();

  setForecast()
  applyStyles()
}

formatDocument()
