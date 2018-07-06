import styled from 'styled-components';
/* eslint-disable react/destructuring-assignment */
const MenuList = styled.ul`
  list-style-type: none;
  margin: ${props => (props.horizontal ? '0 0 0 50px' : '60px 0 0 50px')};
  padding: 0;

  ${props =>
    props.horizontal &&
    `
  & li {
    float: left;
    margin: 0 10px;
  }
  `};
`;

export default MenuList;
