import React from 'react';
import { shallow } from 'enzyme';
import InputField from './index';

describe('InputField', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<InputField {...props}>{props.children}</InputField>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {
      meta: {}
    };
    wrapper = undefined;
  });

  it('should render', () => {
    const div = Wrapper().find('div');
    expect(div.length).toBeGreaterThan(0);
  });
});
