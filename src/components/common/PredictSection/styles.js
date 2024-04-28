import { useMediaQuery } from "../../../wrappers/index.js";
import { base } from "../../../lib/StyleSheets.js";

const { md, add } = useMediaQuery();

const styles = () => {
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

  base.insertRule(buttonBefore);
  base.insertRule(buttonAfter);

  const svg = button.querySelector('svg');
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

  const a = document.getElementById('small2').querySelector('a');
  a.style.fontWeight = '500';

  function handler() {
    if (md.matches) {
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
    } else {
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
    }
  }

  add(md, handler);

  handler();
};

export default styles;
