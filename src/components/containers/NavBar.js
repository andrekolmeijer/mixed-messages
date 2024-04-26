import { createElement } from "../../utilities/index.js";
import { useDataStore } from "../../stores/DataStore.js";
import { ArrowUpRight, GitHub } from "../icons/index.js";

const { url } = useDataStore();

const NavBar = () => {
  const header = createElement('header');
  const nav = createElement('nav');
  const div = createElement('div', 'id', 'div');
  const a = createElement('a', 'href', '/');
  const div2 = createElement('div', 'id', 'div2');
  const ul = createElement('ul');
  const li = createElement('li');
  const a2 = createElement('a', 'href', `${url['github-repo']}#readme`);
  const ul2 = createElement('ul', 'id', 'ul2');
  const li2 = createElement('li', 'id', 'li2');
  const a3 = createElement('a', 'href', `${url['github-repo']}`, 'title', 'GitHub repo');

  a.innerHTML = '<span>GPT</span> Weather';
  a2.innerHTML = `<span>About</span> ${ArrowUpRight}`;
  a3.innerHTML = `${GitHub}`;

  document.getElementById('app').appendChild(header);
  document.querySelector('header').appendChild(nav);
  document.querySelector('nav').appendChild(div);
  document.getElementById('div').appendChild(a);
  document.querySelector('nav').appendChild(div2);
  document.getElementById('div2').appendChild(ul);
  document.querySelector('ul').appendChild(li);
  document.querySelector('li').appendChild(a2);
  document.getElementById('div2').appendChild(ul2);
  document.getElementById('ul2').appendChild(li2);
  document.getElementById('li2').appendChild(a3);
};

export default NavBar;
