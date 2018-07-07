import React from 'react';
import { shallow } from 'enzyme';
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

  it('should render', () => {
    const div = Wrapper().find('div');
    expect(div.length).toBeGreaterThan(0);
  });

  describe('with direction prop', () => {
    it('Should be column', () => {
      props = {
        direction: 'column'
      };
      expect(Wrapper()).toHaveStyleRule('flex-direction', 'column');
    });
  });

  describe('with jusify prop', () => {
    it('Should be centered', () => {
      props = {
        justify: 'center'
      };
      expect(Wrapper()).toHaveStyleRule('justify-content', 'center');
    });
  });

  describe('with align prop', () => {
    it('Should be centered', () => {
      props = {
        align: 'center'
      };
      expect(Wrapper()).toHaveStyleRule('align-items', 'center');
    });
  });
});
