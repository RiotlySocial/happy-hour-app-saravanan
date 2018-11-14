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
    const timer = setInterval(() => this.getUpdatedData(), 3000);
    this.state = { isLoading: true, tables: this.getTables(), timer };
    // this.setState({timer});
  }
  getTables = (data) => {
    if(data && data.reduce){
    data = data.reduce((obj, item) => {
      obj[item.position] = item
      return obj
    }, {});
  }
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
  getUpdatedData = async () => {
    const data = await fetch('/api/table/all')
      .then(response => response.json());
    this.setState({ tables: this.getTables(data), isLoading: false });

  }
  componentWillUnmount(){console.log(this.state.timer);
    clearInterval(this.state.timer);
  }
  /**
   * Called after component is mounted
   * @returns {void}
   */
  async componentDidMount() {
    this.getUpdatedData();
    // const es = new window.EventSource(`${window.API_URL}/api/updates`);
    
    // es.addEventListener('connected', (e) => {
    //   console.log(e.data);
    //   // => Hello world!
    // });
    
    // es.addEventListener("message", function(e) {
    //   console.log(e.data);
    // }, false);
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
