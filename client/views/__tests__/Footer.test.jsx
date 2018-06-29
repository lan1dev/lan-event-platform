import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../common/Footer';

describe('Label', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Footer>{props.children}</Footer>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {
      children: undefined
    };
    wrapper = undefined;
  });

  it('should render a footer element', () => {
    const footer = Wrapper().find('footer');
    expect(footer.length).toBeGreaterThan(0);
  });
});
