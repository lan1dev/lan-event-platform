import React from 'react';
import { shallow } from 'enzyme';
import Main from './index';

describe('Main', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Main>{props.children}</Main>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {};
    wrapper = undefined;
  });

  it('should render', () => {
    const main = Wrapper().find('main');
    expect(main.length).toBeGreaterThan(0);
  });
});
