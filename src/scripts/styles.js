async function loadFonts() {
  const plexMono = new FontFace('IBM Plex Mono', 'url(src/assets/fonts/IBMPlexMono-Regular.woff2) format(woff2)', {
    weight: 400,
    style: 'normal',
    display: 'swap'
  });
  const openSans = new FontFace('OpenSans', 'url(src/assets/fonts/OpenSans-VariableFont.woff2) format("woff2-variations")', {
    weight: '300 800',
    style: 'normal',
    display: 'swap'
  });

  await plexMono.load();
  await openSans.load();

  document.fonts.add(openSans);
  document.fonts.add(plexMono);
}

export function applyStyles() {

  loadFonts()

  const styleSheet = new CSSStyleSheet();
  const cssRules = `
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      min-width: 0;
    }
  `;
  styleSheet.insertRule(cssRules);
  document.adoptedStyleSheets = [styleSheet];

  const htmlEl = document.querySelector('html');
  htmlEl.style.fontFamily = '"OpenSans", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
  htmlEl.style.fontOpticalSizing = 'auto';
  htmlEl.style.color = '#fff';

  const mainEl = document.querySelector('main');
  mainEl.style.minHeight = '100vh';
  mainEl.style.backgroundColor = '#0e121c';
  mainEl.style.backgroundImage = 'url(src/assets/img/hexagon-grid.svg)';

  const hEl = document.querySelector('h1');
  hEl.style.textAlign = 'center';
  hEl.style.padding = '25px';
  hEl.style.fontSize = '30px';
  hEl.style.lineHeight = '36px';
  hEl.style.fontWeight = '600';

  const divEl = document.getElementById('console');
  divEl.style.margin = '0 auto';
  divEl.style.padding = '9px';
  divEl.style.color = '#D4D4D4';
  divEl.style.backgroundColor = '#1E1E1E';
  divEl.style.width = '1035px';
  divEl.style.height = '635px'
  divEl.style.borderRadius = '10px';
  divEl.style.boxShadow = '0 25px 50px -12px rgb(0 0 0 / 0.25)';

  const preEls = document.querySelectorAll('pre');
  preEls.forEach(preEl => {
    preEl.style.fontFamily = '"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
    preEl.style.fontSize = '12px'
  });
}
