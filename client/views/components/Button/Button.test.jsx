import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Button>{props.children}</Button>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {};
    wrapper = undefined;
  });

  it('should render', () => {
    const button = Wrapper().find('button');
    expect(button.length).toBeGreaterThan(0);
  });
});
