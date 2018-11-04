import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import About from "./components/about/about";
import Home from "./components/home/home";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

type Props = {};
class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

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
