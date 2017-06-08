import React from 'react';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import toJSON from 'enzyme-to-json';

import withLoadingIcon from '../withLoadingIcon';


const mockLoadingState = {
  loading: true,
  data: null,
}

const mockLoadedState = {
  loading: false,
  data: { present: true },
}

const BasicComponent = (props) => <span>{JSON.stringify(props.data)}</span>

describe('', () => {
  let mountedComponent;
  let ComposedComponent;

  it('should return a Component', () => {
    ComposedComponent = withLoadingIcon(BasicComponent);
    React.isValidElement(ComposedComponent);
  })

  it('should mount', () => {
    mountedComponent = mount(
      <ComposedComponent {...mockLoadedState} />,
    );

    expect(mountedComponent).toBeTruthy();
  });

  it('Should match loaded snapshot', () => {
    expect(toJSON(mountedComponent)).toMatchSnapshot();
  });

  it('Should match loading snapshot', () => {
    mountedComponent.setProps(mockLoadingState);
    expect(toJSON(mountedComponent)).toMatchSnapshot();
  });
});