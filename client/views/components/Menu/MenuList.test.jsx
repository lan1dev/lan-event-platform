import React from 'react';
import { shallow } from 'enzyme';
import MenuList from './MenuList';

describe('MenuList', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<MenuList>{props.children}</MenuList>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {};
    wrapper = undefined;
  });

  it('should render', () => {
    const ul = Wrapper().find('ul');
    expect(ul.length).toBeGreaterThan(0);
  });
});
