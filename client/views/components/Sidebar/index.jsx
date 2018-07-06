import React from 'react';
import Wrapper from './Wrapper';
import sidebarConfig from '../../../configs/sidebarConfig';
import Menu from '../Menu';

const Sidebar = () => (
  <Wrapper>
    <Menu items={sidebarConfig} />
  </Wrapper>
);

export default Sidebar;
