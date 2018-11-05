// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/**
 * Private router for app
 * @param {Object} props props object for component
 * @returns {React.Fragment}
 */
export const PrivateRoute = (props: any) => {
  console.log(props);
  const { hasAuth, component: Component, ...rest } = props;

  return (<Route
    {...rest}
    component={componentProps => (hasAuth
      ? <React.Fragment><Component {...componentProps} /></React.Fragment>
      : <Redirect to="/" />)}
  />);
};

/**
 * Map state to props method
 * @param {Object} state state object
 * @returns {void}
 */
// const mapStateToProps = state => ({
//   isAuthenticated: !!state.hasAuth,
// });

export default connect()(PrivateRoute);
