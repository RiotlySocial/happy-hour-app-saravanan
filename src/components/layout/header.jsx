// @flow
import * as React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SignalIcon from '@material-ui/icons/SignalCellularAlt';
import SubjectIcon from '@material-ui/icons/Subject';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core';
import LeftNav from './leftNav';
import Search from './search';
import type { User } from '../../utils/types';

type Props = {
  hasAuth: {user: User, status: number},
  logoutUser: () => void,
};
type State = {
  showLeftNav: boolean
}
const styles = theme => ({
  shadow: {
    boxShadow: theme.boxShadow
  }
});
/**
 * Header Component
 * @class Header
 * @extends {React.Component<Props, State>}
 */
class Header extends React.Component<Props, State> {
  static defaultProps = {
    
  };

  /**
   * Creates an instance of Header
   * @param {object} props props for this component.
   */
  constructor(props: Props) {
    super(props);
    this.state = { showLeftNav: false };
  }

  /**
   * Function for toggling left nav
   * @param  {boolean} showLeftNav toggle left nav
   * @returns {void}
   */
  toggleLeftNav = (showLeftNav: boolean) => {
    this.setState({ showLeftNav });
  }

  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    const { showLeftNav } = this.state;
    const { hasAuth, classes, logoutUser } = this.props;
    return (
      <AppBar style={{ paddingTop: 26 }} className="app-bar noShadow" color="inherit" position="static">
        <Toolbar>
          <Button className="app-menu" variant="fab" onClick={() => this.toggleLeftNav(true)} color="inherit" aria-label="Show Left Nav">
            <SubjectIcon fontSize="large" />
          </Button>
          <LeftNav showLeftNav={showLeftNav} toggleLeftNav={this.toggleLeftNav} logoutUser={logoutUser} />
          <form autoComplete="off">
            <Search />
            
          </form>
          <div className="flex-grow" />
          <span className={`${classes.shadow} app-signal`}>
            <SignalIcon fontSize="large" color="secondary" aria-label="Network connection status" />
          </span>
          <Avatar className={`${classes.shadow} app-avatar`} alt={hasAuth.user.first_name} src={hasAuth.user.avatar} />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
