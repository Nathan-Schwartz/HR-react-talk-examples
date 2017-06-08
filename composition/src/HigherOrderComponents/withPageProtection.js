import React from 'react';

export default function withPageProtection(Component) {
  return class PageProtection extends React.Component {

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
        : <Component {...this.props} />
   }
  }
}
