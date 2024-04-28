import { useMediaQuery } from "../../../wrappers/index.js";

const { md, add } = useMediaQuery();

const styles = () => {
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
  pre.style.fontFamily = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
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
  button2.style.webkitUserSelect = 'none';
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

  function handler() {
    if (md.matches) {
      div5.style.maxWidth = '100%';
    } else {
      div5.style.maxWidth = '28rem';
    }
  }

  add(md, handler);

  handler();
};

export default styles;
