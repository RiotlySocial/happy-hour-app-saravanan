// @flow
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Map } from 'immutable';
import Table from './table';

type Props = {
  tables: [[Map<string, string | number | boolean>]],
};

/**
 * Lobby Page component
 * @class Lobby
 * @extends {React.Component}
   */
class Lobby extends React.PureComponent<Props> {
  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    const { tables } = this.props;
    return (
      <Card>
        <CardContent>
          <div className="r-table-container">
            {tables && tables.map(table => <Table members={table} />)}
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default Lobby;
