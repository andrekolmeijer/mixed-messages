export function createElement(elName, attrName, attrValue, attrName2, attrValue2, attrName3, attrValue3) {
  const el = document.createElement(elName);

  if (attrName && attrValue) el.setAttribute(attrName, attrValue)
  if (attrName2 && attrValue2) el.setAttribute(attrName2, attrValue2)
  if (attrName3 && attrValue3) el.setAttribute(attrName3, attrValue3)

  return el;
}
