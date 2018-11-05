// @flow
import { combineReducers } from 'redux';

/**
 * Counter reducer
 * @param {number} state current state object
 * @param {any} action action object with new state variables
 * @returns {any} new state
 */
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return action.counter ? action.count + 1 : state + 1;
    case 'SUB_COUNTER':
      return action.counter ? action.count - 1 : state - 1;
    default:
      return state;
  }
};

/**
 * Auth reducer
 * @param  {boolean} state current state object
 * @param  {any} action action object with new state variables
 * @returns {any} new state
 */
const hasAuth = (state: boolean = false, action) => {
  switch (action.type) {
    case 'LOGIN': return true;
    case 'LOGOUT': return false;
    default: return state;
  }
};
export default combineReducers({
  counter,
  hasAuth,
});
