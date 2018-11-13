// @flow
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Map } from 'immutable';
import Table from './table';

type Props = {

};

/**
 * Lobby Page component
 * @class Lobby
 * @extends {React.Component}
   */
class Lobby extends React.Component<Props, State> {
  /**
   * Creates an instance of Lobby
   * @param {object} props props for this component.
   */
  constructor(props) {
    super(props);
    this.state = { isLoading: true, tables: this.getTables() };
  }
  getTables = (data) => {
    let arr = [];
    for(let i=0;i < 8; i++){
      if(data && data[i]){
        arr[i] = data[i]
      }else{
        arr[i] = [];
      }
    }
    return arr;
  }
  /**
   * Called after component is mounted
   * @returns {void}
   */
  componentDidMount() {
    fetch('/api/table/all')
      .then(response => response.json())
      .then(data => this.setState({ tables: this.getTables(data), isLoading: false }));
  }

  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    const { tables } = this.state;
    return (
      <Card className="noShadow">
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
