import ClipboardDocumentCheck from "../components/icons/heroicons/ClipboardDocumentCheck.js";
import ClipboardDocument from "../components/icons/heroicons/ClipboardDocument.js";

async function copyToClipboard(value) {
  try {
    if (!value || typeof navigator === 'undefined') {
      throw Error('Invalid value or navigator object not available.');
    }

    await navigator.clipboard.writeText(value);
    return true;
  } catch (error) {
    console.error('Error copying text to clipboard:', error.message);
    return false;
  }
}

function useCopyToClipboard() {
  let timerId;

  async function copyText(text) {
    if (await copyToClipboard(text)) {
      const button2 = document.getElementById('button2');
      button2.innerHTML = `${ClipboardDocumentCheck} Copy to clipboard`;

      const svg = document.getElementById('button2').querySelector('svg');
      svg.style.color = '#84ba64';

      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        button2.innerHTML = `${ClipboardDocument} Copy to clipboard`;
      }, 3000);
    }
  }

  return copyText;
}

export default useCopyToClipboard;



// This level of abstraction doesn't work because useCopyToClipWart doesn't wait for
// async copyText to resolve before returning the values. And there is no point in
// making useCopyToClipWart async because you cannot await a return statement.

// This does work in React because of useState combined with useEffect.

function useCopyToClipWart() {
  let copied, timerId;

  async function copyText(text) {
    copied = await copyToClipboard(text);

    if (copied) {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => copied = false, 3000);
    }
  }

  console.log(copied); // undefined
  setTimeout(() => console.log(copied), 10); // true

  return [copied, copyText];
}

// const [copied, copyToClipboardTest] = useCopyToClipWart();

// console.log(copyToClipboardTest('test')); // fulfilled
// console.log(copied); // undefined
// setTimeout(() => console.log(copied), 10); // undefined
