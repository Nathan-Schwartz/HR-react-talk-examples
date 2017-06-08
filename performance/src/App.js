import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Container from './slow/Container';
// import Container from './fast/Container';

import logo from './logo.svg';
import './App.css';

injectTapEventPlugin();


class App extends Component {

  state = {
    counter: 0,
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {

    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <p className="App-intro">
              <span> {this.state.counter} </span>
              <button onClick={this.incrementCounter}>
                Click to increment
              </button>
            </p>

            <hr/>

            <Container />

          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
