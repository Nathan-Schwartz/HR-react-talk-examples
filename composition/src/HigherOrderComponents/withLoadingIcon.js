import React from 'react';

export default function withLoadingIcon(Component) {
  return function ConditionalLoader(props) {
    return (
      props.loading
        ? (
          <img 
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" 
            style={{ margin: '0 auto', height: 100, width: 100 }} />
        )
        : <Component {...props} />
    )
  }
}