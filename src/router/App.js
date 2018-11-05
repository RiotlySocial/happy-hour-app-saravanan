// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import About from '../containers/AboutContainer';
import Home from '../containers/HomeContainer';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import PublicRoute from './publicRouter';
import PrivateRoute from './privateRouter';


type Props = {
  hasAuth: boolean,
  logoutUser: () => void,
  loginUser: () => void
};
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
    console.log(props);
  }

  /**
   * Renders the component.
   * @returns {React.Component} The rendered component.
   */
  render() {
    const { hasAuth, loginUser, logoutUser } = this.props;
    return (
      <Router>
        <div>
          <Header hasAuth={hasAuth} loginUser={loginUser} logoutUser={logoutUser} />
          <main>
            <Switch>
              <PublicRoute exact path="/" component={Home} />
              <PrivateRoute path="/about" component={About} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
