import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

const defaultProps = {
  children: ''
};

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

const Header = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>;

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;
export default Header;
