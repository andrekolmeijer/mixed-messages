import { cssReset } from "../lib/StyleSheets.js";

const all = `
  *, :after, :before {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
    box-sizing: border-box;
    border: 0 solid;
    min-width: 0;
    padding: 0;
    margin: 0;
  }
`;
const media = `
  audio, canvas, embed, iframe, img, object, svg, video {
    display: block;
    vertical-align: middle;
  }
`;
const strong = `
  b, strong {
    font-weight: 700;
  }
`;
const anchor = `
  a {
    text-decoration: inherit;
    color: #84BA64;
  }
`;
const list = `
  ul, ol {
    list-style: none;
  }
`;

cssReset.insertRule(all);
cssReset.insertRule(media);
cssReset.insertRule(strong);
cssReset.insertRule(anchor);
cssReset.insertRule(list);

document.adoptedStyleSheets = [cssReset];
