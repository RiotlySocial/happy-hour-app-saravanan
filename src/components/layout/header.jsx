// @flow
import * as React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import LeftNav from './leftNav';
import type { User } from '../../utils/types';

type Props = {
  user: User
};
type State = {
  showLeftNav: boolean
}

/**
 * Header Component
 * @class Header
 * @extends {React.Component<Props, State>}
 */
class Header extends React.Component<Props, State> {
  static defaultProps = {
    user: { name: 'Saravanan', avatar: 'https://i.pinimg.com/236x/79/47/51/79475174c3870e931886bbedc635c64e.jpg' },
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
    const { user } = this.props;
    return (
      <AppBar className="app-bar" color="inherit" position="static">
        <Toolbar>
          <Button className="app-menu" variant="fab" onClick={() => this.toggleLeftNav(true)} color="inherit" aria-label="Show Left Nav">
            <Icon fontSize="large">subject</Icon>
          </Button>
          <LeftNav showLeftNav={showLeftNav} toggleLeftNav={this.toggleLeftNav} />
          <form autoComplete="off">
            <TextField className="searchInput" id="search" margin="normal" type="search" placeholder="Search your team..." />
          </form>
          <div className="flex-grow" />
          <span className="app-signal">
            <Icon fontSize="large" color="secondary" aria-label="Network connection status">signal_cellular_alt</Icon>
          </span>
          <Avatar className="app-avatar" alt={user.name} src={user.avatar} />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
