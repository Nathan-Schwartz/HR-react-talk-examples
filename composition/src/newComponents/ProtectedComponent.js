import React from 'react';
import withPageProtection from '../HigherOrderComponents/withPageProtection';

function SlowComponent(props) {
  return (
    <div>
      Yay I'm authenticated, so now I can see this message.
    </div>
  );
}

export default withPageProtection(SlowComponent);
