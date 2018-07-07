import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './index';

describe('Sidebar', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Sidebar>{props.children}</Sidebar>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {};
    wrapper = undefined;
  });

  it('should render', () => {
    const aside = Wrapper().find('aside');
    expect(aside.length).toBeGreaterThan(0);
  });
});
