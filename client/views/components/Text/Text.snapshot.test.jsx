import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Text from './index';

describe('Text', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Text {...props}>{props.children}</Text>);
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

  describe('with small props', () => {
    it('Should match snapshot', () => {
      props = {
        small: true
      };
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });

  describe('with inline props', () => {
    it('Should match snapshot', () => {
      props = {
        inline: true
      };
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });

  describe('with error props', () => {
    it('Should match snapshot', () => {
      props = {
        error: true
      };
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });
});
