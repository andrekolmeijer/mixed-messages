import { useMediaQuery } from "../../../wrappers/index.js";

const { md, add } = useMediaQuery();

const styles = () => {
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
  div.style.fontFamily = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

  const a = div.querySelector('a');
  a.style.flex = '1 1 0%';
  a.style.fontFamily = 'IBM Plex Mono';
  a.style.fontWeight = '600';
  a.style.color = '#E9EDF0';
  a.style.fontSize = '1.125rem';
  a.style.lineHeight = '1.75rem';

  const span = div.querySelector('span');
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

  const lis = ul.querySelectorAll('li');
  lis.forEach(li => {
    li.style.display = 'none'; // flex
    li.style.alignItems = 'center';
    li.style.marginTop = '3px';
  })

  const as = ul.querySelectorAll('a');
  as.forEach(a => {
    a.style.display = 'inline-flex';
    a.style.alignItems = 'center';
    a.style.gap = '.5rem';
    a.style.borderRadius = '.25rem';
    a.style.padding = '.5rem .75rem';
  });

  const spans = ul.querySelectorAll('span');
  spans.forEach(span => {
    span.style.fontSize = '.875rem';
    span.style.lineHeight = '1.25rem';
    span.style.color = '#fff';
  });

  const svgs = ul.querySelectorAll('svg');
  svgs.forEach(svg => {
    svg.style.width = '.75rem';
    svg.style.height = '.75rem';
    svg.style.color = 'rgb(233 237 240 / 1)';
  });

  const ul2 = document.getElementById('ul2');
  ul2.style.display = 'flex';
  ul2.style.alignItems = 'center';
  ul2.style.gap = '.5rem';

  const lis2 = ul2.querySelectorAll('li');
  lis2.forEach(li => {
    li.style.display = 'flex';
    li.style.alignItems = 'center';
  })

  const as2 = ul2.querySelectorAll('a');
  as2.forEach(a => {
    a.style.width = '2.25rem';
    a.style.height = '2.25rem';
    a.style.borderRadius = '.375rem';
    a.style.padding = '.5rem';
  });

  const svgs2 = ul2.querySelectorAll('svg');
  svgs2.forEach(svg => {
    svg.style.width = '20px';
    svg.style.height = '20px';
    svg.style.color = '#d9e1e4'; // fill
  });

  function handler() {
    if (md.matches) {
      nav.style.paddingLeft = '2rem';
      nav.style.paddingRight = '2rem';

      lis.forEach(li => {
        li.style.display = 'flex';
      })
    } else {
      nav.style.paddingLeft = '1rem';
      nav.style.paddingRight = '1rem';

      lis.forEach(li => {
        li.style.display = 'none';
      })
    }
  }

  add(md, handler);

  handler();
};

export default styles;
