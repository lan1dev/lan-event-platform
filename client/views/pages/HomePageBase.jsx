import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import menuConfig from '../../configs/menuConfig';
import Menu from '../components/Menu';
import FlexBox from '../components/FlexBox';
import Footer from '../components/Footer';

const defaultProps = {
  children: 'page'
};

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

const HomePageBase = ({ children }) => (
  <Fragment>
    <Header>
      <FlexBox>
        <Link to="/">Logo</Link>
        <Menu horizontal items={menuConfig} />
      </FlexBox>
      <div>
        <Link to="/login">Login</Link> / <Link to="Register">Register</Link>
      </div>
    </Header>
    {children}
    <Footer>LAN Platform ©2018</Footer>
  </Fragment>
);

HomePageBase.defaultProps = defaultProps;
HomePageBase.propTypes = propTypes;

export default HomePageBase;
