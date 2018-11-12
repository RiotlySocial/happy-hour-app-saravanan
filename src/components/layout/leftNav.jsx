// @flow
import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';

type Props = {
  showLeftNav: boolean,
  toggleLeftNav: (boolean) => void,
};

/**
 * Left Navigation Component
 * @class LeftNav
 * @extends {React.Component<Props>}
 */
class LeftNav extends React.PureComponent<Props> {
  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    const { showLeftNav, toggleLeftNav } = this.props;
    return (
      <Drawer open={showLeftNav} onClose={() => toggleLeftNav(false)}>
        <div className="flex">
          <div className="flex-grow" />
          <Button className="app-menu" onClick={() => toggleLeftNav(false)} color="none" aria-label="Hide Left Nav">
            <Icon fontSize="large">subject</Icon>
          </Button>
        </div>
        <div>
          <List>
            <ListItem button key="Settings">
              <ListItemIcon><Icon>settings</Icon></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button key="Logout">
              <ListItemIcon><Icon>input</Icon></ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    );
  }
}

export default LeftNav;
