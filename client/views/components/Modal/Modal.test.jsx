import React from 'react';
import { shallow } from 'enzyme';
import Modal from './index';

describe('Modal', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Modal>{props.children}</Modal>);
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
