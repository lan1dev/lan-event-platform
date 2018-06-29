import styled from 'styled-components';

/* eslint-disable react/destructuring-assignment */
const Modal = styled.div`
  background: ${props => (props.background ? props.background : 'white')};
  padding: 50px;
  margin: 50px;
`;
/* eslint-enable react/destructuring-assignment */

export default Modal;
