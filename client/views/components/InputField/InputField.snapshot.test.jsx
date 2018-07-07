import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import InputField from './index';

describe('InputField', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<InputField {...props}>{props.children}</InputField>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {
      meta: {}
    };
    wrapper = undefined;
  });

  describe('without props', () => {
    it('Should match snapshot', () => {
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });

  describe('with error prop', () => {
    it('Should match snapshot', () => {
      props = {
        error: 'an error',
        meta: {
          touched: true
        }
      };
      expect(toJson(Wrapper())).toMatchSnapshot();
    });

    describe('when not touched', () => {
      it('Should match snapshot', () => {
        props = {
          warning: 'an warning',
          meta: {
            touched: false
          }
        };
        expect(toJson(Wrapper())).toMatchSnapshot();
      });
    });
  });

  describe('with warning prop', () => {
    it('Should match snapshot', () => {
      props = {
        warning: 'an warning',
        meta: {
          touched: true
        }
      };
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
    describe('when not touched', () => {
      it('Should match snapshot', () => {
        props = {
          warning: 'an warning',
          meta: {
            touched: false
          }
        };
        expect(toJson(Wrapper())).toMatchSnapshot();
      });
    });
  });
});
