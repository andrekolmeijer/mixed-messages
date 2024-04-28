import { loadFonts } from "./utilities/loadFonts.js";

import NavBar from "./components/containers/NavBar/index.js";
import Main from "./components/containers/Main/index.js";
import Footer from "./components/containers/Footer/index.js";

import "./styles/index.js";

loadFonts();

NavBar();
Main();
Footer();
