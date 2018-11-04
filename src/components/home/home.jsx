// @flow
import React from 'react';

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
      <div>
        <div>Home page</div>
        <div>
          Count:
          { counter }
        </div>
        <button type="button" onClick={this.handleIncrement}>
          Increment counter
        </button>
      </div>
    );
  }
}

export default Home;
