import { useMediaQuery } from "../../../wrappers/index.js";

const { md, add } = useMediaQuery();

const styles = () => {
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

  const as4 = footer.querySelectorAll('a');
  as4.forEach(a => {
    a.style.display = 'inline-flex';
    a.style.alignItems = 'center';
    a.style.gap = '.5rem';
    a.style.borderRadius = '.25rem';
    a.style.padding = '.5rem .75rem';
    a.style.whiteSpace = 'nowrap';
  });

  const spans3 = footer.querySelectorAll('span');
  spans3.forEach(span => {
    span.style.fontSize = '.875rem';
    span.style.lineHeight = '1.25rem';
    span.style.color = '#fff';
  });

  const svgs3 = ul3.querySelectorAll('svg');
  svgs3.forEach(svg => {
    svg.style.width = '67px'; // 80px
    svg.style.height = '20px'; // 24px
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

  const svgs4 = ul4.querySelectorAll('svg');
  svgs4.forEach(svg => {
    svg.style.width = '20px';
    svg.style.height = '20px';
  });

  function handler() {
    if (md.matches) {
      footer.style.flexDirection = 'row';
      footer.style.paddingTop = '1.25rem';
      footer.style.paddingBottom = '1.25rem';

      div7.style.flexDirection = 'row';
    } else {
      footer.style.flexDirection = 'column';
      footer.style.paddingTop = '1rem';
      footer.style.paddingBottom = '1rem';

      div7.style.flexDirection = 'column';
    }
  }

  add(md, handler);

  handler();
};

export default styles;
