// @flow

/**
   * @param {number} count Counter number
   * @return {Object} Redux action.
   */
export const addCounter = (count: number) => ({
  type: 'ADD_COUNTER',
  count,
});

/**
   * @param {number} count Counter number
   * @return {Object} Redux action.
   */
export const subCounter = (count: number) => ({
  type: 'SUB_COUNTER',
  count,
});
