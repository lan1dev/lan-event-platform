import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Icon from './index';

describe('Icon', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Icon {...props}>{props.children}</Icon>);
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
