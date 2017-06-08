import React from 'react';
import withConfig from '../HigherOrderComponents/withConfig';

const ConfiguredComponent = (props) => <div> Custom content! </div>

export default withConfig(ConfiguredComponent);