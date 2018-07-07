import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Button from './index';

describe('Button', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Button {...props}>{props.children}</Button>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {};
    wrapper = undefined;
  });

  describe('without props', () => {
    it('Should match snapshot', () => {
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });
});
