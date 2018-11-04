// @flow
import React from 'react';

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
    );
  }
}

export default About;
