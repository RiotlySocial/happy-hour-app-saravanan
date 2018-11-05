// @flow
import { connect } from 'react-redux';
import { login, logout } from '../actions';
import App from './App';
import { login as authLogin, logout as authLogout } from '../utils/auth';

/**
   * @param {Object} state Current app state.
   * @return {Object} The props to be transferred to this container.
   */
const mapStateToProps = state => ({ hasAuth: state.hasAuth });

/**
   * @param {Redux.dispatch} dispatch Dispatch function to sent an action to the Redux state reducer
   * @return {Object} The props to be transferred to this container.
   */
const mapDispatchToProps = dispatch => ({
  loginUser: () => {
    authLogin().then(() => dispatch(login(Math.random().toString(36).substring(7))));
  },
  logoutUser: () => { authLogout().then(() => dispatch(logout())); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
