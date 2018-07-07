import styled from 'styled-components';

/* eslint-disable react/destructuring-assignment */
const Header = styled.header`
  height: 50px;
  width: 100%;
  border-bottom: ${props => (props.primary ? 'none' : '1px solid black')};
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 0 20px;
`;

export default Header;
