import React from 'react';
import withAsyncData from '../HigherOrderComponents/withAsyncData';

class SlowComponent extends React.Component {

  render() {

    return (
      this.props.loading 
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
    );
  }
}

export default withAsyncData(SlowComponent)