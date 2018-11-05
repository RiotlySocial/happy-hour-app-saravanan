// @flow
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

type Props = {
  counter: number,
  decrementCounter: (count: number) => void,
};
/**
 * About Page component
 * @class About
 * @extends {React.Component}
   */
class About extends React.Component<Props> {
  /**
   * Handles decrement functionality
   * @returns {void}
   */
  handleDecrement = () => {
    const { decrementCounter, counter } = this.props;
    decrementCounter(counter);
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
            <div>About page</div>
            <div>
              Count:
              { counter }
            </div>
            <button type="button" onClick={this.handleDecrement}>
              Decrement counter
            </button>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default About;
