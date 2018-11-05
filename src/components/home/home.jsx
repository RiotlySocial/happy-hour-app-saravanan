// @flow
import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

type Props = {
  counter: number,
  incrementCounter: (count: number) => void,
};
/**
 * Home Page component
 * @class Home
 * @extends {React.Component}
   */
class Home extends React.Component<Props> {
  /**
   * Handles increment functionality
   * @returns {void}
   */
  handleIncrement = () => {
    const { incrementCounter, counter } = this.props;
    incrementCounter(counter);
  };

  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    const { counter } = this.props;
    return (
      <Card>
        <CardContent>
          <div>
            <div>Home page</div>
            <div>
              Count:
              { counter }
            </div>
            <Button color="secondary" onClick={this.handleIncrement}>
              Increment counter
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default Home;
