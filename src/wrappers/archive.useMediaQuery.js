// 1. Original Media Query Setup

// Originally I set up one media query containing all alternative styles. However, I
// wanted something reusable and with a fallback.

const md = window.matchMedia('(min-width: 768px)');
const lg = window.matchMedia('(min-width: 1024px)');

function handleChange() {
  if (md.matches) {
    // nav.style.paddingLeft = '2rem';
    // nav.style.paddingRight = '2rem';

    if (lg.matches) {
      // container.style.paddingLeft = '7rem';
      // container.style.paddingRight = '7rem';
    }
  } else {
    // nav.style.paddingLeft = '1rem';
    // nav.style.paddingRight = '1rem';
  }
}

// md.addEventListener('change', handleChange);
// lg.addEventListener('change', handleChange);

md.onchange = handleChange;
lg.onchange = handleChange;

handleChange();


// 2. React Starting Point

// So I studied the Node.js website (https://nodejs.org) and found the code below
// through the Sources tab in the Inspector and used it as a starting point.

'use client';

import { useState, useEffect } from 'react';

const mediaQueryChangeSubscribe = (mq: MediaQueryList, handler: () => void) => {
  if (mq.addEventListener) {
    mq.addEventListener('change', handler);
  } else {
    mq.addListener(handler);
  }
};

const mediaQueryChangeUnsubscribe = (
  mq: MediaQueryList,
  handler: () => void
) => {
  if (mq.removeEventListener) {
    mq.removeEventListener('change', handler);
  } else {
    mq.removeListener(handler);
  }
};

const useMediaQuery = (query: string): boolean | undefined => {
  const [matches, setMatches] = useState<boolean>();

  useEffect(() => {
    if (typeof window?.matchMedia === 'function') {
      const mq = window.matchMedia(query);
      setMatches(mq.matches);

      const handler = (): void => setMatches(mq.matches);
      mediaQueryChangeSubscribe(mq, handler);

      return (): void => mediaQueryChangeUnsubscribe(mq, handler);
    }

    return undefined;
  }, [query]);

  return matches;
};

// export default useMediaQuery;


// 3. Refactor to ES6 Syntax

// I refactored the React code to plain ES6 syntax and removed any TypeScript. Because
// of this I couldn't use React's useState and useEffect hooks. So I tried to work
// around this by introducing the matches variable to store state. Eventually
// I got stuck after trying a bunch of different things.

function mediaQueryChangeSubscribe(mq, handler) {
  if (mq.addEventListener) {
    mq.addEventListener('change', handler);
  } else {
    mq.addListener(handler);
  }
}

function mediaQueryChangeUnsubscribe(mq, handler) {
  if (mq.removeEventListener) {
    mq.removeEventListener('change', handler);
  } else {
    mq.removeListener(handler);
  }
}

function useMediaQuery(query) {
  let matches;

  if (typeof window.matchMedia === 'function') {
    const mq = window.matchMedia(query);
    matches = mq.matches;

    // const handler = () => matches = mq.matches;
    // mediaQueryChangeUnsubscribe(mq, handler);

    // const handler = () => {
    //   console.log('Media query changed');
    // };

    function onChange(handler) {
      mediaQueryChangeSubscribe(mq, handler);
    }
  }

  return [matches, onChange];
}

const [mdTest] = useMediaQuery('(min-width: 768px)');
const [lgTest] = useMediaQuery('(min-width: 1024px)');

const [, onChange] = useMediaQuery();

function createHandler(console1) {
  return () => {
    if (mdTest) {
      console1.style.backgroundColor = 'red';

      if (lgTest) {
        console1.style.backgroundColor = 'blue';
      }
    } else {
      console1.style.backgroundColor = 'green';
    }
  }
}

onChange(createHandler(console1))

createHandler(console1)


// 4. ChatGPT's Proposed Solution

// I asked ChatGPT for a solution and it proposed the code below. Now this looked
// terrible to me. To complicated. Not to speak of code duplication. Doesn't yet
// handle initial state. And it doesn't even do what it's supposed to do.

function useMediaQuery(query) {
  let matches;

  if (typeof window.matchMedia === 'function') {
    const mq = window.matchMedia(query);
    matches = mq.matches;

    return function(handler) {
      mediaQueryChangeSubscribe(mq, () => handler(mq.matches));
    };
  }

  return () => {}; // Return a no-op function if matchMedia is not supported
}

const mdTest = useMediaQuery('(min-width: 768px)');
const lgTest = useMediaQuery('(min-width: 1024px)');

mdTest((matches) => {
  if (matches) {
    console1.style.backgroundColor = 'red';

    if (lgTest.matches) {
      console1.style.backgroundColor = 'blue';
    }
  } else {
    console1.style.backgroundColor = 'green';
  }
});

lgTest((matches) => {
  if (mdTest.matches && matches) {
    console1.style.backgroundColor = 'blue';
  } else if (mdTest.matches && !matches) {
    console1.style.backgroundColor = 'red';
  } else {
    console1.style.backgroundColor = 'green';
  }
});


// 5. Wrapper Example

// So I searched for an example of how to wrap an event listener. Now this made my
// head spin! But I used it to build of off nonetheless.

// https://egghead.io/lessons/javascript-wrap-addeventlistener-in-a-function-for-more-control

let addListener = selector => eventType => listener => {
  let element = document.querySelector(selector)
  element.addEventListener(eventType, listener)

  return () => {
    element.removeEventListener(eventType, listener)
  }
}

let addButtonListener = addListener("#button")
let addButtonClickListener = addButtonListener("click")
let removeButtonClickListener = addButtonClickListener(() => {
  console.log("Button clicked")
})

removeButtonClickListener()


// 6. Final attempt

// It may be hard to imagine, but I started out with the code above and ended up with
// the code below. Crazy thing is that it actually resembles the React code quite a
// bit AND it resembles ChatGPT's proposed solution more then I would have liked.

// It too resulted in duplication and I still couldn't track state (i.e. matches)
// properly. This is when I realized I had to extract it and build something
// that more closely resembled the original implementation.

function mediaQueryChangeSubscribe(mq, handler) {
  if (mq.addEventListener) {
    mq.addEventListener('change', handler);
  } else {
    mq.addListener(handler);
  }
}

function mediaQueryChangeUnsubscribe(mq, handler) {
  if (mq.removeEventListener) {
    mq.removeEventListener('change', handler);
  } else {
    mq.removeListener(handler);
  }
}

function useMediaQuery(query) {
  let matches;

  if (typeof window.matchMedia === 'function') {
    const mq = window.matchMedia(query);
    matches = mq.matches;

    return handler => {
      mediaQueryChangeSubscribe(mq, handler);

      const remove = () => mediaQueryChangeUnsubscribe(mq, handler);

      return [matches, remove];
    }

    return matches;
  }
}

const mdHandler = useMediaQuery('(min-width: 768px)');
const lgHandler = useMediaQuery('(min-width: 1024px)');

const [mdMatches, mdRemove] = mdHandler((mq) => {
  if (mq.matches) {
    console1.style.backgroundColor = 'red';

    if (lgMatches) {
      console1.style.backgroundColor = 'blue';
    }
  } else {
    console1.style.backgroundColor = 'green';
  }
})

const [lgMatches, lgRemove] = lgHandler((mq) => {
  if (mdMatches) {
    console1.style.backgroundColor = 'red';

    if (mq.matches) {
      console1.style.backgroundColor = 'blue';
    }
  } else {
    console1.style.backgroundColor = 'green';
  }
})

function handleChange() {
  if (mdMatches) {
    console1.style.backgroundColor = 'red';

    if (lgMatches) {
      console1.style.backgroundColor = 'blue';
    }
  } else {
    console1.style.backgroundColor = 'green';
  }
}

// mdRemove();
// lgRemove();

handleChange();
