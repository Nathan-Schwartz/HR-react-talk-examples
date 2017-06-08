import React from 'react';
import withAsyncData from '../HigherOrderComponents/withAsyncData';
import withLoadingIcon from '../HigherOrderComponents/withLoadingIcon';
import compose from '../util/compose';

function SlowComponent(props) {
  return (
    <div>
      This is where we would do things with out data:
      <code> {JSON.stringify(props.data, null, 2)} </code>
    </div>
  );
}

const enhance = compose(
  withAsyncData,
  withLoadingIcon,
);

export default enhance(SlowComponent);
