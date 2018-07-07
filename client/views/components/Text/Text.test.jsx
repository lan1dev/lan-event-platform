import React from 'react';
import { shallow } from 'enzyme';
import Text from './index';

describe('Text', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Text>{props.children}</Text>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {};
    wrapper = undefined;
  });

  it('should render', () => {
    const p = Wrapper().find('p');
    expect(p.length).toBeGreaterThan(0);
  });
});
