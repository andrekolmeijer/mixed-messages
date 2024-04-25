import { md, lg } from "../lib/mediaQueries.js";

const mediaQueryChangeSubscribe = (mq, handler) => {
  if (mq.addEventListener) {
    mq.addEventListener('change', handler);
  } else {
    mq.addListener(handler);
  }
};

const mediaQueryChangeUnsubscribe = (mq, handler) => {
  if (mq.removeEventListener) {
    mq.removeEventListener('change', handler);
  } else {
    mq.removeListener(handler);
  }
};

const useMediaQuery = () => ({
  md,
  lg,
  add: mediaQueryChangeSubscribe,
  remove: mediaQueryChangeUnsubscribe
});

export default useMediaQuery;



// The functions below all do the same thing

const useMediaQueryOne = () => {
  return {
    add: mediaQueryChangeSubscribe,
    remove: mediaQueryChangeUnsubscribe
  };
};

// const { add, remove } = useMediaQueryOne();

const useMediaQueryTwo = () => ({
  add: mediaQueryChangeSubscribe,
  remove: mediaQueryChangeUnsubscribe
});

// const { add, remove } = useMediaQueryTwo();

const useMediaQueryThree = () => ([
  mediaQueryChangeSubscribe,
  mediaQueryChangeUnsubscribe
]);

// const [add, remove] = useMediaQueryThree();

const useMediaQueryFour = () => {
  const add = mediaQueryChangeSubscribe;
  const remove = mediaQueryChangeUnsubscribe;

  return { add, remove };
};

// const { add, remove } = useMediaQueryFour();

const useMediaQueryFive = () => {
  const add = mediaQueryChangeSubscribe;
  const remove = mediaQueryChangeUnsubscribe;

  return [add, remove];
};

// const [add, remove] = useMediaQueryFive();
