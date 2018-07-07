import React from 'react';
import { shallow } from 'enzyme';
import Title from './index';

describe('Title', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Title>{props.children}</Title>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {};
    wrapper = undefined;
  });

  it('should render', () => {
    const h1 = Wrapper().find('h1');
    expect(h1.length).toBeGreaterThan(0);
  });
});
