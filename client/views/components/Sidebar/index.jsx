import React from 'react';
import Wrapper from './Wrapper';
import { getSidebarMenu } from '../../../configs/menuConfig';
import Menu from '../Menu';

const Sidebar = () => (
  <Wrapper>
    <Menu items={getSidebarMenu()} />
  </Wrapper>
);

export default Sidebar;
