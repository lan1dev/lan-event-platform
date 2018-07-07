import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Footer from './index';

describe('Footer', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Footer {...props}>{props.children}</Footer>);
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

  describe('when props are undefined', () => {
    it('Should match snapshot', () => {
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });

  describe('when props are defined', () => {
    it('Should match snapshot', () => {
      props.children = 'Text';
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });
});
