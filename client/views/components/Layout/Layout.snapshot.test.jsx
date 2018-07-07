import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Layout from './index';

describe('Layout', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Layout {...props}>{props.children}</Layout>);
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

  describe('with sidebar props', () => {
    it('Should match snapshot', () => {
      props = {
        sidebar: true
      };
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });
});
