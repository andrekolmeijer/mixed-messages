export function createElementHelper(elName, elValue, attrName, attrValue) {
  const el = document.createElement(elName);

  if (attrName && attrValue) el.setAttribute(attrName, attrValue)
  if (elValue) el.textContent = elValue;

  return el;
}
