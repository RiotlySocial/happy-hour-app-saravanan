// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  hasAuth: boolean,
  component: any
};
/**
 * Private router class for app
 * @param {Object} props props object for component
 * @returns {React.Fragment}
 */
class PrivateRoute extends React.PureComponent<Props> {
  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    const { hasAuth, component: Component, ...rest } = this.props;

    return (<Route
      {...rest}
      component={componentProps => (hasAuth
        ? <React.Fragment><Component {...componentProps} /></React.Fragment>
        : <Redirect to="/" />)}
    />);
  }
}

/**
 * Map state to props method
 * @param {Object} state state object
 * @returns {void}
 */
const mapStateToProps = state => ({ hasAuth: state.hasAuth });

export default connect(mapStateToProps)(PrivateRoute);
