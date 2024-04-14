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

export function useCopyToClipboard() {
  let timerId;

  async function copyText(text) {
    if (await copyToClipboard(text)) {
      const button2 = document.getElementById('button2');
      button2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.25rem; height: 1.25rem;"><path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" /></svg> Copy to clipboard';

      const svg = document.getElementById('button2').querySelector('svg');
      svg.style.color = '#84ba64';

      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        button2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.25rem; height: 1.25rem;"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" /></svg> Copy to clipboard';
      }, 3000);
    }
  }

  return copyText;
}

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

  console.log(copied) // undefined
  setTimeout(() => console.log(copied), 10); // true

  return [copied, copyText];
}

// const [copied, copyToClipboardTest] = useCopyToClipWart();

// console.log(copyToClipboardTest('test')); // fulfilled
// console.log(copied); // undefined
// setTimeout(() => console.log(copied), 10); // undefined
