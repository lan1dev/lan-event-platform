import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import menuConfig from '../../../configs/menuConfig';
import Menu from './Menu';
import FlexBox from '../../common/FlexBox';

const Header = () => (
  <Wrapper>
    <FlexBox>
      <Link to="/">Logo</Link>
      <Menu items={menuConfig} />
    </FlexBox>
    <div>
      <Link to="/login">Login</Link> /<Link to="Register">Register</Link>
    </div>
  </Wrapper>
);

export default Header;
