// @flow
import React from 'react';
import './table.css';
import { Avatar } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import type { User } from '../../utils/types';

type Props = {
  members: [User],
  history?: any,
};

/**
 * Table component
 * @class Table
 * @extends {React.Component<Props>}
   */
class Table extends React.PureComponent<Props> {
  /**
   * Redirect user to table view page
   * @returns {void}
   */
  goToTableView = () => {
    const { history } = this.props;
    if (history) {
      history.push('/table-view');
    }
  };

  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    const { members } = this.props;
    return (
      <div className="r-table" onClick={this.goToTableView}>
        {members && members.map((member, index) => member
          && <Avatar
            className={`r-avatar-${index}`}
            src={member.avatar}
            alt={member.name}
          />)}
      </div>
    );
  }
}

export default withRouter(Table);
