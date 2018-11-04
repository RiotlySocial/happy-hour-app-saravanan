// @flow
import { connect } from 'react-redux';
import { addCounter } from '../actions';
import Home from '../components/home/home';

/**
   * @param {Object} state Current app state.
   * @return {Object} The props to be transferred to this container.
   */
const mapStateToProps = state => ({ counter: state.counter });

/**
   * @param {Redux.dispatch} dispatch Dispatch function to sent an action to the Redux state reducer
   * @return {Object} The props to be transferred to this container.
   */
const mapDispatchToProps = dispatch => ({
  incrementCounter: count => dispatch(addCounter(count)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
