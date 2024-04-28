import { base } from "../lib/StyleSheets.js";

const htmlBody = `
  html, body {
    width: 100%;
    height: 100%;
  }
`;

base.insertRule(htmlBody);

const html = document.querySelector('html');
html.style.colorScheme = 'dark';
html.style.lineHeight = '1.5';
html.style.textSizeAdjust = '100%';
html.style.tabSize = '4';
html.style.fontFamily = 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
html.style.fontOpticalSizing = 'auto';
html.style.fontFeatureSettings = 'normal';
html.style.fontVariationSettings = 'normal';
html.style.webkitTapHighlightColor = 'transparent';

const body = document.querySelector('body');
body.style.scrollBehavior = 'smooth';
body.style.backgroundColor = '#0e121c';
body.style.fontFamily = 'Open Sans';
body.style.color = '#fff';

const app = document.getElementById('app');
app.style.display = 'grid';
app.style.width = '100%';
app.style.height = '100%';
app.style.gridTemplateColumns = '1fr';
app.style.gridTemplateRows = 'auto 1fr auto';

const aHover = `
  #ul2 a:hover,
  #ul3 a:hover,
  #div7 a:hover {
    background-color: rgb(44 52 55 / 1);
  }
`;

const aHover2 = `
  main a:hover {
    color: #99cc7d;
  }
`;

const buttonFocusHover = `
  #button:hover,
  #button:focus {
    background-color: rgba(65,126,56,.2) !important;
  }
`;

const button2FocusHover = `
  #button2:hover,
  #button2:focus {
    background-color: rgb(85 96 102 / .6) !important;
  }
`;

base.insertRule(aHover);
base.insertRule(aHover2);
base.insertRule(buttonFocusHover);
base.insertRule(button2FocusHover);

document.adoptedStyleSheets = [...document.adoptedStyleSheets, base];
