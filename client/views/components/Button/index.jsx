import styled from 'styled-components';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

/* eslint-disable react/destructuring-assignment */
const Button = styled.button`
  background: ${colors.primary};
  border-color: ${colors.dark};
  color: ${colors.dark};
  line-height: 1.5;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid;
  white-space: nowrap;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  height: 32px;
  user-select: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  font-family: ${fonts.primary};

  &:hover {
    background: ${colors.dark};
    color: ${colors.white};
    border-color: ${colors.dark};
  }
`;
/* eslint-enable react/destructuring-assignment */

export default Button;
