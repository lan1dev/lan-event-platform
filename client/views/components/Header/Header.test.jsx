import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('Header', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Header>{props.children}</Header>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {};
    wrapper = undefined;
  });

  it('should render', () => {
    const header = Wrapper().find('header');
    expect(header.length).toBeGreaterThan(0);
  });
});
