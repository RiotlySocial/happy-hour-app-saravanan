// @flow
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Map } from 'immutable';
import CircularProgress from '@material-ui/core/CircularProgress';
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
  getTables = (data = []) => {
    data = data.reduce((obj, item) => {
      obj[item.position] = item
      return obj
    }, {});
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
  async componentDidMount() {
    const data = await fetch('/api/table/all')
      .then(response => response.json());
    this.setState({ tables: this.getTables(data), isLoading: false })
  }
  getRandomKey = () => {
    return Math.random();
  }
  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    const { tables, isLoading } = this.state;
    return (
      <Card className="noShadow">
        <CardContent>
          <div className="r-table-container">
          { isLoading && <CircularProgress />}
          { !isLoading && tables && tables.map((table, index) => <Table key={table._id || this.getRandomKey()} position={index} tableId={table._id} members={table.members} />)}
            
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default Lobby;
