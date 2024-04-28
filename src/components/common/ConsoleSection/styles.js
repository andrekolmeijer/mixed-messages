import { useMediaQuery } from "../../../wrappers/index.js";

const { md, lg, add } = useMediaQuery();

const styles = () => {
  const section2 = document.getElementById('section-two');
  section2.style.maxWidth = '100%';
  section2.style.flex = '1 1';
  section2.style.display = 'flex';
  section2.style.flexDirection = 'column';
  section2.style.alignItems = 'center';
  section2.style.justifyContent = 'center';
  section2.style.gap = '1rem';

  const paragraph2 = section2.querySelector('p');
  paragraph2.style.textAlign = 'center';
  paragraph2.style.fontSize = '.875rem';
  paragraph2.style.lineHeight = '1.25rem';
  paragraph2.style.color = '#E9EDF0';

  const a = paragraph2.querySelector('a');
  a.style.fontWeight = '500';

  function handler() {
    if (md.matches) {
      section2.style.maxWidth = '42rem';

      if (lg.matches) {
        section2.style.maxWidth = '48rem';
      }
    } else {
      section2.style.maxWidth = '100%';
    }
  }

  add(md, handler);
  add(lg, handler);

  handler();
};

export default styles;
