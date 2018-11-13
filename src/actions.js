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
   * @param {Object} user user object
   * @return {Object} Redux action.
   */
export const login = (user: Object) => ({
  type: 'LOGIN',
  user,
});
/**
   * @return {Object} Redux action.
   */
export const logout = () => ({
  type: 'LOGOUT',

});
