import { createElement } from "../../utilities/createElement.js";
import { useDataStore } from "../../stores/DataStore.js";

import NodejsLight from "../icons/logos/NodejsLight.js";
import GitHub from "../icons/socials/GitHub.js";
import Twitter from "../icons/socials/Twitter.js";
import LinkedIn from "../icons/socials/LinkedIn.js";

const { author, provider, url } = useDataStore();

const Footer = () => {
  const footer = createElement('footer');
  const ul3 = createElement('ul', 'id', 'ul3');
  const li3 = createElement('li', 'id', 'li3');
  const a4 = createElement('a', 'href', `${provider.nodejs}`);
  const div7 = createElement('div', 'id', 'div7');
  const a5 = createElement('a', 'href', `${author.website}`);
  const ul4 = createElement('ul', 'id', 'ul4');
  const li4 = createElement('li', 'id', 'li4');
  const a6 = createElement('a', 'href', `${url['github-profile']}`, 'title', 'GitHub profile');
  const li5 = createElement('li', 'id', 'li5');
  const a7 = createElement('a', 'href', `${url['twitter-profile']}`, 'title', 'X/Twitter profile');
  const li6 = createElement('li', 'id', 'li6');
  const a8 = createElement('a', 'href', `${url['linkedin-profile']}`, 'title', 'LinkedIn profile');

  a4.innerHTML = `<span>Design by</span> ${NodejsLight}`;
  a5.innerHTML = `<span>${author.name}</span>`;
  a6.innerHTML = `<span>${GitHub}</span>`;
  a7.innerHTML = `<span>${Twitter}</span>`;
  a8.innerHTML = `<span>${LinkedIn}</span>`;

  document.getElementById('app').appendChild(footer);
  document.querySelector('footer').appendChild(ul3);
  document.getElementById('ul3').appendChild(li3);
  document.getElementById('li3').appendChild(a4);
  document.querySelector('footer').appendChild(div7);
  document.getElementById('div7').appendChild(a5);
  document.getElementById('div7').appendChild(ul4);
  document.getElementById('ul4').appendChild(li4);
  document.getElementById('li4').appendChild(a6);
  document.getElementById('ul4').appendChild(li5);
  document.getElementById('li5').appendChild(a7);
  document.getElementById('ul4').appendChild(li6);
  document.getElementById('li6').appendChild(a8);
};

export default Footer;
