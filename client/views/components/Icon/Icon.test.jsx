import React from 'react';
import { shallow } from 'enzyme';
import Icon from './index';

describe('Icon', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Icon>{props.children}</Icon>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {};
    wrapper = undefined;
  });

  it('should render', () => {
    const i = Wrapper().find('i');
    expect(i.length).toBeGreaterThan(0);
  });
});
