import React from 'react';
import withAsyncData from '../HigherOrderComponents/withAsyncData';

class CombinedComponent extends React.Component {

  state = {
    loading: true,
    data: null,
    authenticated: window.authenticated
  }

  componentDidMount() {
    // Custom configuration
    // Could also do global state manipulation
    document.getElementsByTagName('title')[0].text = "Special Page";
    document.getElementsByClassName('App-header')[0].style.backgroundColor = "white";
  }

  componentWillUnmount() {
    // Reset
    document.getElementsByTagName('title')[0].text = "React App";
    document.getElementsByClassName('App-header')[0].style.backgroundColor = "rgb(50, 50, 50)";
  }

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
      : this.props.loading 
        ? (
          <img 
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" 
            style={{ margin: '0 auto', height: 100, width: 100 }} />
        )
        : (
          <div>
            This is where we would do things with out data:
            <code> {JSON.stringify(this.props.data, null, 2)} </code>
          </div>
        )
  }
}

export default withAsyncData(CombinedComponent)