// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './containers/AboutContainer';
import Home from './containers/HomeContainer';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

type Props = {};
/**
 * App component
 * @class App
 * @extends {React.Component}
   */
class App extends Component<Props> {
  /**
   * Constructor method for component
   * @param {Props} props props for the component
   * @returns {void}
   */
  constructor(props: Props) {
    super(props);
    console.log(this.props);
  }

  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <Router>
        <div>
          <Header />
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
