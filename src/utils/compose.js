const compose = (...funcs) => comp => {
  return funcs.reduceRight((wrapper, f) => f(wrapper), comp);
};

export default compose;
