// @flow
import { connect } from 'react-redux';
import { subCounter } from '../actions';
import About from '../components/about/about';

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
  decrementCounter: count => dispatch(subCounter(count)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
