import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/addRecipe/addRecipe';
import Home from './components/home/home';

class App extends Component {
  /*render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }*/
  render() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-recipe">About</Link>
          </li>
          
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/add-recipe" component={AddRecipe} />
      </div>
    </Router>
  );
  }
}

export default App;
