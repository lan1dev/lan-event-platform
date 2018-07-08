import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';
import Wrapper from './Wrapper';

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

const Section = ({ title, children }) => (
  <Wrapper>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Wrapper>
);

Section.propTypes = propTypes;
export default Section;
