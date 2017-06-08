import React from 'react';
import Card from './Card';
import data from '../sampledata.json';

export default class FastContainer extends React.Component {

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
        {this.state.data
          .map((person) => (
            <Card {...person} />
          ))
        }
      </div>
    );
  }
}
