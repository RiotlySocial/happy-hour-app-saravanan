// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/**
 * Public router for app
 * @param {Object} props props object for component
 * @returns {React.Fragment}
 */
export const PublicRoute = (props: any) => {console.log(props);
  const { hasAuth, component: Component, ...rest } = props;
  return (<Route
    {...rest}
    component={componentProps => (hasAuth
      ? <Redirect to="/" />
      : <React.Fragment><Component {...componentProps} /></React.Fragment>)}
  />);
};

/**
 * Map state to props method
 * @param {Object} state state object
 * @returns {void}
 */
// const mapStateToProps = state => ({ hasAuth: state.hasAuth });

export default connect()(PublicRoute);
