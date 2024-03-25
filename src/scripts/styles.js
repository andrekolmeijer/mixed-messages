export function applyStyles() {
  const allEl = document.querySelectorAll('*');
  allEl.forEach((el) => {
    el.style.boxSizing = 'border-box';
    el.style.margin = '0';
    el.style.padding = '0';
    el.style.minWidth = '0';
  });

  const htmlEl = document.querySelector('html');
  htmlEl.style.fontFamily = '"Roboto", sans-serif';

  const hEl = document.querySelector('h1');
  hEl.style.textAlign = 'center';
  hEl.style.padding = '25px';
  hEl.style.fontSize = '30px';
  hEl.style.lineHeight = '36px';
  hEl.style.fontWeight = '700';

  const divEl = document.getElementById('console');
  divEl.style.margin = '0 auto';
  divEl.style.padding = '9px';
  divEl.style.color = '#C5C5C5';
  divEl.style.backgroundColor = '#1E1E1E';
  divEl.style.width = '1035px';
  divEl.style.height = '635px'
  divEl.style.borderRadius = '10px';
  divEl.style.boxShadow = '0 25px 50px -12px rgb(0 0 0 / 0.25)';

  const preEls = document.querySelectorAll('pre');
  preEls.forEach(preEl => {
    preEl.style.fontFamily = '"MonoLisa", sans-serif';
    preEl.style.fontSize = '12px'
  });
}
