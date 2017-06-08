import React from 'react';
import Card from './Card';
import data from '../sampledata.json';

// Here we are using PureComponent to (lazily) implement a 
// shouldComponentUpdate check for state and props changes.
export default class FastContainer extends React.PureComponent {

  state = {
    data: data.slice(0, 200),
  }

  moveFirstToLast = () => {
    this.setState({ 
      data: [ 
        ...this.state.data.slice(1, this.state.data.length),
        this.state.data[0],
      ] 
    }, console.log.bind(null, "Done!"));
  }

  render() {
    console.log('Container rerender')
    return (
      <div>
        <button onClick={this.moveFirstToLast}>
          Click to reorder
        </button>
        <hr />
        {
          // We also add a contant, unique key to make 
          // reconciliation easier for React
          this.state.data.map((person) => (
            <Card key={person.email} {...person} />
          ))

          // // Lets see how it works with a unique, dynamic key
          // this.state.data.map((person, i) => (
          //   <Card key={i} {...person} />
          // ))
        }
      </div>
    );
  }
}
