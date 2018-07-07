import React from 'react';
import { shallow } from 'enzyme';
import Layout from './index';

describe('Layout', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Layout>{props.children}</Layout>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {};
    wrapper = undefined;
  });

  it('should render', () => {
    const div = Wrapper().find('div');
    expect(div.length).toBeGreaterThan(0);
  });
});
