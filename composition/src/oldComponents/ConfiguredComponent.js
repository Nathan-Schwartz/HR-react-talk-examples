import React from 'react';

export default class SlowComponent extends React.Component {

  state = {
    loading: true,
    data: null,
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

  render() {

    return (
      <div> This page has a custom title and background color </div>
    );
  }
}