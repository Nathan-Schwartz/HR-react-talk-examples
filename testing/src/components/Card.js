import React from 'react';

export default class ContactCard extends React.Component {

  state = { counter: 0 }

  handleIncrement = (event, toggle) => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    const { email, first_name, last_name, image } = this.props;
    return (
      <span style={{ width: 250, display: 'inline-block', margin: 10 }}>
        <div>
          <img src={image} />
          <button onClick={this.props.handleImportantClick}> 
            Important Button!
          </button>
          <button onClick={this.handleIncrement}> 
            Counter Button!
          </button>
        </div>
      </span>
    );
  }
}
