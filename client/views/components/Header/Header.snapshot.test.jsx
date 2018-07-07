import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Header from './index';

describe('Header', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Header {...props}>{props.children}</Header>);
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

  describe('with props', () => {
    it('Should match snapshot', () => {
      props = {
        primary: true
      };
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });
});
