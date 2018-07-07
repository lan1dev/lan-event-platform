import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import ManuList from './MenuList';

describe('ManuList', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<ManuList {...props}>{props.children}</ManuList>);
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

  describe('with horizontal props', () => {
    it('Should match snapshot', () => {
      props = {
        horizontal: true
      };
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });
});
