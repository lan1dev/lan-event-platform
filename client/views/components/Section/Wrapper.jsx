import styled from 'styled-components';

/* eslint-disable react/destructuring-assignment */
const Wrapper = styled.section`
  background: ${props => (props.background ? props.background : '#f0f2f5')};
  height: 100vh;
  margin: 0 auto;
  max-width: 1500px;
`;
/* eslint-enable react/destructuring-assignment */

export default Wrapper;
