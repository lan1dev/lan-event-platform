import styled from 'styled-components';

/* eslint-disable react/destructuring-assignment */
const FlexBox = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
  align-items: ${props => (props.align ? props.align : 'flex-start')};
`;
/* eslint-enable react/destructuring-assignment */

export default FlexBox;
