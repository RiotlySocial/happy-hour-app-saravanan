// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

type Props = {
  hasAuth: boolean,
  component: any
};
/**
 * Public router class for app
 * @param {Object} props props object for component
 * @returns {React.Fragment}
 */
class PublicRoute extends React.PureComponent<Props> {
  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    const { hasAuth, component: Component, ...rest } = this.props;
    return (<Route
      {...rest}
      component={compProps => <React.Fragment><Component {...compProps} /></React.Fragment>}
    />);
  }
}

/**
 * Map state to props method
 * @param {Object} state state object
 * @returns {void}
 */
const mapStateToProps = state => ({ hasAuth: state.hasAuth });

export default connect(mapStateToProps)(PublicRoute);
