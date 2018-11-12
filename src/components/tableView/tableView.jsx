// @flow
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import type { User } from '../../utils/types';

type Props = {
  user: User,
  table: [User]
};
/**
 * Table View Component
 * @class TableView
 * @extends {React.Component<Props>}
 */
class TableView extends React.PureComponent<Props> {
  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    const { user, table } = this.props;
    return (
      <Dialog backDropStyle={{ backgroundColor: 'transparent' }} className="r-table-view" open="true" aria-labelledby="View members of the table">
        <div>
          <List>
            {[user, ...table].map(member => (
              <ListItem key={member.name}>
                <ListItemAvatar>
                  <Avatar src={member.avatar} alt={member.name} />
                </ListItemAvatar>
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    );
  }
}

export default TableView;
