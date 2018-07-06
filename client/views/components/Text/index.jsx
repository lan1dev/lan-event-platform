import styled from 'styled-components';
import fonts from '../../constants/fonts';
import colors from '../../constants/colors';

/* eslint-disable react/destructuring-assignment */
const Text = styled.p`
  font-family: ${fonts.primary};
  font-size: ${props => (props.small ? '12px' : '14px')};
  display: ${props => (props.inline ? 'inline' : 'block')};
  color: ${props => (props.error ? colors.error : 'rgba(0, 0, 0, 0.65)')};
`;
/* eslint-enable react/destructuring-assignment */

export default Text;
