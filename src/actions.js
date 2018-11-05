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

/**
   * @param {string} uid user id
   * @return {Object} Redux action.
   */
export const login = (uid: string) => ({
  type: 'LOGIN',
  uid,
});
/**
   * @return {Object} Redux action.
   */
export const logout = () => ({
  type: 'LOGOUT',

});
