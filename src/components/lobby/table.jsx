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
    const { members, history } = this.props;
    if (members.length < 4 && history) {
      history.push('/table-view');
    }
  };

  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    const { members } = this.props;
    const hover = members.length > 3 ? 'r-table-nohover' : '';
    return (
      <div className={`${hover} r-table`} onClick={this.goToTableView}>
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
