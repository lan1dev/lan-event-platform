import React from 'react';
import { shallow } from 'enzyme';
import Form from './index';

describe('Form', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Form>{props.children}</Form>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {};
    wrapper = undefined;
  });

  it('should render', () => {
    const form = Wrapper().find('form');
    expect(form.length).toBeGreaterThan(0);
  });
});
