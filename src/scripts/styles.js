async function loadFonts() {
  const plexMonoRegular = new FontFace('IBM Plex Mono', 'url(src/assets/fonts/IBMPlexMono-Regular.woff2) format(woff2)', {
    weight: 400,
    style: 'normal',
    display: 'swap'
  });
  const plexMonoSemiBold = new FontFace('IBM Plex Mono', 'url(src/assets/fonts/IBMPlexMono-SemiBold.woff2) format(woff2)', {
    weight: 600,
    style: 'normal',
    display: 'swap'
  });
  const openSansVariable = new FontFace('Open Sans', 'url(src/assets/fonts/OpenSans-VariableFont.woff2) format("woff2-variations")', {
    weight: '300 800',
    style: 'normal',
    display: 'swap'
  });

  await plexMonoRegular.load();
  await plexMonoSemiBold.load();
  await openSansVariable.load();

  document.fonts.add(plexMonoRegular);
  document.fonts.add(plexMonoSemiBold);
  document.fonts.add(openSansVariable);
}

export function applyStyles() {

  loadFonts()

  const cssReset = new CSSStyleSheet();
  const styleSheet = new CSSStyleSheet();

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

  const htmlBody = `
    html, body {
      width: 100%;
      height: 100%;
    }
  `;

  styleSheet.insertRule(htmlBody);

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

  const nav = document.querySelector('header').querySelector('nav');
  nav.style.display = 'flex';
  nav.style.height = '4rem';
  nav.style.flexDirection = 'row';
  nav.style.alignItems = 'center';
  nav.style.gap = '2rem';
  nav.style.borderBottom = '1px solid rgb(44 52 55 / 1)';
  nav.style.backgroundColor = '#0D121C';
  nav.style.padding = '0 1rem';

  const div = document.getElementById('div');
  div.style.display = 'flex';
  div.style.height = '100%';
  div.style.alignItems = 'center';
  div.style.border = '0 solid rgb(44 52 55 / 1';
  div.style.padding = '0';
  div.style.flexShrink = '0';
  div.style.fontFamily = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'

  const a = document.getElementById('div').querySelector('a');
  a.style.flex = '1 1 0%';
  a.style.fontFamily = 'IBM Plex Mono';
  a.style.fontWeight = '600';
  a.style.color = '#E9EDF0';
  a.style.fontSize = '1.125rem';
  a.style.lineHeight = '1.75rem';

  const span = document.getElementById('div').querySelector('span');
  span.style.color = '#84BA64'; // #84BA64 / #638B4B

  const div2 = document.getElementById('div2');
  div2.style.display = 'flex';
  div2.style.flexDirection = 'row';
  div2.style.alignItems = 'center';
  div2.style.flex = '1 1 0%';

  const ul = document.querySelector('ul');
  ul.style.display = 'flex';
  ul.style.gap = '.25rem';
  ul.style.flex = '1 1 0%';
  ul.style.flexDirection = 'row';

  const lis = document.querySelector('ul').querySelectorAll('li');
  lis.forEach(li => {
    li.style.display = 'none'; // flex
    li.style.alignItems = 'center';
    li.style.marginTop = '3px';
  })

  const as = document.querySelector('ul').querySelectorAll('a');
  as.forEach(a => {
    a.style.display = 'inline-flex';
    a.style.alignItems = 'center';
    a.style.gap = '.5rem';
    a.style.borderRadius = '.25rem';
    a.style.padding = '.5rem .75rem';
  });

  const spans = document.querySelector('ul').querySelectorAll('span');
  spans.forEach(span => {
    span.style.fontSize = '.875rem';
    // span.style.fontWeight = '500';
    span.style.lineHeight = '1.25rem';
    span.style.color = '#fff';
  });

  const svgs = document.querySelector('ul').querySelectorAll('svg');
  svgs.forEach(svg => {
    svg.style.width = '.75rem';
    svg.style.height = '.75rem';
    svg.style.color = 'rgb(233 237 240 / 1)';
  });

  const ul2 = document.getElementById('ul2');
  ul2.style.display = 'flex';
  ul2.style.alignItems = 'center';
  ul2.style.gap = '.5rem';

  const lis2 = document.getElementById('ul2').querySelectorAll('li');
  lis2.forEach(li => {
    li.style.display = 'flex';
    li.style.alignItems = 'center';
  })

  const as2 = document.getElementById('ul2').querySelectorAll('a');
  as2.forEach(a => {
    a.style.width = '2.25rem';
    a.style.height = '2.25rem';
    a.style.borderRadius = '.375rem';
    a.style.padding = '.5rem';
  });

  const svgs2 = document.getElementById('ul2').querySelectorAll('svg');
  svgs2.forEach(svg => {
    svg.style.width = '20px';
    svg.style.height = '20px';
    svg.style.color = '#d9e1e4'; // fill
  });

  const container = document.getElementById('container');
  container.style.display = 'flex';
  container.style.width = '100%';
  container.style.alignItems = 'center';
  container.style.justifyContent = 'center';
  container.style.padding = '3.5rem 1rem';

  const backdrop = document.getElementById('backdrop');
  backdrop.style.position = 'absolute';
  backdrop.style.left = '0';
  backdrop.style.top = '0';
  backdrop.style.zIndex = '-10';
  backdrop.style.width = '100%';
  backdrop.style.height = '100%';
  backdrop.style.backgroundImage = 'url(src/assets/img/hexagon-grid.svg)';
  backdrop.style.backgroundPosition = '50%';
  backdrop.style.backgroundRepeat = 'no-repeat';
  backdrop.style.opacity = '.5';

  const backdropAfter = `
    #backdrop:after {
      position: absolute;
      inset: 0;
      margin: auto;
      aspect-ratio: 1/1;
      width: 300px;
      border-radius: 9999px;
      background-color: rgb(44 104 44 / 1);
      filter: blur(120px);
      content: "";
    }
  `;

  styleSheet.insertRule(backdropAfter);

  const main = document.querySelector('main');
  main.style.display = 'flex';
  main.style.width = '100%';
  main.style.flexDirection = 'column';
  main.style.alignItems = 'center';
  main.style.justifyContent = 'center';
  main.style.gap = '2rem';

  const as3 = document.querySelector('main').querySelectorAll('a');
  as3.forEach(a => {
    a.style.fontWeight = '600';
  });

  const section = document.getElementById('section-one');
  section.style.display = 'flex';
  section.style.maxWidth = '500px';
  section.style.flex = '1 0';
  section.style.flexDirection = 'column';
  section.style.gap = '2rem';

  const div3 = document.getElementById('div3');
  div3.style.display = 'flex';
  div3.style.maxWidth = '400px';
  div3.style.flexDirection = 'column';
  div3.style.gap = '1rem';

  const heading = document.querySelector('h1');
  heading.style.backgroundImage = 'linear-gradient(180deg, #fff, hsla(0,0%,100%,.8))';
  heading.style.backgroundClip = 'text';
  heading.style.fontWeight = '600';
  heading.style.fontSize = '2.25rem';
  heading.style.lineHeight = '3rem';
  heading.style.letterSpacing = '-.045rem';
  heading.style.webkitTextFillColor = 'transparent';

  const paragraph = document.querySelector('p');
  paragraph.style.fontSize = '1rem';
  paragraph.style.lineHeight = '1.5rem';

  const div4 = document.getElementById('div4');
  div4.style.display = 'flex';
  div4.style.maxWidth = '400px';
  div4.style.flexDirection = 'column';
  div4.style.gap = '1rem';

  const button = document.getElementById('button');
  button.style.webkitUserSelect = 'none';
  button.style.userSelect = 'none';
  button.style.color = '#fff';
  button.style.cursor = 'pointer';
  button.style.position = 'relative';
  button.style.display = 'inline-flex';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'center';
  button.style.gap = '.5rem';
  button.style.padding = '.625rem 1.125rem';
  button.style.fontWeight = '400';
  button.style.borderRadius = '.5rem';
  button.style.borderWidth = '1px';
  button.style.borderColor = 'rgba(65, 126, 56, .3)';
  button.style.backgroundColor = 'rgba(65, 126, 56, .1)';
  button.style.boxShadow = '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, .05)';

  const buttonBefore = `
    #button:before {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      z-index: -10;
      margin-left: auto;
      margin-right: auto;
      height: 100%;
      width: 100%;
      background-image: radial-gradient(8em circle at 50% 10px,#5fa04e,transparent 30%);
      opacity: .3;
      content: "";
    }
  `;
  const buttonAfter = `
    #button:after {
      position: absolute;
      top: -1px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      height: 1px;
      width: 40%;
      background-image: linear-gradient(to right, rgba(65,126,56,0), #417e38, rgba(65,126,56,0));
      content: "";
    }
  `;

  styleSheet.insertRule(buttonBefore);
  styleSheet.insertRule(buttonAfter);

  const svg = document.getElementById('button').querySelector('svg');
  svg.style.width = '1.25rem';
  svg.style.height = '1.25rem';
  svg.style.opacity = '.5';

  const smalls = document.querySelectorAll('small');
  smalls.forEach(small => {
    small.style.textAlign = 'center';
    small.style.fontSize = '.75rem';
    small.style.lineHeight = '1rem';
    small.style.color = '#CBD4D9';
  });

  const span2 = document.querySelector('small').querySelector('span');
  span2.style.fontWeight = '700';

  const section2 = document.getElementById('section-two');
  section2.style.maxWidth = '100%';
  section2.style.flex = '1 1';
  section2.style.display = 'flex';
  section2.style.flexDirection = 'column';
  section2.style.alignItems = 'center';
  section2.style.justifyContent = 'center';
  section2.style.gap = '1rem';

  const div5 = document.getElementById('div5');
  div5.style.width = '100%';
  div5.style.maxWidth = '28rem';
  div5.style.minHeight = '25rem';
  div5.style.display = 'flex';
  div5.style.flexDirection = 'column';

  const console1 = document.getElementById('console1');
  console1.style.borderTopLeftRadius = '.25rem';
  console1.style.borderTopRightRadius = '.25rem';
  console1.style.borderLeftWidth = '1px';
  console1.style.borderRightWidth = '1px';
  console1.style.borderTopWidth = '1px';
  console1.style.borderColor = 'rgb(44 52 55 / 1)';
  console1.style.backgroundColor = 'rgb(13 18 28 / 1)';
  console1.style.padding = '.75rem 1rem';
  console1.style.flexGrow = '0';
  console1.style.display = 'flex';

  const span3 = document.getElementById('console1').querySelector('span');
  span3.style.display = 'inline-flex';
  span3.style.alignItems = 'center';
  span3.style.gap = '.5rem';
  span3.style.fontSize = '.875rem';
  span3.style.lineHeight = '1.25rem';
  span3.style.fontWeight = '600';
  span3.style.color = '#e9edf0';

  const svg2 = document.getElementById('console1').querySelector('svg');
  svg2.style.width = '1.25rem';
  svg2.style.height = '1.25rem';
  svg2.style.color = '#84ba64'; // #84ba64 / #ae5f00

  const console2 = document.getElementById('console2');
  console2.style.width = '100%';
  console2.style.borderBottomLeftRadius = '.25rem';
  console2.style.borderBottomRightRadius = '.25rem';
  console2.style.border = '1px solid rgb(44 52 55 / 1)';
  console2.style.backgroundColor = 'rgb(13 18 28 / 1)';
  console2.style.flexGrow = '1';
  console2.style.display = 'flex';
  console2.style.flexDirection = 'column';

  const pre = document.getElementById('pre');
  pre.style.padding = '1rem';
  pre.style.fontFamily = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  pre.style.flexGrow = '1';
  pre.style.display = 'flex';

  const code = document.querySelector('code');
  code.style.fontFamily = 'IBM Plex Mono';
  code.style.fontSize = '.875rem';
  code.style.lineHeight = '1.15rem';
  code.style.overflowX = 'auto';
  code.style.flexGrow = '1';

  const spans2 = document.querySelector('code').querySelectorAll('span');
  spans2[1].style.color = '#ECEFF4'; // rgb(203 212 217 / 1) / #D8DEE9
  spans2[1].style.lineHeight = '1.375rem';

  const div6 = document.getElementById('div6');
  div6.style.display = 'flex';
  div6.style.alignItems = 'center';
  div6.style.justifyContent = 'end';
  div6.style.borderTop = '1px solid rgb(44 52 55 / 1)';
  div6.style.padding = '.75rem 1rem';
  div6.style.fontSize = '.875rem';
  div6.style.lineHeight = '1.25rem';
  // div6.style.fontWeight = '500';

  const button2 = document.getElementById('button2');
  button2.style.userSelect = 'none';
  button2.style.cursor = 'pointer';
  button2.style.position = 'relative';
  button2.style.display = 'inline-flex';
  button2.style.alignItems = 'center';
  button2.style.justifyContent = 'center';
  button2.style.gap = '.5rem';
  button2.style.padding = '.375rem .75rem';
  button2.style.fontWeight = '400';
  button2.style.borderRadius = '.25rem';
  button2.style.backgroundColor = '#2c3437';
  button2.style.color = '#E9EDF0';

  const svg3 = document.getElementById('button2').querySelector('svg');
  svg3.style.width = '1.25rem';
  svg3.style.height = '1.25rem';

  const paragraph2 = document.getElementById('section-two').querySelector('p');
  paragraph2.style.textAlign = 'center';
  paragraph2.style.fontSize = '.875rem';
  paragraph2.style.lineHeight = '1.25rem';
  paragraph2.style.color = '#E9EDF0';

  const footer = document.querySelector('footer');
  footer.style.display = 'flex';
  footer.style.flexDirection = 'column';
  footer.style.justifyContent = 'space-between';
  footer.style.alignItems = 'center';
  footer.style.gap = '1.5rem';
  footer.style.borderTop = '1px solid rgb(44 52 55 / 1)';
  footer.style.backgroundColor = 'rgb(13 18 28 / 1)';
  footer.style.padding = '1rem 2rem';

  const ul3 = document.getElementById('ul3');
  ul3.style.display = 'flex';
  ul3.style.flexWrap = 'wrap';
  ul3.style.alignContent = 'flex-start';
  ul3.style.alignItems = 'center';
  ul3.style.justifyContent = 'center';
  ul3.style.gap = '.25rem';
  ul3.style.alignSelf = 'stretch';

  const as4 = document.querySelector('footer').querySelectorAll('a');
  as4.forEach(a => {
    a.style.display = 'inline-flex';
    a.style.alignItems = 'center';
    a.style.gap = '.5rem';
    a.style.borderRadius = '.25rem';
    a.style.padding = '.5rem .75rem';
    a.style.whiteSpace = 'nowrap';
  });

  const spans3 = document.querySelector('footer').querySelectorAll('span');
  spans3.forEach(span => {
    span.style.fontSize = '.875rem';
    // span.style.fontWeight = '500';
    span.style.lineHeight = '1.25rem';
    span.style.color = '#fff';
  });

  const svgs3 = document.getElementById('ul3').querySelectorAll('svg');
  svgs3.forEach(svg => {
    svg.style.width = '.875rem';
    svg.style.height = '.875rem';
    svg.style.color = 'rgb(233 237 240 / 1)';
  });

  const div7 = document.getElementById('div7');
  div7.style.display = 'flex';
  div7.style.flexDirection = 'column';
  div7.style.alignItems = 'center';
  div7.style.gap = '.25rem';

  const ul4 = document.getElementById('ul4');
  ul4.style.display = 'flex';
  ul4.style.alignItems = 'center';
  ul4.style.gap = '.25rem';

  const svgs4 = document.getElementById('ul4').querySelectorAll('svg');
  svgs4.forEach(svg => {
    svg.style.width = '20px';
    svg.style.height = '20px';
  });

  const md = window.matchMedia('(min-width: 768px)');
  const lg = window.matchMedia('(min-width: 1024px)');

  function handleChange() {
    if (md.matches) {
      nav.style.paddingLeft = '2rem';
      nav.style.paddingRight = '2rem';

      lis.forEach(li => {
        li.style.display = 'flex';
      })

      container.style.paddingLeft = '3.5rem';
      container.style.paddingRight = '3.5rem';

      backdrop.style.opacity = '1';

      main.style.flexDirection = 'row';
      main.style.gap = '3.5rem';

      heading.style.fontSize = '3rem';
      heading.style.lineHeight = '4rem';
      heading.style.letterSpacing = '-.06rem';

      paragraph.style.fontSize = '1.125rem';
      paragraph.style.lineHeight = '1.75rem';

      button.style.fontWeight = '600';

      smalls.forEach(small => {
        small.style.fontSize = '.875rem';
        small.style.lineHeight = '1.25rem';
      });

      section2.style.maxWidth = '42rem';

      div5.style.maxWidth = '100%';

      footer.style.flexDirection = 'row';
      footer.style.paddingTop = '1.25rem';
      footer.style.paddingBottom = '1.25rem';

      div7.style.flexDirection = 'row';

      if (lg.matches) {
        container.style.paddingLeft = '7rem';
        container.style.paddingRight = '7rem';

        // main.style.gap = '7rem';

        section2.style.maxWidth = '48rem';
      }
    } else {
      nav.style.paddingLeft = '1rem';
      nav.style.paddingRight = '1rem';

      lis.forEach(li => {
        li.style.display = 'none';
      })

      container.style.paddingLeft = '1rem';
      container.style.paddingRight = '1rem';

      backdrop.style.opacity = '.5';

      main.style.flexDirection = 'column';
      main.style.gap = '2rem';

      heading.style.fontSize = '2.25rem';
      heading.style.lineHeight = '3rem';
      heading.style.letterSpacing = '-.045rem';

      paragraph.style.fontSize = '1rem';
      paragraph.style.lineHeight = '1.5rem';

      button.style.fontWeight = '400';

      smalls.forEach(small => {
        small.style.fontSize = '.75rem';
        small.style.lineHeight = '1rem';
      });

      section2.style.maxWidth = '100%';

      div5.style.maxWidth = '28rem';

      footer.style.flexDirection = 'column';
      footer.style.paddingTop = '1rem';
      footer.style.paddingBottom = '1rem';

      div7.style.flexDirection = 'column';
    }
  }

  md.onchange = handleChange;
  lg.onchange = handleChange;

  handleChange();

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

  styleSheet.insertRule(aHover);
  styleSheet.insertRule(aHover2);
  styleSheet.insertRule(buttonFocusHover);
  styleSheet.insertRule(button2FocusHover);

  document.adoptedStyleSheets = [cssReset, styleSheet];

}
