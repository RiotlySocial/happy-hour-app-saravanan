// @flow
import React from 'react';
import './table.css';
import { Avatar, Tooltip } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import type { User } from '../../utils/types';

type Props = {
  members: [User],
  tableId: string,
  position: number,
  history?: any,
};

/**
 * Table component
 * @class Table
 * @extends {React.Component<Props>}
   */
class Table extends React.PureComponent<Props> {
  static defaultProps = {
    tableId: 'new',
    members: []
  }
  /**
   * Redirect user to table view page
   * @returns {void}
   */
  goToTableView = () => {
    const { members, history, tableId, position } = this.props;
    if (members.length < 4 && history) {
      history.push(`/table-view/${tableId}?position=${position}`);
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
          && <Tooltip title={member.first_name}><Avatar
            key={member._id}
            className={`r-avatar-${index}`}
            src={member.avatar + '0'}
            alt={member.first_name}
          /></Tooltip>)}
      </div>
    );
  }
}

export default withRouter(Table);
