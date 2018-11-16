// @flow

/**
 * Debounce functions to avoid multiple calls
 * @param  {Function} fn function to be debounced
 * @param  {number} delay no of milliseconds for debouncing
 * @returns {void}
 */
export default function debounce(fn, delay) {
  let timer = null;
  return () => {
    const context = this; 
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}
