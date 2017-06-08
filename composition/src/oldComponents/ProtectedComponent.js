import React from 'react';

export default class SlowComponent extends React.Component {

 state = { authenticated: window.authenticated }

  authenticate = () => {
    this.setState({ authenticated: true });
    window.authenticated = true;
  }

  render() {
    return this.state.authenticated !== true
      ? (
        <div>
          You aren't logged in, would you like to?
          <button onClick={this.authenticate}> Login </button>
        </div>
      )
      : (
        <div>
          Yay I'm authenticated, so now I can see this message.
        </div>
      )
  }
}