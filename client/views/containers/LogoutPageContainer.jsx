import { connect } from 'react-redux';

import LogoutPage from '../pages/LogoutPage';
import { sessionLogoutRequest } from '../../state/session/actions';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(sessionLogoutRequest())
});

export default connect(
  null,
  mapDispatchToProps
)(LogoutPage);
