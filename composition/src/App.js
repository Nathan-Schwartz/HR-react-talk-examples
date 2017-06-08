import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import ConfiguredComponent from './oldComponents/ConfiguredComponent';
import ProtectedComponent from './oldComponents/ProtectedComponent';
import SlowComponent from './oldComponents/SlowComponent';
import CombinedComponent from './oldComponents/CombinedComponent';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
           <p className="App-intro">
            Click a link to get started
          </p>
          <Link to="/configured">ConfiguredComponent</Link><br />
          <Link to="/protected">ProtectedComponent</Link><br />
          <Link to="/slow">SlowComponent</Link><br />
          <Link to="/combined">CombinedComponent</Link><br />

          <hr/>

          <Route exact path="/configured" component={ConfiguredComponent}/>
          <Route path="/protected" component={ProtectedComponent}/>
          <Route path="/slow" component={SlowComponent}/>
          <Route path="/combined" component={CombinedComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;
