import styled from 'styled-components';
import colors from '../constants/colors';

/* eslint-disable react/destructuring-assignment */
const Header = styled.header`
  background: ${props => (props.secondary ? colors.secondary : colors.white)};
  padding: 0 50px;
  height: 64px;
  line-height: 64px;
  flex: 0 0 auto;
  box-sizing: border-box;
`;
/* eslint-enable react/destructuring-assignment */

export default Header;
