import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import FlexBox from './index';

describe('FlexBox', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<FlexBox {...props}>{props.children}</FlexBox>);
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

  describe('with direction prop', () => {
    it('Should match snapshot', () => {
      props = {
        direction: 'column'
      };
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });

  describe('with jusify prop', () => {
    it('Should match snapshot', () => {
      props = {
        justify: 'center'
      };
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });

  describe('with align prop', () => {
    it('Should match snapshot', () => {
      props = {
        align: 'center'
      };
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });
});
