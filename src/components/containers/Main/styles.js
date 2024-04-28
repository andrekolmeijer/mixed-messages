import { useMediaQuery } from "../../../wrappers/index.js";
import { styleSheet } from "../../../lib/StyleSheets.js";

const { md, lg, add } = useMediaQuery();

const styles = () => {
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
  backdrop.style.backgroundImage = 'url(src/assets/images/hexagon-grid.svg)';
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

  function handler() {
    if (md.matches) {
      container.style.paddingLeft = '3.5rem';
      container.style.paddingRight = '3.5rem';

      backdrop.style.opacity = '1';

      main.style.flexDirection = 'row';
      main.style.gap = '3.5rem';

      if (lg.matches) {
        container.style.paddingLeft = '7rem';
        container.style.paddingRight = '7rem';

        // main.style.gap = '7rem';
      }
    } else {
      container.style.paddingLeft = '1rem';
      container.style.paddingRight = '1rem';

      backdrop.style.opacity = '.5';

      main.style.flexDirection = 'column';
      main.style.gap = '2rem';
    }
  }

  add(md, handler);
  add(lg, handler);

  handler();
};

export default styles;
