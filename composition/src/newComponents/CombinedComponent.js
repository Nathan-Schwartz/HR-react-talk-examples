import React from 'react';
import withAsyncData from '../HigherOrderComponents/withAsyncData';
import withLoadingIcon from '../HigherOrderComponents/withLoadingIcon';
import withConfig from '../HigherOrderComponents/withConfig';
import withPageProtection from '../HigherOrderComponents/withPageProtection';
import compose from '../util/compose';

const CombinedComponent = (props) => (
  <div>
    Members only data
    <code> {JSON.stringify(props.data, null, 2)} </code>
  </div>
)


// Order matters
const enhance = compose(
  withConfig,
  withLoadingIcon,
  withPageProtection,
  // Right now our data isn't protected, 
  // but we could move it above withPageProtection to fix that.
  withAsyncData, 
);

export default enhance(CombinedComponent);