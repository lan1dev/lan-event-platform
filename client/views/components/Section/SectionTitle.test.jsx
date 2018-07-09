import React from 'react';
import { shallow } from 'enzyme';
import SectionTitle from './SectionTitle';

describe('SectionTitle', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<SectionTitle {...props}>{props.children}</SectionTitle>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {};
    wrapper = undefined;
  });

  it('should render', () => {
    const h2 = Wrapper().find('h2');
    expect(h2.length).toBeGreaterThan(0);
  });
});
