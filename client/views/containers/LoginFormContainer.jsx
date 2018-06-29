import { connect } from 'react-redux';

import LoginForm from '../forms/LoginForm';
import { performLogin } from '../../state/session/actions';

/* eslint-disable require-jsdoc */
const mapDispatchToProps = dispatch => ({
  sendForm: (url, fields) => dispatch(performLogin(url, fields))
});

const mapStateToProps = state => ({
  isLoggedIn: state.session.loggedInAs.isLoggedIn,
  errors: state.session.loginHasError.errorMessages
});
/* eslint-enable require-jsdoc */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
