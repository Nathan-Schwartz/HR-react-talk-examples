import React from 'react';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import toJSON from 'enzyme-to-json';

import Card from '../Card';


const mockProps = {
  first_name: 'John',
  last_name: 'Smith',
  email: 'john.smith@email.com',
  image: 'https://www.notarealurl.com/',
  handleImportantClick: spy(),
}

describe('', () => {
  let mountedCard;
  it('should mount', () => {
    // Render and return an object representation of the 
    // entire Card subtree.
    mountedCard = mount(
      <Card {...mockProps} />,
    );

    // Should mount.
    expect(mountedCard).toBeTruthy();
  });

  it('Should match snapshot', () => {
    expect(toJSON(mountedCard)).toMatchSnapshot();

    // This eliminates the following manual tests:
    // Should recieve X props
    // Should render a span, with a div inside, and two buttons in that.
    // Should display X text in each button.
    // Should use X styles.

    // // Some of those tests would look like this:

    // // Outermost element isn't considered a "child"
    // const Span = mountedCard.find('span');
    // expect(Span.length).toBe(1);

    // expect(mountedCard.childAt(0).type()).toBe('div')
    // expect(mountedCard.childAt(0).children().map(a => a.type()))
    //   .toEqual(["img", "button","button"])

    // const Buttons = mountedCard.find('button')
    // expect(Buttons.length).toBe(2);
    // expect(Buttons.map(button => button.text()))
    //   .toEqual(["Important Button!", "Counter Button!"])
  });

  it('Should call handleImportantClick prop', () => {
    expect(mockProps.handleImportantClick.callCount).toBe(0);
    
    const ImportantButton = mountedCard
      .findWhere(a => a.props().onClick === mountedCard.props().handleImportantClick);

    expect(ImportantButton.length).toBe(1);
    ImportantButton.simulate('click');

    expect(mockProps.handleImportantClick.callCount).toBe(1);
  })
  
  it('Increment method should increment state', () => {
    expect(mountedCard.state().counter).toBe(0);
    mountedCard.instance().handleIncrement();
    expect(mountedCard.state().counter).toBe(1);
  })

  it('Clicking CounterButton should call handleIncrement', () => {

    // Inject spy.
    spy(mountedCard.instance(), "handleIncrement");

    // Update the component so that the component's uses of handleIncrement
    // don't still refer to the original.
    mountedCard.update();
    
    expect(mountedCard.instance().handleIncrement.callCount).toBe(0);

    // Retrieve the button that uses it
    const CounterButton = mountedCard
      .findWhere(a => a.props().onClick === mountedCard.instance().handleIncrement);

    expect(CounterButton.length).toBe(1);

    // Click on it
    CounterButton.simulate('click')

    // Make sure the spy was called
    expect(mountedCard.instance().handleIncrement.callCount).toBe(1);
  })
});