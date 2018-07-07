import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Modal from './index';

describe('Modal', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Modal {...props}>{props.children}</Modal>);
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

  describe('with background props', () => {
    it('Should match snapshot', () => {
      props = {
        background: 'gray'
      };
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });
});
