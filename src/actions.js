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
    * @param {number} status auth status
   * @return {Object} Redux action.
   */
export const login = (user: Object, status: number) => ({
  type: 'LOGIN',
  user,
  status,
});
/**
  * @param {number} status auth status
   * @return {Object} Redux action.
   */
export const logout = (status: number) => ({
  type: 'LOGOUT',
  status,
});
