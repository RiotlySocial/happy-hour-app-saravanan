// @flow
import { connect } from 'react-redux';
import { login } from '../actions';
import Home from '../components/home/home';
import { login as authLogin } from '../utils/auth';

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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
